'use strict';
// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated.

// Global Variables
var username;

// Functions
// Locks user into loop until proper yes/no answer is received.
// Returns a boolean.
function quizAskQuestion(question) {
  var answer = prompt(question + " answer: (yes/no) or (y/n)").toLowerCase();
  while ((answer !== 'y') && (answer !== 'yes') && (answer !== 'n') && (answer !== 'no')){
    answer = prompt("Sorry, but I didn't understand that answer. " + question + " answer: (yes/no) or (y/n)").toLowerCase();
  }
  if ((answer === 'yes') || (answer == 'y')){
    return true;
  }
  else {
    return false;
  }
}

// Check the user answer against correct answer.
// answer is user response, correctAnswer should be provided as a boolean.
function checkAnswer(answer, correctAnswer){
  if (answer === correctAnswer){
    //console.log('Correct!');
    alert('Correct!');
  }
  else {
    //console.log('Incorrect.');
    alert('Incorrect.');
  }
}


// Code goes here:
// Greet the user and get their name.
username = prompt("Welcome! What is your name?");
alert("Thanks for visiting my page, " + username + "! I'd like to invite you to play a game with me. I'm going to ask you five questions about the information on my page. You can retake the quiz as many times as you like.");

// Do I like school? lol Correct Answer: no.
var doILikeSchool = quizAskQuestion("Am I a big fan of traditional schooling?");
checkAnswer(doILikeSchool, false);

// But do I like learning though? Correct Answer: no.
var doIlikeLearning = quizAskQuestion("I'd rather have a high paying job where I didn't have to keep learning new things. Is that true?");
checkAnswer(doIlikeLearning, true);

// Play with Python much? Correct Answer: yes.
var doIKnowPython = quizAskQuestion("Is Python a programming language that I'm at least familiar with?");
checkAnswer(doIKnowPython, true);

// Why so serious? Do I make games? Correct Answer: no.
var firstProjects = quizAskQuestion("My first coding projects were games. Is that true?");
checkAnswer(firstProjects, false);

// Thank the user for playing the game.
alert("Thanks for playing with me " + username + "! You can start the game again any time you like by clicking the link at the top of the page.");







// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.