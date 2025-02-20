let max = prompt("Enter the maximum value of the range : ");

const random = Math.floor(Math.random() * max) + 1;       

let guess = prompt("Guess the number : ");
while(true) {
    if(guess == "quit") {
        console.log("Quitting game....");
        break;
    }
    else if(guess == random) {
        console.log("Hurray! you guessed it correct");
        break;
    }
    else if(guess < random) {
        guess = prompt("Hint : your guess was small, please try again : ");
    }
    else {
        guess = prompt("Hint : your guess was large, please try again : ");
    }
}
