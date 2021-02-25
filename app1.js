`use strict`


function getUserName(){
    let userName = prompt('Please Enter your Name: ');
    document.write('<h2>' + 'Welcome ' + userName + '<h2>');
    
    return userName;
}


// getUserName();
let userNameOutside = getUserName();

// let userNameOutside1 = getUserName();
// let userNameOutside2 = getUserName();
// let userNameOutside3 = getUserName();
// let userNameOutside4 = getUserName();

function specialMessage1(){
    let userNameLower = userNameOutside.toLowerCase();
    if (userNameOutside.toLowerCase() == 'hunter'){
        document.write('<h3 id="roger">' + 'Welcome Lord Britten, King of the Gods' + '<h3>');
    } else {
        document.write('<h3 id="not_roger">' + 'Drink of thy cup ' + userNameOutside + ' the mortal' + '<h3>');
    }
}

// specialMessage();

function specialMessage2(){
    let userNameLower = userNameOutside.toLowerCase();
    if (userNameOutside.toLowerCase() == 'hunter'){
        document.write('<h3 id="roger">' + 'We bow to thee Lord Britten, King of the Gods' + '<h3>');
    } else {
        document.write('<h3 id="not_roger">' + 'The java is good ' + userNameOutside + ' boy' + '<h3>');
    }
}

function getMonthAndYear(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    }
    
    document.write('<h3>' + greeting + '<h3>');  
}

// getMonthAndYear();