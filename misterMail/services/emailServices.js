import utilService from './utilService.js'
import storageService from './storageService.js'

var GdefaultEmails = [
    {
        from: 'Avner',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        sentAt: 1551133930594
    },
    {
        from: 'Kuki',
        subject: 'How are you?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
        isRead: false,
        isStarred:false,
        id: utilService.makeId(),
        isReceived:true,
        sentAt: 1551133930596
    },
    {
        from: 'Avner',
        subject: 'Hello',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,
        sentAt: 1551133930597
    },
    {
        from: 'Avner',
        subject: 'Hi Ms. Smith',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133930598
    },
    {
        from: 'Apple',
        subject: 'Your inovice from apple.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133930599
    },
    {
        from: 'Ebay',

        subject: 'Relisted item:pupu kuku',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133930694
    },
    {
        from: 'Market Place',
        subject: '3 bargains found for you',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:true,

        sentAt: 1551133930794
    },
    {
        from: 'Amazon',
        subject: 'Your Amazon oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133930894
    },
    {
        from: 'Asos',
        subject: 'Your Asos oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133930994
    },
    {
        from: 'Ebay',

        subject: 'Your Ebay oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),
        isReceived:true,
        isStarred:false,

        sentAt: 1551133931594
    }

]


var gEmails = null
var gDrafts=[];
_createEmails();
_createEDrafts();
export default {
    query,
    getById,
    setRead,
    remove,
    howManyRead,
    sendEmail,
    setStar,
    saveDraft,
    getByIdDraft

}
function saveDraft(subject,from,body){
    const newDraft=_createEmail(subject, body, from)
    gDrafts.unshift(newDraft)
    storageService.store('drafts', gDrafts)
    console.log('arraived!');
    
    return Promise.resolve();

}
function _createEDrafts() {
    gDrafts = storageService.load('drafts', gDrafts)
    storageService.store('drafts', gDrafts)

}

function getByIdDraft(draftId) {
    console.log('ok!');
    
    const draft = gDrafts.find(draft => draft.id === draftId)
    return Promise.resolve(draft);
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}
function setRead(email) {
    if(!email)return
    const res = email.isRead
    if (!res) email.isRead = true
    storageService.store('emails', gEmails)
}
function sendEmail(subject,from,body){
    const newMail=_createEmail(subject, body, from)
    gEmails.unshift(newMail)
    storageService.store('emails', gEmails)
    return Promise.resolve();

}

function _createEmail(subject, body, from) {
    return {
        from,
        subject,
        body,
        isRead: false,
        isReceived:false,
        isStarred:false,
        id: utilService.makeId(),
        sentAt: Date.now()
    }
}
function remove(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)
    storageService.store('emails', gEmails)
    return Promise.resolve();
}
function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}

function howManyRead() {
        var read=0;
        if(!gEmails)return
        gEmails.forEach(email => {
            if(email.isRead) read++;
        });
        const readPrecent=Math.round((read/gEmails.length)*100)
        return Promise.resolve(readPrecent)
}
function setStar(email){
    email.isStarred=!email.isStarred
    return Promise.resolve()
    
}


function _createEmails() {
    gEmails = storageService.load('emails', GdefaultEmails)
    storageService.store('emails', gEmails)

}




function query(filterBy,dest) {
    if(dest==='drafts') return Promise.resolve(gDrafts);
    
    var emails=gEmails; 
  
    if(dest==='sent')emails =gEmails.filter(email=>!email.isReceived);
    if(dest==='starred')emails =gEmails.filter(email=>email.isStarred);
    if (filterBy) {      
        var { text, ReadUnread } = filterBy
        text=text.toUpperCase()
        emails = emails.filter(email => 
            {
               return( email.body.toUpperCase().includes(text)
               ||email.from.toUpperCase().includes(text)
               ||email.subject.toUpperCase().includes(text))      
            })
            if(ReadUnread==='read') emails = emails.filter(email=>email.isRead)
            if(ReadUnread==='unread') emails = emails.filter(email=>!email.isRead)
    }

    return Promise.resolve(emails);
}