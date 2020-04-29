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
