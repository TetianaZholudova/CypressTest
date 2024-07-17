const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 7000,
  viewportHeight: 660,  
  viewportWidth: 1000, 
  
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
