const expect = require("expect.js");
const { binomial, factorial, percentageRounded } = require("../features/math.js");

// ================================================================
describe('test/math.js - Mathematical Functions', function() {

  // ================================================================
  // Binomial
  it("1.0. Binomial / Input", function() {
    expect(binomial).withArgs("a", 1).to.throwException();
    expect(binomial).withArgs(10, "a").to.throwException();
    expect(binomial).withArgs(-1, 1).to.throwException();
    expect(binomial).withArgs(1, -1).to.throwException();
    expect(binomial).withArgs(2, 4).to.throwException();
  });
  // ----------------------------------------------------------------

  it("1.1. Binomial / Base Cases", function() {
    expect(binomial(4,0)).to.equal(1);
    expect(binomial(8,0)).to.equal(1);
    expect(binomial(10,1)).to.equal(10);
    expect(binomial(20,20)).to.equal(1);
    expect(binomial(20,19)).to.equal(20);
    expect(binomial(101,1)).to.equal(101);
    expect(binomial(101,101)).to.equal(1);
    expect(binomial(101,100)).to.equal(101);
  });
  // ----------------------------------------------------------------

  it("1.2. Binomial / Cases", function() {
    expect(binomial(10,3)).to.equal(120);
    expect(binomial(9,4)).to.equal(126);
    expect(binomial(5,3)).to.equal(10);
    expect(binomial(17,11)).to.equal(12376);
  });

// ================================================================
// Factorial
it("1.0. Factorial / Input", function() {
  expect(factorial).withArgs(-1).to.throwException();
  expect(factorial).withArgs(-42).to.throwException();
  expect(factorial).withArgs("a").to.throwException();
  expect(factorial).withArgs("z").to.throwException();
  expect(factorial).withArgs(0.12).to.throwException();
  expect(factorial).withArgs(4.2).to.throwException();
});
// ----------------------------------------------------------------

it("1.1. Factorial / Base Cases", function() {
  expect(factorial(0)).to.equal(1);
  expect(factorial(1)).to.equal(1);
  expect(factorial(2)).to.equal(2);
});

// ----------------------------------------------------------------
it("1.2. Factorial / Cases", function() {
  expect(factorial(10)).to.equal(3628800);
  expect(factorial(14)).to.equal(87178291200);
});

// ================================================================
// Percentage Rounded
it("1.0. percentageRounded / Input", function() {
  expect(percentageRounded).withArgs("a").to.throwException();
});

// ----------------------------------------------------------------
it("1.1. percentageRounded / Base Cases", function() {
  expect(percentageRounded(0)).to.equal(0);
  expect(percentageRounded(1)).to.equal(1);
  expect(percentageRounded(-1)).to.equal(-1);
});

// ----------------------------------------------------------------
it("1.2. percentageRounded / Cases", function() {
  expect(percentageRounded(0.12345)).to.equal(0.1235);
  expect(percentageRounded(0.7373737)).to.equal(0.7374);
  expect(percentageRounded(-0.2396252)).to.equal(-0.2396);
  expect(percentageRounded(0.223456)).to.equal(0.2235);
  expect(percentageRounded(-0.9825229901)).to.equal(-0.9825);
  expect(percentageRounded(0.555555555)).to.equal(0.5556);
});

// ================================================================
});
