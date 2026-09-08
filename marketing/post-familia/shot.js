const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.resolve(process.env.PAGE || 'marketing/post-familia/post.html'));
  await p.evaluate(() => document.fonts.ready);
  if (process.env.GUIDE) await p.evaluate(() => document.getElementById('guide').style.display = 'block');
  if (process.env.VARS) await p.evaluate((v) => { for (const [k, val] of Object.entries(JSON.parse(v))) document.documentElement.style.setProperty(k, val); }, process.env.VARS);
  await p.waitForTimeout(200);
  // report text boxes for margin check
  const boxes = await p.evaluate(() => ['h1','h2','box','price','foot'].filter(id => document.getElementById(id)).map(id => { const el = document.getElementById(id); const r = (el.querySelector('span') || el).getBoundingClientRect(); return { id, l: Math.round(r.left), t: Math.round(r.top), r: Math.round(r.right), b: Math.round(r.bottom) }; }));
  console.log(JSON.stringify(boxes));
  await p.screenshot({ path: process.env.OUT || 'marketing/post-familia/out/post.png', type: 'png' });
  await b.close();
})();
