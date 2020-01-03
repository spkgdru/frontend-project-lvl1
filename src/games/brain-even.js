import game from '..';
import random from '../random';
import even from '../even';

export default () => {
  const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
  const quest = () => {
    const question = random(1, 100);
    const answer = even(question) ? 'yes' : 'no';
    return { question, answer };
  };
  game(greeting, quest);
};
