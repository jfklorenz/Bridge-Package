const expect = require("expect.js");
const { missingCards, missingHighcards } = require("../features/distribution_suit.js");

// ================================================================
describe('test/missingCards - Probabilities for all distributions of missing cards', function() {

// ================================================================
// Error
  // ----------------------------------------------------------------
  // Error: cardsCnt
  it("0.0.0. Error - cardsCnt not a number", function() {
    expect(missingCards).withArgs("a").to.throwException();
    expect(missingCards).withArgs("Z").to.throwException();
    expect(missingCards).withArgs("/").to.throwException();
  });

  it("0.0.1. Error - cardsCnt not an integer", function() {
    expect(missingCards).withArgs(2.25).to.throwException();
    expect(missingCards).withArgs(3.75).to.throwException();
    expect(missingCards).withArgs(6.66).to.throwException();
  });
  
  it("0.0.2. Error - cardsCnt < 0", function() {
    expect(missingCards).withArgs(-1).to.throwException();
    expect(missingCards).withArgs(-10).to.throwException();
    expect(missingCards).withArgs(-42).to.throwException();
  });

  it("0.0.3. Error - cardsCnt > 13", function() {
    expect(missingCards).withArgs(14).to.throwException();
    expect(missingCards).withArgs(22).to.throwException();
    expect(missingCards).withArgs(74).to.throwException();
  });
  
  // ----------------------------------------------------------------
  // Error: cardsX
  it("0.1.0. Error - cardsX not a number", function() {
    expect(missingCards).withArgs(10, "a").to.throwException();
    expect(missingCards).withArgs(10, "Z").to.throwException();
    expect(missingCards).withArgs(10, "/").to.throwException();
  });

  it("0.1.1. Error - cardsX not an integer", function() {
    expect(missingCards).withArgs(10, 2.25).to.throwException();
    expect(missingCards).withArgs(10, 3.75).to.throwException();
    expect(missingCards).withArgs(10, 6.66).to.throwException();
  });
  
  it("0.1.2. Error - cardsX < 0", function() {
    expect(missingCards).withArgs(10, -1).to.throwException();
    expect(missingCards).withArgs(10, -10).to.throwException();
    expect(missingCards).withArgs(10, -42).to.throwException();
  });

  it("0.1.3. Error - cardsX > 13", function() {
    expect(missingCards).withArgs(10, 14).to.throwException();
    expect(missingCards).withArgs(10, 22).to.throwException();
    expect(missingCards).withArgs(10, 74).to.throwException();
  });

  // ---------------------------------------------------------------
  // Error: cardsY
  it("0.2.0. Error - cardsY not a number", function() {
    expect(missingCards).withArgs(10, 10, "a").to.throwException();
    expect(missingCards).withArgs(10, 10, "Z").to.throwException();
    expect(missingCards).withArgs(10, 10, "/").to.throwException();
  });

  it("0.2.1. Error - cardsY not an integer", function() {
    expect(missingCards).withArgs(10, 10, 2.25).to.throwException();
    expect(missingCards).withArgs(10, 10, 3.75).to.throwException();
    expect(missingCards).withArgs(10, 10, 6.66).to.throwException();
  });
  
  it("0.2.2. Error - cardsY < 0", function() {
    expect(missingCards).withArgs(10, 10, -1).to.throwException();
    expect(missingCards).withArgs(10, 10, -10).to.throwException();
    expect(missingCards).withArgs(10, 10, -42).to.throwException();
  });

  it("0.2.3. Error - cardsY > 13", function() {
    expect(missingCards).withArgs(10, 10, 14).to.throwException();
    expect(missingCards).withArgs(10, 10, 22).to.throwException();
    expect(missingCards).withArgs(10, 10, 74).to.throwException();
  });

  // ---------------------------------------------------------------
  // Error: Other
  it("0.3. Error - not enough cards available", function() {
    expect(missingCards).withArgs(10, 3, 3).to.throwException();
    expect(missingCards).withArgs(12, 6, 5).to.throwException();
    expect(missingCards).withArgs(2, 1, 0).to.throwException();
  });

// ================================================================
// Cases
  // ---------------------------------------------------------------
  // Case: 2
  it("2.0. Case - cardsCnt = 2", function() {
    // 0 - 2
    expect(missingCards(2)[0][0][0]).to.eql(0);
    expect(missingCards(2)[0][0][1]).to.eql(2);
    expect(missingCards(2)[0][1]).to.eql(24);

    // 1 - 1
    expect(missingCards(2)[1][0][0]).to.eql(1);
    expect(missingCards(2)[1][0][1]).to.eql(1);
    expect(missingCards(2)[1][1]).to.eql(52);

    // 2 - 0
    expect(missingCards(2)[2][0][0]).to.eql(2);
    expect(missingCards(2)[2][0][1]).to.eql(0);
    expect(missingCards(2)[2][1]).to.eql(24);
  });

  // ---------------------------------------------------------------
  // Case: 3
  it("2.1. Case - cardsCnt = 3", function() {
    // 0 - 3
    expect(missingCards(3)[0][0][0]).to.eql(0);
    expect(missingCards(3)[0][0][1]).to.eql(3);
    expect(missingCards(3)[0][1]).to.eql(11);

    // 1 - 2
    expect(missingCards(3)[1][0][0]).to.eql(1);
    expect(missingCards(3)[1][0][1]).to.eql(2);
    expect(missingCards(3)[1][1]).to.eql(39);

    // 2 - 1
    expect(missingCards(3)[2][0][0]).to.eql(2);
    expect(missingCards(3)[2][0][1]).to.eql(1);
    expect(missingCards(3)[2][1]).to.eql(39);

    // 3 - 0
    expect(missingCards(3)[3][0][0]).to.eql(3);
    expect(missingCards(3)[3][0][1]).to.eql(0);
    expect(missingCards(3)[3][1]).to.eql(11);
  });

  
});

// ================================================================
// ================================================================
describe('test/missingHighcards - Probabilities for all distributions of missing cards and high cards', function() {

// ================================================================
// Error
  // ----------------------------------------------------------------
  // Error: cardsCnt
  it("0.0.0. Error - cardsCnt not a number", function() {
    expect(missingHighcards).withArgs("a", 2).to.throwException();
    expect(missingHighcards).withArgs("Z", 0).to.throwException();
    expect(missingHighcards).withArgs("/", 1).to.throwException();
  });

  it("0.0.1. Error - cardsCnt not an integer", function() {
    expect(missingHighcards).withArgs(2.25, 3).to.throwException();
    expect(missingHighcards).withArgs(3.75, 4).to.throwException();
    expect(missingHighcards).withArgs(6.66, 5).to.throwException();
  });
  
  it("0.0.2. Error - cardsCnt < 0", function() {
    expect(missingHighcards).withArgs(-1, 3).to.throwException();
    expect(missingHighcards).withArgs(-10, 5).to.throwException();
    expect(missingHighcards).withArgs(-42, 7).to.throwException();
  });

  it("0.0.3. Error - cardsCnt > 13", function() {
    expect(missingHighcards).withArgs(14, 1).to.throwException();
    expect(missingHighcards).withArgs(22, 2).to.throwException();
    expect(missingHighcards).withArgs(74, 3).to.throwException();
  });
  
  // ----------------------------------------------------------------
  // Error: highcardsCnt
  it("0.1.0. Error - highcardsCnt not a number", function() {
    expect(missingHighcards).withArgs(10, "a").to.throwException();
    expect(missingHighcards).withArgs(10, "Z").to.throwException();
    expect(missingHighcards).withArgs(10, "/").to.throwException();
  });

  it("0.1.1. Error - highcardsCnt not an integer", function() {
    expect(missingHighcards).withArgs(10, 2.25).to.throwException();
    expect(missingHighcards).withArgs(10, 3.75).to.throwException();
    expect(missingHighcards).withArgs(10, 6.66).to.throwException();
  });
  
  it("0.1.2. Error - highcardsCnt < 0", function() {
    expect(missingHighcards).withArgs(10, -1).to.throwException();
    expect(missingHighcards).withArgs(10, -10).to.throwException();
    expect(missingHighcards).withArgs(10, -42).to.throwException();
  });

  it("0.1.3. Error - highcardsCnt > 13", function() {
    expect(missingHighcards).withArgs(10, 14).to.throwException();
    expect(missingHighcards).withArgs(10, 22).to.throwException();
    expect(missingHighcards).withArgs(10, 74).to.throwException();
  });

  // ---------------------------------------------------------------
  // Error: Other
  it("0.2. Error - highcardsCnt > cardsCnt", function() {
    expect(missingHighcards).withArgs(4, 6).to.throwException();
    expect(missingHighcards).withArgs(3, 6).to.throwException();
    expect(missingHighcards).withArgs(0, 2).to.throwException();
  });

});