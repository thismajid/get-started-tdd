const calculator = require("./calculator");

test("return 5 for sum(3.2)", () => {
  expect(calculator(3, 2, "+")).toBe(5);
});

test("return 1 for substract(3,1)", () => {
  expect(calculator(3, 2, "-")).toBe(1);
});

test("return 6 for multiplication(3,2)", () => {
  expect(calculator(3, 2, "*")).toBe(6);
});

test("return 1 for divide(3,3)", () => {
  expect(calculator(3, 3, "/")).toBe(1);
});
