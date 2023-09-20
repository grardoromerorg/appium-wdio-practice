describe('Android Native Feature Tests', () => {

    it('Access an Activity (screen) Directly', async () => {

        //start app on specific screen
        //startActivity('package', 'package + currentActivity')
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        //pause
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with dialog boxes', async () => {

        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        //click on first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        //alternative = click on OK or cancel button
        await $('//*[@text="OK"]').click();

        //alternative accept alert
        // await driver.acceptAlert();

        //alternative = dismiss alert
        //await driver.dismissAlert();

        //assert alert box is no longer visible
        await expect($('~android:id/alertTitle')).not.toExist();
    })

    it('Vertical Scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();

        //scroll text into view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //alternative --- scroll to the end (not stable --- we are not scrolling to the particular element. it can always be moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal Scrolling', async () => {

        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1')

        //forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000)
    })

    it('Exercise 2: Scrolling --- SELF SOLUTION', async () => {

        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.DateWidgets1')

        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        console.log('Current Date Is -->', await currentDate.getText());

        await $('~change the date').click();

        // //forward
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(1)');

        // await $('//*[@text="10"]').click();

        // await driver.pause(6000)
    })

    it.only('Exercise 2: Scrolling --- TUTOR SOLUTION (MIXED)', async () => {

        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.DateWidgets1')

        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate = await date.getText();
        console.log('Current Date Is -->', await currentDate);

        //click on change the date
        await $('~change the date').click();

        //scroll forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //choose new date
        await $('//*[@text="10"]').click();
        await $('//*[@text="OK"]').click();

        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);
    })
})