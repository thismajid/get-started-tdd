function combinations(str = "") {
  const array1 = [];
  for (let x = 0, y = 1; x < str.length; x++, y++) {
    array1[x] = str.substring(x, y);
  }
  const combi = [];
  let temp = "";
  const slent = Math.pow(2, array1.length);
  for (let i = 0; i < slent; i++) {
    temp = "";
    for (let j = 0; j < array1.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  return combi.join(",");
}

module.exports = combinations;
