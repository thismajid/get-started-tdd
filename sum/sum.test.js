const sum = require("./sum");

test("returns 5 for sum(2,3)", () => {
  expect(sum(2, 3)).toBe(5);
});

test("returns 8 for sum(5,3)", () => {
  expect(sum(5, 3)).toBe(8);
});
