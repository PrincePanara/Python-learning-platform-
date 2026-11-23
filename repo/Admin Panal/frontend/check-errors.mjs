import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });

  console.log('Navigating to Modules...');
  await page.goto('http://localhost:5173/modules', { waitUntil: 'networkidle0' });
  
  console.log('Navigating to Courses...');
  await page.goto('http://localhost:5173/courses', { waitUntil: 'networkidle0' });

  await browser.close();
  console.log('Done.');
})();
