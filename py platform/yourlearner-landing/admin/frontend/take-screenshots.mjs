import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', defaultViewport: { width: 1280, height: 800 } });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/modules', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'modules.png' });
  console.log('Saved modules.png');

  await page.goto('http://localhost:5173/courses', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'courses.png' });
  console.log('Saved courses.png');

  await browser.close();
})();
