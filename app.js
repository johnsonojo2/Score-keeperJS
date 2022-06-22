"use strict";
// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }
// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }

// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }

// p1.button.addEventListener('click', function () {
//     updateScores(p1, p2)
// })
// p2.button.addEventListener('click', function () {
//     updateScores(p2, p1)
// })

// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }

const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const p1Display = document.querySelector("#p1display");
const p2Display = document.querySelector("#p2display");

let p1Score = 0;
let p2Score = 0;
let gameLimit = 5;
let isGameOver = false;

p1Button.addEventListener("click", () => {
  if (isGameOver === false) {
    p1Score += 1;
    p1Display.innerText = p1Score;
    if (p1Score === gameLimit) {
      window.alert("p1 won");
      isGameOver = true;
    }
  }
});
p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === gameLimit) {
      window.alert("p2 won");
      isGameOver = true;
    }
    p2Display.innerText = p2Score;
  }
});

if (!isGameOver) {
  console.log(!isGameOver);
}
