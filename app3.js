'use strict'

// function getMonthAndYear(){
//     let today = new Date();
//     let hourNow = today.getHours();
//     let greeting;
    
    
//     if (hourNow > 18) {
//         greeting = 'Good evening!';
//     } else if (hourNow > 12) {
//         greeting = 'Good afternoon!';
//     } else if (hourNow > 0) {
//         greeting = 'Good morning!';
//     }
    
//     document.write('<h3>' + greeting + '<h3>');  
// }

// getMonthAndYear();

function numberGuessingGame(){
    // followed along during day 4 lecture with Roger Huba
    // set the correct number
    // got random number gen from w3 schools
    let correctAnswer = Math.floor(Math.random() * 100) +1;
    console.log(correctAnswer);
    // maybe later we can get a random number
    let guesses = 4;

    // get a number from the user
    for(let i = 0; i < guesses; i++){
        let userAnswer = prompt('How many cups of coffee is it acceptable to drink in a day? 1-100');
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Outside of Range. Please enter a number between 1-100')
        }
        

        if(userAnswer == correctAnswer){
            alert('DING DING DING! YOU GOT IT RIGHT!');
            break;
        } else if(userAnswer > correctAnswer){
            alert('Way too many! Try again!')
        } else if(userAnswer < correctAnswer){
            alert('How can you survive on only ' + userAnswer + ' cups a day?! Try again!')
        }
    }
    
    // I need to set the number of guesses
    // check if the guess is right
    // check if they have guesses left

    // stretch goal
    // let user know if number is high or low

}

function starRating(){
    let userAnswer = prompt('How many stars would you give Coffee House?')
    if(userAnswer > 5){
        userAnswer = 5
    }
    for(let i = 0; i < userAnswer; i++){
        document.write('<img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg">')
    }
    
}
