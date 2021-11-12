function multiples_of_3_or_5(roof) {
  let counter = 0;
  for (let index = 1; index < roof; index++) {
    if ( index % 3 === 0 || index % 5 === 0 ) {
      counter = counter + index
    }
  }
  return counter;
}

console.log(multiples_of_3_or_5(10))