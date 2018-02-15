var words = ["dog","cat","monkey","narwhal"]

var ids = ['hangmanWord','guessesLeft','wrongGuesses','winCount', 'lossCount']

var hangmanWord = 0;
var guessesLeft = 0;
var wrongGuesses = 0;
var winCount= 0;
var lossCount =0;
var answerWord =0;


var ltrs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function randomize (arr) {
    return arr [Math.floor(Math.random() * arr.length)]
}

function updateHangmanLetters(letter) {
//    for loop runs through letters in the word
    for (var i = 0; i < answerWord.length; i++) {
    // if any letter is a match the "if" takes control
        if (letter === answerWord [i] ) {
            var answerWordLetter = answerWord[i]
            hangmanWord[i] = answerWordLetter;
        }             
    }
}