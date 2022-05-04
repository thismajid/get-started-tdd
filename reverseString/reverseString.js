function reverseString(str) {
  let temp = "";
  for (let char of str) {
    temp = char + temp;
  }
  return temp;
}

module.exports = reverseString;
