const reverseString = require("./reverseString");

describe("existance of a function", () => {
  it("defined", () => {
    expect(reverseString).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof reverseString).toEqual("function");
  });
});
