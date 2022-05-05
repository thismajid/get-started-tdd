const reverseNumber = require("./reverseNumber");

describe("existance of a function", () => {
  it("defined", () => {
    expect(reverseNumber).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof reverseNumber).toEqual("function");
  });
});
