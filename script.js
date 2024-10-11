'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0; // Initialize highscore

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // For no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ❌';
  }

  // For correct guess
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent =
      'Yay you guessed it right 🥳';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score; // Update the highscore
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // For wrong guess
  else if (guess > secretnumber) {
    // If guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // If you lose
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('.message').textContent = 'You Lose 😔';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d01313';
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess < secretnumber) {
    // If guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // If you lose
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('.message').textContent = 'You Lose 😔';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d01313';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

// For resetting the game when clicking "Again"
document.querySelector('.btn.again').addEventListener('click', function () {
  score = 5; // Reset score
  secretnumber = Math.trunc(Math.random() * 20) + 1; // Generate a new secret number

  // Reset game elements without reloading the page
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
