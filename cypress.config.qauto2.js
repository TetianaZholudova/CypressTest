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
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    testUseremail: 'brinnafeuguzi-4059@yopmail.com',
    testUserPassword: 'fghRTY780NN'
  }
  }
});