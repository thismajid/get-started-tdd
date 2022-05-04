const reverseString = require("./reverseString");

describe("existance of a function", () => {
  it("defined", () => {
    expect(reverseString).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof reverseString).toEqual("function");
  });
});

describe("functionallity", () => {
  it("return dcba for input of abcd", () => {
    expect(reverseString("abcd")).toEqual("dcba");
  });
});
