function reverseNumber(num) {
  let rev = 0;
  let lastDigit;

  while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return rev;
}

module.exports = reverseNumber;
