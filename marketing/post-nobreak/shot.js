const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.resolve('marketing/post-nobreak/post.html'));
  await p.evaluate(() => document.fonts.ready);
  if (process.env.GUIDE) await p.evaluate(() => document.getElementById('guide').style.display = 'block');
  if (process.env.VARS) await p.evaluate((v) => { for (const [k, val] of Object.entries(JSON.parse(v))) document.documentElement.style.setProperty(k, val); }, process.env.VARS);
  await p.waitForTimeout(200);
  // report text boxes for margin check
  const boxes = await p.evaluate(() => ['h1','h2','box','price','foot'].map(id => { const r = document.getElementById(id).getBoundingClientRect(); return { id, l: Math.round(r.left), t: Math.round(r.top), r: Math.round(r.right), b: Math.round(r.bottom) }; }));
  console.log(JSON.stringify(boxes));
  await p.screenshot({ path: process.env.OUT || 'marketing/post-nobreak/out/post.png', type: 'png' });
  await b.close();
})();
