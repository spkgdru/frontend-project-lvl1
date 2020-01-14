import readlineSync from 'readline-sync';

const answersToWin = 3;

const game = (greeting, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const attempt = (counter) => {
    if (counter === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const currentData = gameData();
    console.log(`Question: ${currentData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === currentData.answer) {
      console.log('Correct!');
      attempt(counter + 1);
      return;
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${currentData.answer}.`);
    console.log(`Let's try again, ${userName}!`);
  };
  attempt(0);
};

export default game;
