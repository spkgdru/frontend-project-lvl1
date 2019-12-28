const random = (min, max) => {
  if (max >= min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return Math.floor(Math.random() * (min - max + 1) + max);
};

export default random;
