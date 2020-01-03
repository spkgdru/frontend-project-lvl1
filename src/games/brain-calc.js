import game from '..';
import random from '../random';

export default () => {
  const greeting = 'What is the result of the expression?';
  const quest = () => {
    const amountOfOperations = 2;
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const sign = random(1, amountOfOperations);
    const question = {
      1: `${num1}+${num2}`,
      2: `${num1}*${num2}`,
    };
    const answer = {
      1: num1 + num2,
      2: num1 * num2,
    };
    return {
      question: question[sign],
      answer: `${answer[sign]}`,
    };
  };
  game(greeting, quest);
};
