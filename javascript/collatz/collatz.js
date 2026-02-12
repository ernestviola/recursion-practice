function collatz(n) {
  if (n == 1) {
    return 0;
  }
  if (n % 2 === 0) {
    //even
    return collatz(n / 2) + 1;
  } else {
    //odd
    return collatz(3 * n + 1) + 1;
  }
}

export default collatz;
