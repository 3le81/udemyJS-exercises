'use strict';


// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
// another way for selecting an id selector is this and it works in the same way:
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1.Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);

        // 2.Display the dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1 
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player
            switchPlayer();
        }
    }
})
btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active's player score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player score is less >= 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            // Switch to next player
            switchPlayer();
        }
    }

});