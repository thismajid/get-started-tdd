function combinations(str = "") {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    let int = "";
    for (let j = i; j < str.length; j++) {
      int += str[j];
      temp += int + ",";
    }
  }
  return temp;
}
