// 1: Doing Arithmetic With Finctions
let add = function( operand1, operand2) {
    return operand1 + operand2;
};

let multiply = function(operand1, operand2 ){
    return operand1 * operand2;
};

console.log((add(multiply(36325, 9824), 777)));

// 2: Are These Arrays The Same?
let areArraysSame = function(array1, array2){
    if  (array1.length === array2.length && JSON.stringify(array1) === JSON.stringify(array2)) {
        return true;
    }
    else{
        return false
    }
;
}
areArraysSame([1, 2, 3], [4, 5, 6])

// 3: Hangman, Using Functions
var pickWord = function(){
    var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",

    // 1: Add more words
    "population",
    "profound",
    "revoke",
    "determine",
    "provision"
    ];
    return words[Math.floor(Math.random() * words.length)]
};

var setupAnswerArray = function(word){
    var answerArray = [];
    for (var i = 0; i < word.length; i++){
        answerArray.push("_");
        }
        return answerArray;
        
};

var showPlayerProgress = function (answerArray){
    // use alert to show player progress
    alert(answerArray.join(" "));
};

var getGuess = function(){
    var guess = prompt("Guess a letter");
    while (guess === null || guess.length !== 1) {
        if (guess === null) {
            alert("Please enter a guess.");
        } 
        else {
            alert("Please enter a single letter.");
        }
        guess = prompt("Guess a letter");
    }
    return guess;
};

var updateGameState = function(guess, word, answerArray){
    //update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    var count = 0;
    for (var i = 0; i < word.length; i++){
        if (word[i] === guess) {
            answerArray[i] = guess;
            count++;
            }
    }
    return count;
};

var showAnswerAndCongratulatePlayer = function(answerArray){
    // show the answer and congratulate the player
    alert(answerArray.join(" "));
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0){
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null){
        break;
    }
    else if (guess.length !== 1){
        alert('Please enter a single letter');
    }
    else{
        var correctGuess = updateGameState(guess ,word, answerArray);
        remainingLetters -= correctGuess;
    }
}

showAnswerAndCongratulatePlayer(answerArray);
