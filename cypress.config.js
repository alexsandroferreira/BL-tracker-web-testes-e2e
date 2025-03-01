const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
         setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://business-location-tracker-web.vercel.app/',
    video: true,
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    },
   
  }
});