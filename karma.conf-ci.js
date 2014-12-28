// Karma configuration
// Generated on Sun Dec 28 2014 07:41:45 GMT+0100 (CET)
var customLaunchers = require('./sauceLabsBrowsers');
module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      '*.spec.js'
    ],
    reporters: ['dots', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 30000,
    captureTimeout: 120000,

    browsers: Object.keys(customLaunchers),
    sauceLabs: {
      testName:'dummy-drunken-octo-nemesis',
      recordScreenshots: false
    },
    customLaunchers: customLaunchers
  });


  if (process.env.TRAVIS) {
    var buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';

    config.sauceLabs.build = buildLabel;
    config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  }
};
