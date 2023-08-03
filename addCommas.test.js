

const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("returns string version of positive integer", () => {
    expect(addCommas(6)).toEqual("6");
  });

  test("returns string version of negative integer", () => {
    expect(addCommas(-12)).toEqual("-12");
  });

  test("returns stringified num with comma in correct place", () => {
    expect(addCommas(1234)).toEqual("1,234");
    expect(addCommas(123456789)).toEqual("123,456,789");
    expect(addCommas(1000000)).toEqual("1,000,000");
    expect(addCommas(9876543210)).toEqual("9,876,543,210");
    expect(addCommas(-345345)).toEqual("-345,345");
    expect(addCommas(-9999)).toEqual("-9,999");
  });

  // test("works with decimals", () => {
  //   expect(addCommas(12345.678)).toEqual("12,345.678");
  //   expect(addCommas(-3141592.65)).toEqual("-3,141,592.65");
  // })
});
