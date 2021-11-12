function largest_prime_factor(number) {
  let highestValue = 0;
  let counter;
  for (let index = 1; index < number; index++) {
    counter = 0;
    if(number % index === 0 ) {
      for (let i = 1; i <= index; i++) {
        if (index % i === 0) {
          counter = counter + 1;
        }
      }
      if (counter === 2 && number % index === 0) {
        highestValue = index
      }
    }
    }
  return highestValue;
}

console.log(largest_prime_factor(13195))