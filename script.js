'use strict';

// inital vlaues
let currScore, activePlayer, activeGame, Scores, activePlayerNum;
activePlayerNum = 0;
let acPlayerSection = document.querySelector(`.player--${activePlayerNum}`);
let acPlayerScore = document.getElementById(`score--${activePlayerNum}`);
let dice = document.querySelector('.dice');
let acCurrScore = document.getElementById(`current--${activePlayerNum}`);
reset();
// Buttons
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');

// Button Events
newGame.addEventListener('click', reset);
rollDice.addEventListener('click', roll);
holdDice.addEventListener('click', hold);

// Button Event Fucntions
function reset() {
  acPlayerScore.textContent = 0;
  acCurrScore.textContent = 0;
  currScore = 0;
  Scores = [0, 0];
  activeGame = true;
  dice.classList.add('hidden');
  if (acPlayerSection.classList.contains('player--winner')) {
    acPlayerSection.classList.remove('player--winner');
    acPlayerSection = document.querySelector('.player--0');
    acPlayerSection.classList.add('player--active');
  } else if (acPlayerSection.classList.contains('player--active')) {
    acPlayerSection.classList.remove('player--active');
    acPlayerSection = document.querySelector('.player--0');
    acPlayerSection.classList.add('player--active');
    // let uaPlayerScore = (document.getElementById('score--1').textContent = 0);
    // let uaPlayerScore0 = (document.getElementById('score--0').textContent = 0);
    // acPlayerScore.document.getElementById('score--'); .textContent = 0;
    // changePlayer();
    // acPlayerScore.textContent = 0;
  }
  acCurrScore = document.getElementById('current--0');
}

function roll() {
  if (activeGame) {
    // Roll the virtual di
    const di = Math.trunc(Math.random() * 6) + 1;

    //show the dice image
    dice.classList.remove('hidden');
    dice.src = `dice-${di}.png`;

    //If 1 is rolled
    if (di === 1) {
      changePlayer();
    } else {
      // If rolled 2-6
      currScore += di;
      acCurrScore.textContent = currScore;
    }
  }
}

function hold() {
  if (activeGame) {
    Scores[activePlayerNum] += currScore;
    switch (Scores[activePlayerNum] >= 20) {
      // Checking for Winner
      case true:
        activeGame = false;
        acPlayerScore.textContent = Scores[activePlayerNum];
        acPlayerSection.classList.add('player--winner');
        acPlayerSection.classList.remove('player--active');
        break;
      // No winner yet
      case false:
        acPlayerScore.textContent = Scores[activePlayerNum];
        changePlayer();
        break;
    }
  }
}
//Reuse Functions
function changePlayer() {
  currScore = 0;
  acCurrScore.textContent = currScore; // Possible Fucntion in Refractoring
  acPlayerSection.classList.toggle('player--active');
  acPlayerSection = document.querySelector(
    `.player--${(activePlayerNum = activePlayerNum === 0 ? 1 : 0)}`
  );
  acPlayerSection.classList.toggle('player--active');
  acPlayerScore = document.getElementById(`score--${activePlayerNum}`);
  acCurrScore = document.getElementById(`current--${activePlayerNum}`);
  console.log(activePlayerNum);
}

function activeSection(PlayerNum) {
  acPlayerSection = document.querySelector(`.player--${PlayerNum}`);
  acPlayerSection.classList.toggle('player--active');
}
