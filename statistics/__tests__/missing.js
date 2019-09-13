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
    // Missing 1 Card / 50-50
    expect(missingCards(1)[0][0][0]).to.equal(0);
    expect(missingCards(1)[0][0][1]).to.equal(1);
    expect(missingCards(1)[0][1]).to.equal(50);
    expect(missingCards(1)[1][0][0]).to.equal(1);
    expect(missingCards(1)[1][0][1]).to.equal(0);
    expect(missingCards(1)[1][1]).to.equal(50);
  });

  it("1.2. Missing Cards / Cases", function() {
    //expect(missingCards(10,3)).to.equal(120);
    //expect(missingCards(9,4)).to.equal(126);
    //expect(missingCards(5,3)).to.equal(10);
    //expect(missingCards(17,11)).to.equal(12376);
  });

// ================================================================
// Missing Highcards

// ================================================================
});
