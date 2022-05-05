const reverseNumber = require("./reverseNumber");

describe("existance of a function", () => {
  it("defined", () => {
    expect(reverseNumber).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof reverseNumber).toEqual("function");
  });
});

describe("functionallity", () => {
  it("return 54321 for input of 12345", () => {
    expect(reverseNumber(12345)).toEqual(54321);
  });

  it("return 87653 for input of 35678", () => {
    expect(reverseNumber(35678)).toEqual(87653);
  });
});
