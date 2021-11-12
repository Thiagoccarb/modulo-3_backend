function smallest_multiple(roof) {
  let i = roof;
  let number;
  let counter = 0;
  do {
    let divNumber = 0;
    for (let index = 1; index <= roof; index ++) {
      if (i % index === 0) {
        divNumber = divNumber + 1;
      }
    }
    if (divNumber === roof) {
      number = i
      counter = 2
    }
    i++;
  }
  while (counter < 2);
  return number;
}

console.log(smallest_multiple(10))