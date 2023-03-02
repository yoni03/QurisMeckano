const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jbxkei',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },
});
