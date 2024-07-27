'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '💃 correct number'

// document.querySelector('.number').textContent=15;
// document.querySelector('.score').textContent = 14;

// document.querySelector('.guess').galue = 23;
// console.log(document.querySelector('.guess').galue);


let secretNumber = Math.trunc(Math.random() * 20 + 1);


let score = 20;  
let highScore =0;

document.querySelector('.check').addEventListener
('click', function(){
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess);
    
//  1st scenario no guess or empty guess
 if (!guess) {
   document.querySelector(".message").textContent =
    "⛔ number!";

    // if player wins
 } else if (guess === secretNumber) {
   document.querySelector(".message").textContent = 
   "🍾  Correct number!"; 
      document.querySelector(".number").textContent = secretNumber;

   document.querySelector('body').style.backgroundColor = 
   '#60b347';
   document.querySelector('.number').style.width =
   '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector(".highscore").textContent
      = highScore;
    }





  //  if guess is to high
 } else if (guess > secretNumber) {
    if(score > 1){
       document.querySelector(".message").textContent = 
       "📈 Too high!";
       score--;
       document.querySelector(".score").textContent =
        score;
    } else {
      document.querySelector('.message').textContent
      ='🌚 you lost the game';
      document.querySelector('.score').textContent=0;
    }
    
    // if guess is too low
 } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
       "📈 Too low!";
      score--;
      document.querySelector(".score").textContent =
       score;
    } else {
      document.querySelector(".message").textContent = 
      "🌚 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
 }
})


document.querySelector(".again").addEventListener('click', function(){
  score=20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value= '';

   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".number").style.width = "15rem";


})





