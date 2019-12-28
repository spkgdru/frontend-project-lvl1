import readlineSync from 'readline-sync';
import random from './random.js';

const answersToWin = 3;

const even = num => {
    return num % 2 === 0;
}

const prime = num => {
    const check = div => {
      if (div === 1) return true;
      return num % div === 0? false : check(div - 1); 
    }
    return check(Math.floor(Math.sqrt(num))); 
}

const init = typeOfGame => {
    const games = {
    brainCalc: {
        greeting: 'What is the result of the expression?',
        quest: () => {
      const num1 = random(1, 100);
      const num2 = random(1, 100);
      const sign = random(1, 2);
      const question = {
        0: `${num1}+${num2}`,
        1: `${num1}*${num2}`,
      };
      const answer = {
        0: num1 + num2,
        1: num1 * num2,
      };
      return {
        question: question[sign],
        answer: `${answer[sign]}`,
      };
    };
  },
    brainEven: {
        greeting: 'Answer "yes" if the number is even, otherwise answer "no"',
        quest: () => {
            const question = random(1, 100);
            const answer = even(question) ? 'yes' : 'no';
            return { question, answer };
          };
    },
    brainGcd: {
        greeting: 'Find the greatest common divisor of given numbers.',
        quest: () => {
            const num1 = random(1, 100);
            const num2 = random(1, 100);
            const [bigNum, smallNum] = num1 >= num2 ? [num1, num2] : [num2, num1];
            const gcd = (big, small) => {
              if (big % small === 0) return small;
              return gcd(small, big % small);
            };
            return {
              question: `${num1} ${num2}`,
              answer: `${gcd(bigNum, smallNum)}`,
            };
          };
    },
    brainProgression: {
        greeting: 'What number is missing in the progression?',
        quest: () => {
            const progressStartValue = random(1, 30);
            const progressStep = random(2, 15);
            const position = random(1, 10);
            const progressLength = 10;
          
            const progress = (element, step, amountOfNumbers, unknownPosition) => {
              if (amountOfNumbers === 0) return '';
              if (unknownPosition === 0) return `.. ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
              return `${element} ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
            };
            const unknownElement = progressStartValue + progressStep * position;
          
            return {
              question: progress(progressStartValue, progressStep, progressLength, position),
              answer: `${unknownElement}`,
            };
          };
    },
    brainGames: {

    },
    brainPrime: {
        greeting: 'Answer "yes" if given number is prime. Otherwise answer "no".',
        quest: () => {
            const question = random(1, 3000);
            const answer = prime(question) ? 'yes' : 'no';
            return { question, answer };
        }
    }

}
  return game(typeOfGame[greeting], typeOfGame[quest]);
}

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

export default init;
