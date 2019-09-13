const expect = require("expect.js");
const { distribution } = require("../features/distribution.js");

// ================================================================
describe('test/distribution.js - Distribution Probability', function() {

  // ================================================================
  // Distribution
  it("1.0. Distribution / Input", function() {
    expect(distribution).withArgs("a").to.throwException();
    expect(distribution).withArgs("Z").to.throwException();
    expect(distribution).withArgs(-1).to.throwException();
    expect(distribution).withArgs(1.234).to.throwException();
    expect(distribution).withArgs(38).to.throwException();
  });

  it("1.1. Distribution / Base Cases", function() {
    //
  });

  it("1.2. Distribution / Cases", function() {
    //expect(distribution(3)).to.equal(120);
    //expect(distribution(13)).to.equal(126);
    //expect(distribution(28)).to.equal(10);
    //expect(distribution(11,17)).to.equal(12376);
  });

// ================================================================
});
