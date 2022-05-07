const combinations = require("./combinations");

describe("existance of a function", () => {
  it("defined", () => {
    expect(combinations).toBeDefined();
  });

  it("its a function", () => {
    expect(typeof combinations).toEqual("function");
  });
});

describe("functionallity", () => {
  it("return 'd,o,do,g,dg,og,dog' for input of 'dog'", () => {
    expect(combinations("dog")).toEqual("d,o,do,g,dg,og,dog");
  });

  it("return 'c,a,t,ca,ct,at,cat' for input of 'cat'", () => {
    expect(combinations("cat")).toEqual("d,o,do,g,dg,og,dog");
  });
});
