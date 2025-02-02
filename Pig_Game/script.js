'use strict';


// Selecting elemnts
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')
 const score0El = document.getElementById("score--0");
 const score1El = document.getElementById("score--1");
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--0');

 const diceEl = document.querySelector('.dice');
 const btnNew = document.querySelector(".btn--new");
 const btnRoll = document.querySelector(".btn--roll");
 const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing

//  intial conditions


const init = function(){
  
  
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
   player1El.classList.remove("player--winner");
   player0El.classList.add("player--active");
   player1El.classList.remove("player--active");
}

init();

const SwitchPlayer = function(){
  // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent =0;
    
    activePlayer = activePlayer === 0 ? 1 : 0; 
    currentScore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle("player--active");
}

// rolling dice functionality
btnRoll.addEventListener('click', function(){

  if(playing){
  // 1 Generating the random dice roll

  const dice = Math.trunc(Math.random()*6+1);
  // console.log(dice);
  

  // 2 Display dice
  diceEl.classList.remove('hidden');
  diceEl.src =`dice-${dice}.png`                                                

  // 3 chech for rolled 1
  if(dice !== 1){
    //add dice to current score
     currentScore += dice;

     document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    //  current0El.textContent = currentScore; // change this later

      
  }else{
    // // Switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent =
    //   currentScore; 
    // activePlayer = activePlayer === 0 ? 1 : 0; 
    // currentScore = 0;

    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle("player--active");
    SwitchPlayer();
  }
}
})


btnHold.addEventListener('click', function (){
  if(playing){
  // 1 Add current score to active player's score
  scores[activePlayer] += currentScore
  // if activeplayer = 0, score[0] = score[0] + currentscore
  //  if activeplayer = 1, score[1] = score[1] + currentscore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


  // 2 Check if player's score is >=100
  if(scores[activePlayer] >= 100){
    // Finish the game 
    playing = false;
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
    // Switch to the next player
    SwitchPlayer();
  }
}
});

btnNew.addEventListener('click', init);


