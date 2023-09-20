class AddNoteScreen {

    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
}

module.exports = new AddNoteScreen();