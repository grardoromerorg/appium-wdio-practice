describe('Android Elements Tests', () => {

    it('Find Element By Accessibility ID', async () => {

        //find element by access id
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find Element By Class Name', async () => {

        //find element by class name >>>>>> single $ symbol returns the first element
        const className = await $('android.widget.TextView');

        //print text
        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText('API Demos');
    })

    it('Find Element By Class XPath', async () => {

        //IF ONLY THIS CASE, NEED TO OPEN APP MENU FIRST
        // const appOption = await $('~App');
        // await appOption.click();

        //find element by XPath
        // FORMAT ====== (//tagname[attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resourceID attr
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class + assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
        await $('//android.widget.TextView[@text="Command two"]')
    })

    it.skip('Find Element By UIAutomator', async () => {

        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
        
    })

    it('Working With Multiple Elements', async () => {

        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []

        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //loop through elements
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //assert the list
        await expect(actualList).toHaveText(expectedList);
    })

    it('Exercise 1: Text field interaction --- SELF SOLUTION', async () => {

        const viewsButton = await $('~Views');
        const autoCompleteButton = await $('//android.widget.TextView[@text="Auto Complete"]');
        const screenTopButton = await $('//android.widget.TextView[@content-desc="1. Screen Top"]');
        const countryField = await $('android.widget.AutoCompleteTextView');
        let testCountry = 'Venezuela'

        await viewsButton.click();
        await autoCompleteButton.click();
        await screenTopButton.click();
        await countryField.addValue(testCountry)
        await expect(countryField).toHaveText(testCountry)
    })

    it('Exercise 1: Text field interaction --- improved with TUTOR SOLUTION', async () => {

        const viewsButton = await $('~Views');
        //using * wildcards
        const autoCompleteButton = await $('//*[@text="Auto Complete"]');
        const screenTopButton = await $('//*[@content-desc="1. Screen Top"]');
        const countryField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        let testCountry = 'Venezuela'

        await viewsButton.click();
        await autoCompleteButton.click();
        await screenTopButton.click();
        await countryField.addValue(testCountry)
        await expect(countryField).toHaveText(testCountry)
    })
})