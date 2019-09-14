const expect = require("expect.js");
const { missingCards, missingHighcards} = require("../features/missing.js");

// ================================================================
describe('test/missing.js - Missing Cards Distribution & Probability', function() {

  // ================================================================
  // Missing Cards
  it("1.0. Missing Cards / Input", function() {
    expect(missingCards).withArgs("a").to.throwException();
    expect(missingCards).withArgs("Z").to.throwException();
    expect(missingCards).withArgs(-1).to.throwException();
    expect(missingCards).withArgs(1.234).to.throwException();
    expect(missingCards).withArgs(14).to.throwException();
  });

  it("1.1. Missing Cards / Base Cases", function() {
    // Missing 1 Card
    // [0,1], 50
    expect(missingCards(1)[0][0][0]).to.equal(0);
    expect(missingCards(1)[0][0][1]).to.equal(1);
    expect(missingCards(1)[0][1]).to.equal(50);
    // [1,0], 50
    expect(missingCards(1)[1][0][0]).to.equal(1);
    expect(missingCards(1)[1][0][1]).to.equal(0);
    expect(missingCards(1)[1][1]).to.equal(50);
  });

  it("1.2. Missing Cards / Cases", function() {
    // Missing 2 Cards
    // [0,2], 24
    expect(missingCards(2)[0][0][0]).to.equal(0);
    expect(missingCards(2)[0][0][1]).to.equal(2);
    expect(missingCards(2)[0][1]).to.equal(24);
    // [1,1], 52
    expect(missingCards(2)[1][0][0]).to.equal(1);
    expect(missingCards(2)[1][0][1]).to.equal(1);
    expect(missingCards(2)[1][1]).to.equal(52);
    // [2,0], 24
    expect(missingCards(2)[2][0][0]).to.equal(2);
    expect(missingCards(2)[2][0][1]).to.equal(0);
    expect(missingCards(2)[2][1]).to.equal(24);

    // Missing 3 Cards
    // [0,3], 11
    expect(missingCards(3)[0][0][0]).to.equal(0);
    expect(missingCards(3)[0][0][1]).to.equal(3);
    expect(missingCards(3)[0][1]).to.equal(11);
    // [1,2], 39
    expect(missingCards(3)[1][0][0]).to.equal(1);
    expect(missingCards(3)[1][0][1]).to.equal(2);
    expect(missingCards(3)[1][1]).to.equal(39);
    // [2,1], 39
    expect(missingCards(3)[2][0][0]).to.equal(2);
    expect(missingCards(3)[2][0][1]).to.equal(1);
    expect(missingCards(3)[2][1]).to.equal(39);
    // [3,0], 11
    expect(missingCards(3)[3][0][0]).to.equal(3);
    expect(missingCards(3)[3][0][1]).to.equal(0);
    expect(missingCards(3)[3][1]).to.equal(11);
  });

// ================================================================
// Missing Highcards

// ================================================================
});
