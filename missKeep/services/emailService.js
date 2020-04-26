import utilService from './utilService.js'
import storageService from './storageService.js'

var GdefaultEmails=[
    {   
        from:'Avner',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930594
    },
    {
        from:'Kuki',
        subject: 'How are you?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930596
    },
    {
        from:'Avner',
        subject: 'Hello',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930597
    },
    {
        from:'Avner',
        subject: 'Hi Ms. Smith',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930598
    },
    {
        from:'Apple',
        subject: 'Your inovice from apple.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930599
    },
    {
        from:'Ebay',

        subject: 'Relisted item:pupu kuku',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930694
    },
    {
        from:'Market Place',
        subject: '3 bargains found for you',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        
        id: utilService.makeId(),

        sentAt : 1551133930794
    },
    {
        from:'Amazon',

        subject: 'Your Amazon oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930894
    },
    {
        from:'Asos',

        subject: 'Your Asos oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133930994
    },
    {
        from:'Ebay',

        subject: 'Your Ebay oreder has been dispatched',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        isRead: false,
        id: utilService.makeId(),

        sentAt : 1551133931594
    }

]


var gEmails = null

_createEmails();

export default {
    query,
}


function _createEmails() {
    gEmails = storageService.load('emails', GdefaultEmails)
    storageService.store('emails', gEmails)

}

function _createEmail(subject, body,from) {
    return {
        from,
        subject,
        body,
        id: utilService.makeId(),
        sentAt: Date.now()
    }
}


function query(filterBy) {
    var emails = gEmails;
    if (filterBy) {
       
    }
    return Promise.resolve(emails);
}