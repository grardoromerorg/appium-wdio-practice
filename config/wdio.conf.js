const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/android-app/addNote.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Pixel 7',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(),'./app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
