"use strict";
// document.querySelector('.message').textContent = '🎉Correct Number!';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No Number'
        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = '150px';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈Too High';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = '🦆 You Lost the Game.'
            document.querySelector('.score').textContent = 0;

        }
    }  // when guess is too low
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🦆 You Lost the Game.'
            document.querySelector('.score').textContent = 0;

        }
    }
})

// again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '150px';



})


