function sum_square_difference(n) {
  let sumSqtr = 0;
  let sqtrSum = 0;
  for (let i = 1; i <= n; i++) {
    sqtrSum = sqtrSum + (i * i);
  }
  for (let i = 1; i <= n; i++) {
    sumSqtr = sumSqtr + i;
  }
  return sumSqtr * sumSqtr - sqtrSum;
}

console.log(sum_square_difference(10))