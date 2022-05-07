const combinations = require("./combinations");

describe("existance of a function", () => {
  it("defined", () => {
    expect(combinations).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof combinations).toEqual("function");
  });
});
