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
        let time = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit', hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(timeStamp)
        time= "Done at: "+ time;
        return time;
    }
    else return  '';
}

export default {
    getTime,
    makeId
}