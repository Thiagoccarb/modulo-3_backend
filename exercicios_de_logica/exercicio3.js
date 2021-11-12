// function count_down(x) {

//   let contador = x;
//   let i = x;
//   do {
//     i = i - 1;
//     contador = contador + `...${i}`;
//   } while (i > 0)
//   contador = contador + `!!!`
//   return contador;
// }


function count_down(x) {
  let counter;
  for (let index = x; index >= 0; index--) {
    if (index === x) {
      counter = `${index}`
    } else if (index < x && index > 0) {
      counter = counter + `...${index}`
    } else {
      counter = counter + `...${index}!!!`
    }
  }
  return counter
}

console.log(count_down(5));
