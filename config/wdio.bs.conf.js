const { config } = require('./wdio.conf.js')

config.user = 'gerardoromero_7sZtaG';
config.key = 'aMSipzko19WuJ2tqp53g',

config.specs = [
    '../test/specs/android-app/addNote.spec.js'
],
config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '12.0',
    'appium:deviceName': 'Google Pixel 7',
    'appium:automationName': 'UIAutomator2',
    'appium:app': "bs://e6f5130b5090af564e04a518b43fa55ac50b9448",
    'appium:autoGrantPermissions': true
}],

config.services = ['browserstack'];

exports.config = config;
