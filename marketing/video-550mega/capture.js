// Renders ad.html frame-by-frame with Playwright and pipes PNGs into ffmpeg (H.264).
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const FFMPEG = process.env.FFMPEG;
const W = 1080, H = 1920, FPS = 30;
const DUR = parseFloat(process.env.DUR || '15');
const OUT = process.env.OUT || 'video-silent.mp4';
const STILLS = process.env.STILLS; // comma-separated seconds -> write PNG stills instead of video
const TIMELINE = process.env.TIMELINE; // optional JSON override
const VARIANT = process.env.VARIANT; // path to JSON {variant, timeline} -> uses ad2.html
const PAGE = VARIANT ? 'ad2.html' : 'ad.html';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(PAGE));
  await page.evaluate(() => document.fonts.ready);
  if (TIMELINE) await page.evaluate((tl) => window.setTimeline(JSON.parse(tl)), TIMELINE);
  if (VARIANT) { const v = JSON.parse(fs.readFileSync(VARIANT, 'utf8')); await page.evaluate(([vv, tl]) => window.setVariant(vv, tl), [v.variant, v.timeline]); }
  await page.evaluate(() => window.seek(0));
  await page.waitForTimeout(300);

  if (STILLS) {
    const SDIR = process.env.STILLS_DIR || 'stills'; fs.mkdirSync(SDIR, { recursive: true });
    for (const s of STILLS.split(',')) {
      const t = parseFloat(s);
      await page.evaluate((t) => window.seek(t), t);
      await page.screenshot({ path: `${SDIR}/t${t.toFixed(2)}.png`, type: 'png' });
      console.log('still', t);
    }
    await browser.close();
    return;
  }

  const ff = spawn(FFMPEG, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-vcodec', 'mjpeg', '-r', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.1',
    '-movflags', '+faststart', '-r', String(FPS), OUT], { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = Math.round(DUR * FPS);
  const t0 = Date.now();
  for (let i = 0; i < total; i++) {
    const t = i / FPS;
    await page.evaluate((t) => window.seek(t), t);
    const buf = await page.screenshot({ type: 'jpeg', quality: 93 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 60 === 0) console.log(`frame ${i}/${total} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await browser.close();
  console.log('done', OUT);
})();
