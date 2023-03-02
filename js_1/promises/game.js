function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function compareNumbers(userNumber, randomNumber) {
    if (userNumber === randomNumber) {
      return 2;
    } else if (Math.abs(userNumber - randomNumber) === 1) {
      return 1;
    } else {
      return 0;
    }
  }
  
  async function runGame() {
    let score = 0;
    let playAgain = true;
    
    while (playAgain) {
      const userNumber = prompt("Guess a number between 1 and 6:");
      const randomNumber = generateRandomNumber();
      score += compareNumbers(userNumber, randomNumber);
      
      const playAgainResponse = await new Promise((resolve) => {
        const response = prompt(`Your score is ${score}. Do you want to play again? (y/n)`);
        resolve(response.toLowerCase());
      });
      
      if (playAgainResponse !== "y") {
        playAgain = false;
      }
    }
  }
  
  runGame();
  