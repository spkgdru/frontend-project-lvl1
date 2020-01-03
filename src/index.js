import readlineSync from 'readline-sync';

const answersToWin = 3;

const game = (greeting, quest) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting || '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  if (!quest) return;
  const attempt = (result = 0) => {
    if (result === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const current = quest();
    console.log(`Question: ${current.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === current.answer) {
      console.log('Correct!');
      attempt(result + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${current.answer}'.\nLet's try again, ${userName}!`);
  };
  attempt();
};

export default game;
