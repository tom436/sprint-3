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
    }
},{
    type: "NoteText",
    isPinned: true,
    id: utilService.makeId(),
    info: {
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, leo quis dapibus commodo, purus augue aliquam risus, vitae rhoncus tortor justo ac tortor. Nulla a tincidunt nulla. Aenean egestas felis consequat libero malesuada, non varius elit efficitur. Nunc lorem leo, faucibus ac diam quis, fermentum tempus odio. Curabitur quis mattis dui. Aliquam justo augue, tempus id enim ut, hendrerit dictum neque. In risus velit, pharetra sit amet lacus sit amet, porta aliquet ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue vestibulum porta. Duis dignissim lobortis augue, ullamcorper malesuada nunc vulputate ac. Nunc fringilla blandit arcu sed euismod. Nulla facilisi. Praesent venenatis nibh et lectus feugiat condimentum",
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
},];

var gKeeps = null

_createKeeps();

export default {
    query,
    remove,
    changeColor,
}


function _createKeeps() {
    gKeeps = storageService.load('keeps', gDefaultKeeps)
    storageService.store('keeps', gKeeps)

}

function _createKeep(subject, body, from) {
    return {
       
        id: utilService.makeId(),
        sentAt: Date.now()
    }
}

function changeColor(keepId,bgc){
    debugger;
    const keepIdx = _getIdxById(keepId)
    gKeeps[keepIdx].style.backgroundColor = bgc;
}

function query(filterBy) {
    var keeps = gKeeps;
    if (filterBy) {

    }
    return Promise.resolve(keeps);
}

function remove(keepId) {
    const keepIdx = _getIdxById(keepId)
    gKeeps.splice(keepIdx, 1)

    storageService.store('keeps', gKeeps)
    return Promise.resolve();
}

function getById(keepId) {
    const keep = gKeeps.find(keep => keep.id === keepId)
    return Promise.resolve(keep);
}

function _getIdxById(keepId) {
    return gKeeps.findIndex(keep => keep.id === keepId)
}