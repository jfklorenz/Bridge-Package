const expect = require("expect.js");
const Card = require("../features/card/card.js");
const CardSet = require("../features/cardset/cardset.js");

let cardset1 = new CardSet;
cardset1.addCards([
  Card.fromENS("3s"), Card.fromENS("3s"), Card.fromENS("As"), 
  Card.fromENS("5d"), Card.fromENS("6d"), Card.fromENS("Kd"), 
  Card.fromENS("Qh"), Card.fromENS("9s"), Card.fromENS("Js")
]);
let cardset2 = new CardSet;
cardset2.addCards([
  Card.fromENS("3s"), Card.fromENS("4s"), Card.fromENS("As"), 
  Card.fromENS("5d"), Card.fromENS("6d"), Card.fromENS("Kd"), 
  Card.fromENS("Qh"), Card.fromENS("9s"), Card.fromENS("Js"),
  Card.fromENS("Ks"), Card.fromENS("As")
]);
let cardset3 = new CardSet;
cardset3.addCards([
  Card.fromENS("3s"), Card.fromENS("4s")
]);
let cardset4 = new CardSet;
let cardset5 = new CardSet;
cardset5.addCards([
  Card.fromENS("2s"), Card.fromENS("3s"), Card.fromENS("4s"), 
  Card.fromENS("5s"), Card.fromENS("6s"), Card.fromENS("7s"), 
  Card.fromENS("8s"), Card.fromENS("9s"), Card.fromENS("Ts"),
  Card.fromENS("Js"), Card.fromENS("Qs"), Card.fromENS("Ks"), Card.fromENS("As")
]);
let cardset51 = new CardSet;
cardset51.addCards([
  Card.fromENS("3s"), Card.fromENS("3s"), Card.fromENS("As"), 
  Card.fromENS("5d"), Card.fromENS("6d"), Card.fromENS("Kd"), 
  Card.fromENS("Qh"), Card.fromENS("9s"), Card.fromENS("Js"),
  Card.fromENS("Ks"), Card.fromENS("As"), Card.fromENS("2h"), Card.fromENS("3h")
]);


// ================================================================
describe("test/CardSet - A Set of Cards", function() {

  it("0. Error - Invalid Input", function() {
    // Input error
  });

  it("0.1. _hasSubArray - Validation", function() {
    expect(cardset1._hasSubArray([[1,2], [3,4]], [1,2])).to.eql(true);
    expect(cardset1._hasSubArray([[1,2], [3,4]], [3,4])).to.eql(true);
    expect(cardset1._hasSubArray([[1,2], [3,4]], [1,4])).to.eql(false);
    expect(cardset1._hasSubArray([[1,2], [3,4]], [2,3])).to.eql(false);
    // | Master | > | Sub |
    expect(cardset1._hasSubArray([[1,2], [3,4]], [[1,2], [3,4]])).to.eql(false);
  });

  // ================================================================
  // 2. Cards
  // ================================================================
  // 2.0. Shuffle
  
  // 2.1. Add Card

  // 2.2. Add Cards

  // 2.3. Remove Card

  // 2.4. Remove Cards

  // ================================================================
  // 3. Suits
  // ================================================================
  // 3.0. Suit
  // 3.1. Clubs
  // 3.2. Diamonds
  // 3.3. Hearts
  // 3.4. Spades
  // 3.5. Club
  // 3.6. Diamond
  // 3.7. Heart
  // 3.8. Spade

  // ================================================================
  // 4. Distributions
  // ================================================================
  // 4.1. Distribution

  // 4.2. Shortest Suit

  // 4.3. Longest Suit

  // 4.4. Handsize
  it("5.1. handsize - Validation", function() {
    expect(cardset1.handsize).to.eql(9);
    expect(cardset2.handsize).to.eql(11);
    expect(cardset3.handsize).to.eql(2);
    expect(cardset4.handsize).to.eql(0);
    expect(cardset5.handsize).to.eql(13);
  });

  // 4.5. is Full Hand
  it("5.2. isFull - Validation", function() {
    expect(cardset1.isFull).to.eql(false);
    expect(cardset2.isFull).to.eql(false);
    expect(cardset3.isFull).to.eql(false);
    expect(cardset4.isFull).to.eql(false);
    expect(cardset5.isFull).to.eql(true);
  });

  // 4.6. is Empty Hand
  it("5.3. isEmpty - Validation", function() {
    expect(cardset1.isEmpty).to.eql(false);
    expect(cardset2.isEmpty).to.eql(false);
    expect(cardset3.isEmpty).to.eql(false);
    expect(cardset4.isEmpty).to.eql(true);
    expect(cardset5.isEmpty).to.eql(false);
  });

  // 4.7. is Deck

  // 4.8. is Valid
  it("5.0. isValid - Validation", function() {
    expect(cardset1.isValid).to.eql(false);
    expect(cardset2.isValid).to.eql(false);
    expect(cardset3.isValid).to.eql(true);
    expect(cardset4.isValid).to.eql(true);
    expect(cardset5.isValid).to.eql(true);
    expect(cardset51.isValid).to.eql(false);
  });

  // ================================================================
  // 5. Bridge Related
  // ================================================================
  // 5.1. Highcard Points HCP

  // 5.2. Controls

  // 5.3. Distribution Points

  // 5.4. Handtype

});
