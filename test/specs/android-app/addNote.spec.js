const addNoteScreen = require("../screen-objects/android/add-note.screen")

describe('Add Notes App Basic User Flows', async () => {

    it('User Is Able To Add A Note', async () => {
        const note = { title: 'Anime List', body: 'Eureka Seven\nCode Geass\nShingeki No Bahamut'}
        await addNoteScreen.skipTutorial();
        await addNoteScreen.clickAddNoteButton();
        await addNoteScreen.clickTextButton();
        await expect(addNoteScreen.editingLabel).toBeDisplayed();
        await addNoteScreen.noteTitleField.setValue(note.title);
        await addNoteScreen.noteBodyField.setValue(note.body);
        await driver.back();
        await driver.back();
        await expect(addNoteScreen.editButton).toBeDisplayed();
        await expect(addNoteScreen.noteTitleField).toHaveText(note.title);
        await expect(addNoteScreen.noteBody).toHaveText(note.body);
        await driver.back();
    })

    it('User Is Able To Delete A Note', async () => {
        const title = await addNoteScreen.noteTitle.getText();
        await addNoteScreen.clickNoteTitle();
        await addNoteScreen.clickMenuButton();
        await addNoteScreen.clickDeleteButton();
        await expect(addNoteScreen.alertTitle).toBeDisplayed();
        await driver.acceptAlert();
        await addNoteScreen.clickHomeIconNav();
        await addNoteScreen.clickTrashCanButton();
        await expect(addNoteScreen.trashElementTitle).toHaveText(title);
    })
})