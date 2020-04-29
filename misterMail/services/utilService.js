function makeId(length=3) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i=0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function getTime(timeStamp){
    if (timeStamp != null) {
        const time = new Intl.DateTimeFormat('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).format(timeStamp)
        return time;
    }
}


export default {
    makeId,
    getTime
}