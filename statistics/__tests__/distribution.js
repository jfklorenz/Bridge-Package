const expect = require("expect.js");
const { distribution } = require("../features/distribution.js");

// ================================================================
describe('test/distribution.js - Distribution Probability', function() {

  // ================================================================
  // Distribution
  it("1.0. Distribution / Input", function() {
    // Exceptions
    expect(distribution).withArgs("a").to.throwException();
    expect(distribution).withArgs("Z").to.throwException();
    expect(distribution).withArgs(-1).to.throwException();
    expect(distribution).withArgs(1.234).to.throwException();
    expect(distribution).withArgs(38).to.throwException();
  });

  it("1.1. Distribution / Base Cases", function() {
    // [13,0,0,0] / 4, 0.00
    expect(distribution([13,0,0,0])[0]).to.equal(4);
    expect(distribution([13,0,0,0])[1]).to.equal(0.00);
    // [4,3,3,3] / 66905856160, 10.54
    expect(distribution([4,3,3,3])[0]).to.equal(66905856160);
    expect(distribution([4,3,3,3])[1]).to.equal(10.54);
    // Symmetry
    // [0,13,0,0] / 4, 0.00
    expect(distribution([0,13,0,0])[0]).to.equal(4);
    expect(distribution([0,13,0,0])[1]).to.equal(0.00);
    // [0,0,13,0] / 4, 0.00
    expect(distribution([0,0,13,0])[0]).to.equal(4);
    expect(distribution([0,0,13,0])[1]).to.equal(0.00);
    // [0,0,0,13] / 4, 0.00
    expect(distribution([0,0,0,13])[0]).to.equal(4);
    expect(distribution([0,0,0,13])[1]).to.equal(0.00);
    // [3,4,3,3] / 66905856160, 10.54
    expect(distribution([3,4,3,3])[0]).to.equal(66905856160);
    expect(distribution([3,4,3,3])[1]).to.equal(10.54);
    // [3,3,4,3] / 66905856160, 10.54
    expect(distribution([3,3,4,3])[0]).to.equal(66905856160);
    expect(distribution([3,3,4,3])[1]).to.equal(10.54);
    // [3,3,3,4] / 66905856160, 10.54
    expect(distribution([3,3,3,4])[0]).to.equal(66905856160);
    expect(distribution([3,3,3,4])[1]).to.equal(10.54);
  });

  it("1.2. Distribution / Cases", function() {
    // [12,1,0,0] / 2.028, 0.00
    expect(distribution([12,1,0,0])[0]).to.equal(2028);
    expect(distribution([12,1,0,0])[1]).to.equal(0.00);
    // [4,4,3,2] / 136.852.887.600, 21.55
    expect(distribution([4,4,3,2])[0]).to.equal(136852887600);
    expect(distribution([4,4,3,2])[1]).to.equal(21.55);
    // [5,4,2,2] / 67.182.326.640, 10.58
    expect(distribution([5,4,2,2])[0]).to.equal(67182326640);
    expect(distribution([5,4,2,2])[1]).to.equal(10.58);
    // [6,3,2,2] / 35.830.574.208, 5.64
    expect(distribution([6,3,2,2])[0]).to.equal(35830574208);
    expect(distribution([6,3,2,2])[1]).to.equal(5.64);
  });

// ================================================================
});
