const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  defaultCommandTimeout: 7000,
  viewportHeight: 660,  
  viewportWidth: 1000, 
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    testUseremail: 'xajaveppeicu-7909@yopmail.com',
    testUserPassword: 'fghRTY789AA'
  }
  }
});
