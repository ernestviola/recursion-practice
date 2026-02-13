export function fibs(n) {
  if (n <= 0) {
    return [];
  }
  const fibsList = [];
  let first = 0;
  let second = 1;

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      fibsList.push(first);
      continue;
    } else if (i === 2) {
      fibsList.push(second);
    } else {
      const temp = first + second;
      fibsList.push(temp);

      first = second;
      second = temp;
    }
  }

  return fibsList;
}

export function fibsRec(n) {
  /*
  Two things need to happen. I need to 
  1. figure out the fib total
  2. push that total to the end  
  */
  if (!Number.isInteger(n)) return [];
  if (n == 0) return [];
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }

  let fibArr = fibs(n - 1);
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);

  return fibArr;
}
