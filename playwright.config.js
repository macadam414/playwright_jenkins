const { devices } = require('@playwright/test');

module.exports = {
  projects: [
    {
      name: 'Headless Tests',
      use: { ...devices['Desktop Chrome'], headless: false },
    },
  ],
};