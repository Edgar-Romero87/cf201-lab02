'use strict';
// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated.

// Global Variables
var username; // name of user
var quizAnswers = [false,false,false,false,false,false]; // player scorecard.


// Functions
// Locks user into loop until proper yes/no answer is received.
// Returns a boolean.
function quizAskQuestion(question){
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
function checkAnswer(answer, correctAnswer, questionNumber){
  if (answer === correctAnswer){
    //console.log('Correct!');
    alert('Correct!');
    quizAnswers[questionNumber] = true;
  }
  else {
    //console.log('Incorrect.');
    alert('Incorrect.');
  }
}


// Code goes here:

// Greet the user and get their name.
username = prompt("Welcome! What is your name?");
if (confirm("Thanks for visiting my page, " + username + "! I'd like to invite you to play a game with me. I'm going to ask you five questions about the information on my page. You can retake the quiz as many times as you like.")){

  // Extra variables for the game.
  var luckyNumber = 7;
  //var luckyNumber = parseInt(Math.random()*10);
  var guessLuckyNumber;

  // Do I like school? lol Correct Answer: no.
  var doILikeSchool = quizAskQuestion("Am I a big fan of traditional schooling?");
  checkAnswer(doILikeSchool, false, 0);
  
  // But do I like learning though? Correct Answer: no.
  var doIlikeLearning = quizAskQuestion("I'd rather have a high paying job where I didn't have to keep learning new things. Is that true?");
  checkAnswer(doIlikeLearning, false, 1);
  
  // Play with Python much? Correct Answer: yes.
  var doIKnowPython = quizAskQuestion("Is Python a programming language that I'm at least familiar with?");
  checkAnswer(doIKnowPython, true, 2);
  
  // Why so serious? Do I make games? Correct Answer: no.
  var firstProjects = quizAskQuestion("My first coding projects were games. Is that true?");
  checkAnswer(firstProjects, false, 3);

  // Do I like to stay put? Correct answer: no.
  var stayingPut = quizAskQuestion("Do I tend to stay employed at one job for as long as possible?");
  checkAnswer(firstProjects, false, 4);

  
 
  // Lucky number game.
  console.log(luckyNumber);
  for (var i=0; i<4; i++){
    if (i===0){
      guessLuckyNumber = prompt("Now lets try something different. I am thinking of a number between 1-10. Can you guess that number? You have 4 guesses.");
    }
    else{
      guessLuckyNumber = prompt("Try again. Guess a number between 1-10. You have " + (4 - i) + " guesses remaining.");
    }
    
    while (!(guessLuckyNumber > 0 && guessLuckyNumber < 11 )){
      guessLuckyNumber = prompt("Was that a number between 1-10? You need to enter any whole number in the range of 1 through 10.");
    }

    if (luckyNumber == guessLuckyNumber){
      alert("Wow! Good guess! " + guessLuckyNumber + " was correct.");
      quizAnswers[5] = true;
      break;
    }
    else if (i === 3){
      alert("Sorry, that was wrong, and you're all out of guesses.")
    }
    else if (guessLuckyNumber < luckyNumber){
      alert("Too low! Try again.");
    }
    else if (guessLuckyNumber > luckyNumber){
      alert("Too high! Try again.");
    }
    
    
  }

  // A guessing game with multiple correct answers.
  var famousDevelopers = [['Dennis Ritchie','Dennis MacAlistair Ritchie was an American computer scientist who is credited for shaping and pioneering the digital era. He created the most commonly used C programming language that is used today in various software applications, embedded system development, operating systems, and has influenced most modern programming languages.'],
  ['Linus Torvalds','Linus Benedict Torvalds s a Finnish American software engineer, who was the principal driving force behind the development of the Linux kernel. Its creation itself is attributed towards him and he later became the chief architect of the Linux kernel, and is now the project’s coordinator.'],
  ['Bjarne Stroustrup','Bjarne Stroustrup is a Danish computer scientist who is credited for the creation and the development of the widely used and highly successful C++ programming language. He not only invented it, but also evolved it, all by himself, by writing its early definitions, producing its first implementation, formulating its design criteria, designing all its major facilities, processing extension proposals for standards committee and its standard textbook.'],
  ['Tim Berners-Lee','Sir Timothy John “Tim” Berners-Lee is a British computer scientist who is renowned all across the globe because of his creation of the World Wide Web as well as the implementation of the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in November, 1989.'],
  ['Brian Kernighan','Brian Wilson Kernighan is a Canadian computer scientist who worked at Bell Labs alongside Ken Thompson and Dennis Ritchie. He is the co-creator and developer of UNIX. He is also co-author of the AWK and AMPL programming languages. Kernighan is currently a Professor and the Undergraduate Department Representative at the Computer Science Department of Princeton University.'],
  ['Donald Knuth','Donald Ervin Knuth is an American computer scientist and mathematician as well as a Professor Emeritus (retired professor) at Stanford University. Knuth has been dubbed as the “Father of the Analysis of Algorithms” as he has contributed to the development of rigorous analysis of the computational complexity of algorithms and systematized formal mathematical techniques for it.'],
  ['Ken Thompson', 'Kenneth Lane Thompson, or simply “Ken” as he is called by the hacker community, is an American pioneer of computer science. Thompson had designed and implemented the original Unix operating system and also invented the B programming language (the direct predecessor to the famous C programming language), and was one of the early developers of the Plan 9 operating systems.'],
  ['Guido van Rossum','Guido van Rossum is a Dutch computer programmer who is the author of the popular Python programming language that is wildly used today. His creation of Python lead him to being declared a “Benevolent Dictator For Life” the In the Python community which means that he continues to oversee the Python development process, making decisions where necessary, forever.'],
  ['James Gosling','James Arthur Gosling is a Canadian computer scientist and an officer of the order of Canada. He has coded quite a number of programs but is widely known for his creation of the highly successful and commonly used Java programming language in 1994 as well as its original virtual machine and compiler. He credits his creation towards his graduate student days where he created a p-code virtual machine for the lab’s DEC VAX computer, so that his professor could run UCSD Pascal programs and then realized that the architecture-neutral execution for widely distributed programs could be achieved by a similar technique.'],
  ['Bill Gates','Arguably one of the most popular computer programmers of all time, Bill Gates is an American business magnate, computer programmer, PC pioneer, investor, and philanthropist. He is the co-founder, ex-executive officer and current chairman of Microsoft, which is the world’s largest personal-computer software company. He is the best-known entrepreneurs of the personal computer revolution and helped develop Windows, which is the most used operating system in the world.'],
  ['Niklaus Wirth','Niklaus Emil Wirth is a Swiss computer scientist who is regarded as a pioneer of computer programming among other fields in software engineering. He is best known for designing several programming languages, including the highly popular Pascal, Euler, Algol W, Modula, Modula-2, Oberon, Oberon-2, and Oberon-07. He also designed the simple programming language PL/0 to illustrate compiler design which formed the basis for many university compiler design classes.'],
  ['Ada Lovelace', 'Augusta Ada King, more commonly known as Ada Lovelace, was an English mathematician and the world’s first computer programmer and was chiefly known for her work on Charles Babbage’s early mechanical general-purpose computer, the Analytical Engine. The notes she created for the Analytical Engine include what is recognized as the very first algorithm created solely for the intent of being processed by a machine or in other words, the world’s first computer program.']
  ];

  var guessFamousDevelopers = prompt("I found a list on the internet of the Top Twelve Most Influential Software Developers in History. If you can guess one of the names on the list, I'll tell you what they're most famous for. You have unlimited guesses for this one. Be sure to capitalize the name properly. Enter your guess in the box below.");
  var devGuessingGameState = true;
  
  for (var i=1; i<=6; i++){
    for (var f=0; f<famousDevelopers.length; f++){
      if (guessFamousDevelopers === famousDevelopers[f][0]){
        alert("Correct! " + famousDevelopers[f][1]);
        quizAnswers[6] = true;
        i = 6;
        f = famousDevelopers.length;
        devGuessingGameState = false;
      }
    }

    if (devGuessingGameState && i<6){
      guessFamousDevelopers = prompt("Sorry, that doesn't match any of the names on my list. Try again. You have " + (6-i) + " guesses remaining.");
    }
    else if (devGuessingGameState) {
      for (var f=0; f<famousDevelopers.length; f++){
        if (guessFamousDevelopers === famousDevelopers[f][0]){
          alert("Correct! " + famousDevelopers[f][1]);
          quizAnswers[6] = true;
          i = 6;
          devGuessingGameState = false;
        }
      }

      if (devGuessingGameState){
        alert("Darn! You're all out of guesses. Thanks for playing!");
        devGuessingGameState = false;
      }
      
    }
  }

  // Calculate player score and thank them for playing.
  var playerScore=0;
  for (var i=0; i<quizAnswers.length; i++){
    if (quizAnswers[i]){
      playerScore++;
    }
  }

  alert("Thanks for playing with me, " + username + "! You scored " + playerScore + " correct out of 7 questions. You can retake the quiz any time you like by clicking the link at the top of the page.")
}
