var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
var score = 0;
console.log("Welcome "+ userName + ", Do you know about India? " )
//function
function game(question, answer){
var userAnswer = readlineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("YAY! "+ "You were right!")
  score = score + 1;
} else{
  console.log("OOPS! "+ "You were wrong!")
}
  console.log("Your current score is "+ score)
  console.log("-------------------")
}

var questions = [questionOne = {
  question: "1. Who is the Prime minister of India?\n A: Narendra Modi \n B: Rahul Gandhi \n C: Arvind Kejriwal \n D: Manoj Tiwari \n Your Option: ",
  answer: "a"
},
questionTwo = {
  question: "2. Who is the President of India?\n A: Narendra Modi \n B: Rahul Gandhi \n C: Arvind Kejriwal \n D: Ram Nath Kovind \n Your Option: ",
  answer: "d"
},
questionThree = {
  question: "3. Who wrote National Anthem of India?\n A: Mahatma Gandhi \n B: Tulsi Das \n C: Rabindra Nath Tagore \n D: Swami Vivekanand \n Your Option: ",
  answer: "c"
},
questionFour = {
  question: "4. What's the National Fruit of India?\n A: Apple \n B: Banana \n C: Kiwi \n D: Mango \n Your Option: ",
  answer: "d"
},
questionFive = {
  question: "5. How many states are there of India?\n A: 27 \n B: 30 \n C: 28 \n D: 29 \n Your Option: ",
  answer: "c"
},
];
for(let i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  //function calling
game(currentQuestion.question, currentQuestion.answer);
} 
console.log(userName + ", YOUR FINAL SCORE IS: "+ score)
