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

    ctrl.errors = {
        titleCheck: {
            checkFunc: function () {
                return ctrl.newNote.title
            },
            checkFlag: false,
            checkMessage: 'Note must have a title.'
        }
    }

    ctrl.toggleAddNote = function () {
        ctrl.display.addNoteView = !ctrl.display.addNoteView
    }

    ctrl.selectNote = function (note, index) {
        ctrl.selectedNote = Object.assign({'index': index}, note)
    }

    ctrl.addNote = function () {
        if(ctrl.errors.titleCheck.checkFunc()){
            ctrl.display.addNoteView = false
            ctrl.list.unshift(ctrl.newNote)
            ctrl.selectNote(ctrl.list[0], 0)
            ctrl.errors.titleCheck.checkFlag = false
            ctrl.newNote = {
                title: "",
                content: ""
            }
        } else {
            ctrl.errors.titleCheck.checkFlag = true
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