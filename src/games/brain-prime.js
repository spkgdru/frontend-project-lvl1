import game from '..';
import random from '../random';
import prime from '../prime';

export default () => {
  const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const quest = () => {
    const question = random(1, 3000);
    const answer = prime(question) ? 'yes' : 'no';
    return { question, answer };
  };
  game(greeting, quest);
};
