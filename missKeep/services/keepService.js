import utilService from './utilService.js'
import storageService from './storageService.js'

var gDefaultKeeps = [{
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
    },
    style: {
        backgroundColor: "#fff"
    }
}, {
    type: "NoteText",
    isPinned: true,
    id: utilService.makeId(),
    info: {
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, leo quis dapibus commodo, purus augue aliquam risus, vitae rhoncus tortor justo ac tortor. Nulla a tincidunt nulla. Aenean egestas felis consequat libero malesuada, non varius elit efficitur. Nunc lorem leo, faucibus ac diam quis, fermentum tempus odio. Curabitur quis mattis dui. Aliquam justo augue, tempus id enim ut, hendrerit dictum neque. In risus velit, pharetra sit amet lacus sit amet, porta aliquet ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue vestibulum porta. Duis dignissim lobortis augue, ullamcorper malesuada nunc vulputate ac. Nunc fringilla blandit arcu sed euismod. Nulla facilisi. Praesent venenatis nibh et lectus feugiat condimentum",
    },
    style: {
        backgroundColor: "#fff"
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
}, ];

var gKeeps = null

_createKeeps();

export default {
    query,
    remove,
    changeColor,
    createKeep,
}

function createKeep(img,title,subject) {
    gKeeps.push(_createKeep(img,title,subject))
}

function _createKeeps() {
    gKeeps = storageService.load('keeps', gDefaultKeeps)
    storageService.store('keeps', gKeeps)

}

function _createKeep(img, title, subject) {
    console.log(img,title,subject);
    return {
        type: "NoteText",
        isPinned: true,
        id: utilService.makeId(),
        info: {
            img: img,
            title: title,
            txt: subject,
        },
        style: {
            backgroundColor: "#fff"
        }
    }
}

function changeColor(keep, bgc) {
    const keepIdx = _getIdxById(keep.id)
    gKeeps[keepIdx].style.backgroundColor = bgc;
}

function query(filterBy) {
    var keeps = gKeeps;
    if (filterBy) {

    }
    return Promise.resolve(keeps);
}

function remove(keepId) {
    const keepIdx = _getIdxById(keepId.id)
    gKeeps.splice(keepIdx, 1)

    storageService.store('keeps', gKeeps)
    return Promise.resolve();
}

function getById(keepId) {
    const keep = gKeeps.find(keep => keep.id === keepId)
    return Promise.resolve(keep);
}

function _getIdxById(keepId) {
    console.log(keepId);
    return gKeeps.findIndex(keep => keep.id === keepId)
}