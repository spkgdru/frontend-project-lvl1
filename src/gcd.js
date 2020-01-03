const gcd = (big, small) => {
  if (big % small === 0) return small;
  return gcd(small, big % small);
};

export default gcd;
