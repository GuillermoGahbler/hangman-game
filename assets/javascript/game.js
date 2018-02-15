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

function updateGuesses (letter) {
 wrongGuesses.push(letter)   
 guessesLeft--;
}

function hideWord(arr) {
return Array(arr.length).fill('_')    
    // look up fill in mdn
}

function validateInput(key) {
    if(ltrs.indexOf(key)=== -1) return false;

    if (wrongGuesses.indexOf(key) >=0) return false;

    if (hangmanWord.indexOf(key) >=0) return false;
    return true;
}

function takeTurn(letter) {
    if (answerWord.indexOf(letter)>=0) {
        updateHangmanLetters(letter)  
                
    } else {
        updateGuesses(letter)
    }
    print(ids);
    
}

