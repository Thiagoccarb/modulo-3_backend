function nth_prime(n) {
  let counter = 0;
  let i = 1;
  let number;
  do {
    let divNumber = 0;
    for (let index = i; index > 0; index--) {
      if (i % index === 0) {
        divNumber = divNumber + 1;
      }
    }
    if (divNumber === 2) {
      number = i
      counter++
    }
    i++;
  }
  while (counter < n);
  return number;
}

console.log(nth_prime(6))
