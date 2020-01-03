const prime = (num) => {
  const check = (div) => {
    if (div === 1) return true;
    return num % div === 0 ? false : check(div - 1);
  };
  return check(Math.floor(Math.sqrt(num)));
};

export default prime;
