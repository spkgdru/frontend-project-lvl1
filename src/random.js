const random = (min, max) => {
  return max >= min ? Math.floor(Math.random() * (max - min + 1) + min) : Math.floor(Math.random() * (min - max + 1) + max);  
};

export default random;
