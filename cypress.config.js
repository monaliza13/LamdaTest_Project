const { defineConfig } = require('cypress');
const {fs} = require("fs");
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      const newPath = "./cypress/lighthouse/"
      fs.writeFileSync(
        `${newPath}report.json`,
        JSON.stringify(lighthouseReport, null, 2)
      );
    }
    ),
  });
};

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //addMatchImageSnapshotPlugin(on)
      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
    },
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Enables screenshot capture on test failure
    screenshotOnRunSuccess: true, // Enables screenshot capture on test success
    trashAssetsBeforeRuns: true,              // Clean up before each run
    chromeWebSecurity: false,
    browser: 'chrome',
    commandLineArgs: ['--no-sandbox']
  },
  env:{
    URL: 'https://www.lambdatest.com/selenium-playground'
  }
});
