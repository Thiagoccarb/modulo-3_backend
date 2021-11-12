function digits_sum(number_s) {
  let firstDigit;
  let secondDigit;
  let thirdDigit;
  let FourthDigit;
  let counter = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i > 1 && i <= 9) {
      firstDigit = i;
      secondDigit = 0;
      thirdDigit = 0;
      FourthDigit = 0;
    }
  
    if (i > 9 && i <= 99) {
      firstDigit = i % 10
      secondDigit = Math.floor(number_s/10)
      thirdDigit = 0;
      FourthDigit = 0;
    }
  
    if (i > 99 && i <= 999) {
      thirdDigit = Math.floor(i/100)
      firstDigit = (i - thirdDigit * 100) % 10
      secondDigit = Math.floor((i - thirdDigit * 100)/10)
      FourthDigit = 0;
    }
    if (i === 1000) {
      thirdDigit = 0
      firstDigit = 1
      secondDigit = 0
      FourthDigit = 0;
    }
    if (firstDigit + secondDigit + thirdDigit + FourthDigit === number_s) {
      counter = counter + 1;
    };
  }
  return counter;
}

console.log(digits_sum(26))