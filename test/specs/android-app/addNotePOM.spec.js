const AddNoteScreen = require("../screen-objects/android/add-note")

describe('Add Notes', async () => {

    //BEFORE EACH HOOK EXAMPLE
    // beforeEach(async () => {
    //     await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    // });

    it.only('User Is Able To Add A Note', async () => {

        //skip tutorial
        await AddNoteScreen.skipBtn.click();

        const addNoteButton = $('//*[@text="Add note"]')
        const textButton = $('//*[@text="Text"]')
        const editingLabel = $('//*[@text="Editing"]')
        const noteTitleField = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        const noteBodyField = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        const noteTitle = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        const noteBody = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
        const editButton = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
        let testTitle = 'Anime List'
        let testNoteBody = 'Eureka Seven\nCode Geass\nShingeki No Bahamut'

        await addNoteButton.click();
        await textButton.click();
        await expect(editingLabel).toBeDisplayed();

        //Fill note (SET VALUE CLEARS AND TYPES ---- ADD VALUE ONLY ADDS IT) 
        await noteTitleField.setValue(testTitle);
        await noteBodyField.setValue(testNoteBody);

        //Go back twice to save the note
        await driver.back();
        await driver.back();

        //assertions 
        //edit button is displayed
        await expect(editButton).toBeDisplayed();

        //note has been added accordingly
        await expect(noteTitle).toHaveText(testTitle);
        await expect(noteBody).toHaveText(testNoteBody);

        await driver.back();
    })

    it('Exercise 3: User Is Able To Delete A Note', async () => {

        const noteTitle = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        const menuButton = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]')
        const deleteButton = $('//*[@text="Delete"]')
        const alertTitle = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]')
        const homeIconNav = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        const trashCanButton = $('//*[@text="Trash Can"]')
        const trashElementTitle = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')

        const title = await noteTitle.getText();
        await noteTitle.click();
        await menuButton.click();
        await deleteButton.click();
        await expect(alertTitle).toBeDisplayed();
        await driver.acceptAlert();
        await homeIconNav.click();
        await trashCanButton.click();
        await expect(trashElementTitle).toHaveText(title);

        //TAKEN FROM TUTOR SOLUTION >>>>>> GETTEXT FROM TITLE AND THEN MAKING SURE ITS SAME ON TRASH
    })
})