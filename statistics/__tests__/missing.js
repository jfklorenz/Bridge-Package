const expect = require("expect.js");
const { missingCardsDistribution } = require("../features/missing.js");

// ================================================================
describe('test/missing.js - Missing Cards Distribution & Probability', function() {

  // ================================================================
  // Missing Cards
  it("1.0. Missing Cards / Input", function() {
    expect(missingCardsDistribution).withArgs("a").to.throwException();
    expect(missingCardsDistribution).withArgs("Z").to.throwException();
    expect(missingCardsDistribution).withArgs(-1).to.throwException();
    expect(missingCardsDistribution).withArgs(1.234).to.throwException();
    expect(missingCardsDistribution).withArgs(14).to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.1. Missing Cards / Base Cases", function() {
    // Missing 1 Card
    // [0,1], 50
    expect(missingCardsDistribution(1)[0][0][0]).to.equal(0);
    expect(missingCardsDistribution(1)[0][0][1]).to.equal(1);
    expect(missingCardsDistribution(1)[0][1]).to.equal(0.50);
    // [1,0], 50
    expect(missingCardsDistribution(1)[1][0][0]).to.equal(1);
    expect(missingCardsDistribution(1)[1][0][1]).to.equal(0);
    expect(missingCardsDistribution(1)[1][1]).to.equal(0.50);
  });

  // ----------------------------------------------------------------
  it("1.2. Missing Cards / Cases", function() {
    // Missing 2 Cards
    // [0,2], 24
    expect(missingCardsDistribution(2)[0][0][0]).to.equal(0);
    expect(missingCardsDistribution(2)[0][0][1]).to.equal(2);
    expect(missingCardsDistribution(2)[0][1]).to.equal(0.24);
    // [1,1], 52
    expect(missingCardsDistribution(2)[1][0][0]).to.equal(1);
    expect(missingCardsDistribution(2)[1][0][1]).to.equal(1);
    expect(missingCardsDistribution(2)[1][1]).to.equal(0.52);
    // [2,0], 24
    expect(missingCardsDistribution(2)[2][0][0]).to.equal(2);
    expect(missingCardsDistribution(2)[2][0][1]).to.equal(0);
    expect(missingCardsDistribution(2)[2][1]).to.equal(0.24);

    // Missing 3 Cards
    // [0,3], 11
    expect(missingCardsDistribution(3)[0][0][0]).to.equal(0);
    expect(missingCardsDistribution(3)[0][0][1]).to.equal(3);
    expect(missingCardsDistribution(3)[0][1]).to.equal(0.11);
    // [1,2], 39
    expect(missingCardsDistribution(3)[1][0][0]).to.equal(1);
    expect(missingCardsDistribution(3)[1][0][1]).to.equal(2);
    expect(missingCardsDistribution(3)[1][1]).to.equal(0.39);
    // [2,1], 39
    expect(missingCardsDistribution(3)[2][0][0]).to.equal(2);
    expect(missingCardsDistribution(3)[2][0][1]).to.equal(1);
    expect(missingCardsDistribution(3)[2][1]).to.equal(0.39);
    // [3,0], 11
    expect(missingCardsDistribution(3)[3][0][0]).to.equal(3);
    expect(missingCardsDistribution(3)[3][0][1]).to.equal(0);
    expect(missingCardsDistribution(3)[3][1]).to.equal(0.11);
  });

// ================================================================
// Missing Highcards

// ================================================================
});
