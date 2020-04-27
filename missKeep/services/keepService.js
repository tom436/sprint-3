import utilService from './utilService.js'
import storageService from './storageService.js'

var notes = [{
    type: "NoteText",
    isPinned: true,
    id: utilService.makeId(),
    info: {
        txt: "Fullstack Me Baby!",
    }
}, {
    type: "NoteImg",
    id: utilService.makeId(),
    info: {
        url: "https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg",
        title: "Tom & Jerry",
    },
    style: {
        backgroundColor: "#00d"
    }
}, {
    type: "NoteTodos",
    id: utilService.makeId(),
    info: {
        label: "How was it:",
        todos: [{
            txt: "Do that",
            doneAt: null
        }, {
            txt: "Do this",
            doneAt: 187111111
        }]
    }
}];

var gKeeps = null

_createKeeps();

export default {
    query,
}


function _createKeeps() {
    gKeeps = storageService.load('keeps', notes)
    storageService.store('keeps', gKeeps)

}

function _createKeep(subject, body, from) {
    return {
       
        id: utilService.makeId(),
        sentAt: Date.now()
    }
}


function query(filterBy) {
    var keeps = gKeeps;
    if (filterBy) {

    }
    return Promise.resolve(keeps);
}