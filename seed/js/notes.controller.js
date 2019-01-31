function NotesController () {
    var ctrl = this;

    ctrl.list = []

    ctrl.selectedNote = {}

    ctrl.newNote = {
        title: "",
        content: ""
    }

    ctrl.display = {
        'addNoteView': false
    }

    ctrl.toggleAddNote = function () {
        ctrl.display.addNoteView = !ctrl.display.addNoteView
    }

    ctrl.selectNote = function (note, index) {
        ctrl.selectedNote = Object.assign({'index': index}, note)
    }

    ctrl.addNote = function () {
        ctrl.display.addNoteView = false
        ctrl.list.unshift(ctrl.newNote)
        ctrl.selectNote(ctrl.list[0], 0)
        ctrl.newNote = {
            title: "",
            content: ""
        }
    }

    ctrl.deleteNote = function (index) {
        ctrl.list.splice(index, 1)
        ctrl.selectedNote = {}
    }
}

angular
    .module('app')
    .controller('NotesController', NotesController)