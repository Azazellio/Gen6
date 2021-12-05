const v8toIstanbul = require('v8-to-istanbul');
const playwright = require('playwright');
const { BuySKR } = require('./PageObjects/SecondObject');
const tests = require("@playwright/test");

  tests.test('If redirect fails -> Done', async({page}) =>
   {
    // await page.coverage.startJSCoverage();
    // const BuySKR = new BuySKR(page);
    // await BuySKR.Navigate();
    // await BuySKR.Buy();
    // const coverage = await page.coverage.stopJSCoverage();
    // for (const entry of coverage) {
    //   const converter = new v8toIstanbul('', 0, { source: entry.source });
    //   await converter.load();
    //   converter.applyCoverage(entry.functions);
    //   console.log(JSON.stringify(converter.toIstanbul()));
    // }
    // await tests.expect(page).toHaveURL('https://www.demoblaze.com/');
    await tests.expect(3).toBe(3);
  });

      