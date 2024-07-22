class addNoteScreen {
    get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
    get addNoteButton() {
        return $('//*[@text="Add note"]');
    }
    get textButton() {
        return $('//*[@text="Text"]');
    }
    get editingLabel() {
        return $('//*[@text="Editing"]');
    }
    get noteTitleField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get noteBodyField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get noteBody() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get editButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    get menuButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }
    get deleteButton() {
        return $('//*[@text="Delete"]');
    }
    get alertTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]');
    }
    get homeIconNav() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get trashCanButton() {
        return $('//*[@text="Trash Can"]');
    }
    get trashElementTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    async skipTutorial() {
        await this.skipButton.click();
    }
    async clickAddNoteButton() {
        await this.addNoteButton.click();
    }
    async clickTextButton() {
        await this.textButton.click();
    }
    async clickNoteTitle() {
        await this.noteTitle.click();
    }
    async clickMenuButton() {
        await this.menuButton.click();
    }
    async clickDeleteButton() {
        await this.deleteButton.click();
    }
    async clickHomeIconNav() {
        await this.homeIconNav.click();
    }
    async clickTrashCanButton() {
        await this.trashCanButton.click();
    }
}

module.exports = new addNoteScreen();
