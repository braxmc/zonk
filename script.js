'use strict';

// - Objective of game is to get on the board & the first player to reach
// 10,000 total score wins
// - Must score 1000 in one turn to get on board
// - You zonk when you roll no points
// POINTS
// a 1 on the dice = 100
// a 5 on the dice = 50
// three of a kind = 100x the value on dice
// four of a kind = 100x value on dice *2
// five of a kind = 100x value on dice *3
// six of a kind = 100x value on dice *4
// - IF DONE IN ONE ROLL
// three 1's = 1,000
// four 1's = 2,000
// five 1's = 3,000
// six 1's = 4,000
// 3 pairs = 1,000
// 1,2,3,4,5,6 = 1000

// selecting elements
const currentP1 = document.getElementById('currentP1');
const currentP2 = document.getElementById('currentP2');
const totalP1 = document.getElementById('totalP1');
const totalP2 = document.getElementById('totalP2');

const btnRoll = document.querySelector('.rollBtn');
const diceEl1 = document.querySelector('.dice1')

let scores, currentScore, currentPlayer, playing;

function init() {
  // allows you to play
  playing = true;
  // setting variables;
  scores = [0, 0];
  currentScore = 0;
  // set player
  currentPlayer = 0;
  // sets scores on page to 0
  currentP1.textContent = 0;
  currentP2.textContent = 0;
  totalP1.textContent = 0;
  totalP2.textContent = 0;
}
init();

// roll the dice
function diceRoll() {
  return Math.trunc(Math.random() * 6) + 1;
}

btnRoll.addEventListener('click', function() {
  if(playing) {
    // generate number 1-6 for each dice
    const dice1 = diceRoll();
    const dice2 = diceRoll();
    const dice3 = diceRoll();
    const dice4 = diceRoll();
    const dice5 = diceRoll();
    const dice6 = diceRoll();
    console.log(dice1, dice2, dice3, dice4, dice5, dice6);
    // display dice
    // diceEl1.src = `dice-${num}.png`
  }
})


