'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '?';

// document.querySelector('.document.querySelector('.score').textContent').textContent = 15;

// document.querySelector('.guess').value = 23;
let highScore = Number(document.querySelector('.highscore').textContent);
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.message').textContent =
//   'Hello! Start Guessing a number between 1 to 20 😁 ';
displayMessage('Hello! Start Guessing a number between 1 to 20 😁');
//lets define a number around which the game wil be played
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let count = 0;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   document.querySelector('.message').textContent =
  //     'You have guessed a number😎';
  displayMessage('You have guessed a number😎');

  //!guess ka matlab agar zero hoga
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   'You have not  guessed a number🤷‍♂️';
    displayMessage('You have not  guessed a number🤷‍♂️');
  } else if (guess > 20 || guess < 0) {
    console.log('Read the instruction and guess within the Range please!! ⚠');
    // document.querySelector('.message').textContent =
    //   'Read the instruction and guess within the Range please!! ⚠';
    displayMessage(
      'Read the instruction and guess within the Range please!! ⚠'
    );
  } else {
    // document.querySelector(
    //   '.message'
    // ).textContent = `You have guessed number ${guess}😎`;
    if (guess <= number - 6) {
      //   document.querySelector('.message').textContent =
      //     'Number is too Low!😢😢 ';
      displayMessage('Number is too Low!😢😢');
      console.log('Stage 1');
      count++;
    }
    if (guess >= number + 6) {
      //   document.querySelector('.message').textContent =
      //     'Number is too High!😢😢 ';
      displayMessage('Number is too High!😢😢');
      console.log('Stage #1');
      count++;
    } else if (guess <= number - 3 && guess >= number - 6 && count != 0) {
      //   document.querySelector('.message').textContent = 'Number is still low😢';
      displayMessage('Number is still low😢');
      console.log('Stage 2');
      count++;
    } else if (guess >= number + 3 && guess <= number + 6 && count != 0) {
      document.querySelector('.message').textContent = 'Number is still High😢';
      console.log('Stage #2');
      count++;
    } else if (guess <= number - 3 && guess >= number - 6) {
      document.querySelector('.message').textContent = 'The number is low😢';
      console.log('Stage 3');
      count++;
    } else if (guess >= number + 3 && guess <= number + 6) {
      document.querySelector('.message').textContent = 'The number is High😢';
      console.log('Stage #3');
      count++;
    } else if (guess >= number - 3 && guess < number) {
      document.querySelector('.message').textContent =
        'Just right there!👀(⬆️)';
      count++;
      console.log('Stage 4');
    } else if (guess <= number + 3 && guess > number) {
      document.querySelector('.message').textContent =
        'Just right there!👀(⬇️)';
      count++;
      console.log('Stage 4');

      //win 1
    } else if (guess == number && count == 0) {
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.score').textContent = String(100);
      document.querySelector('.message').textContent = 'BullsEye!👏👏👏';
      document.querySelector('.highscore').textContent = String(100);
      console.log(
        `Yayyyy!!bullseye!Good your document.querySelector('.score').textContent is now 100`
      );
    }
    //win 2
    else if (guess == number && count <= 2) {
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = String(100 - count * 10);
      if (
        Number(document.querySelector('.score').textContent) >
        Number(document.querySelector('.highscore').textContent)
      ) {
        document.querySelector('.highscore').textContent = String(
          document.querySelector('.score').textContent
        );
        document.querySelector(
          '.message'
        ).textContent = `Ummhmmm !!Its right🐱‍🏍🐱‍👤 and you have taken ${count} tries.`;
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Ummhmmm !!Its right🐱‍🏍🐱‍👤 and you have taken ${count} tries.`;
      }
    }
    //win 3
    else if (guess == number && count > 2) {
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      console.log('Yayyyy!!You finally reached');
      document.querySelector('.score').textContent = String(100 - count * 10);
      if (
        Number(document.querySelector('.score').textContent) >
        Number(document.querySelector('.highscore').textContent)
      ) {
        document.querySelector('.highscore').textContent = String(
          document.querySelector('.score').textContent
        );
        document.querySelector(
          '.message'
        ).textContent = `Its right!Finally🙌💕💕👌 and you have taken ${count} tries and has been changed to ${Number(
          document.querySelector('.highscore').textContent
        )}`;
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Its right!Finally🙌💕💕👌 and you have taken ${count} tries and  is unbroken ,that is, ${Number(
          document.querySelector('.highscore').textContent
        )}😎`;
      }
    }
  }
});
document.querySelector('.highscore').textContent = String(highScore);
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  count = 0;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log('Click on Again trigeered');
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').textContent = '??';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.message').textContent =
    'Hello! Start Guessing a number between 1 to 20 😁 ';
});
