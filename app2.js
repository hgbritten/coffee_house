`use strict`

function specialMessage(){

    let userNameLower = userNameOutside.toLowerCase();
    if (userNameOutside.toLowerCase() == 'hunter'){
        document.write('<h3 id="roger">' + 'Welcome Lord Britten, King of the Gods' + '<h3>');
    } else {
        document.write('<h3 id="not_roger">' + 'Welcome ' + userNameOutside + '<h3>');
    }
}

specialMessage();
