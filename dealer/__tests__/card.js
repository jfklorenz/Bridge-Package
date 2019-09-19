const expect = require("expect.js");
const Card = require("../features/card.js");

// ================================================================
describe('test/card - A single playing card', function() {
  it("0.0. Error - Input invalid", function() {
    // Standard Input Invalid
    // Invalid Rank
    expect((rank, suit) => {new Card(rank, suit)}).withArgs("a", 0).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs("Z", 0).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs("/", 0).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(-1, 0).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(1.23, 0).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(13, 0).to.throwException();
    // Invalid Suit
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, "a").to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, "Z").to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, "/").to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, -1).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, 1.23).to.throwException();
    expect((rank, suit) => {new Card(rank, suit)}).withArgs(0, 4).to.throwException();
  });

  // ================================================================
  // 1. - from
  // ================================================================
  // 1.0. fromLocale
  it("1.0.0. fromLocale - Error", function() {
    // Invalid Rank
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", 0, "Spades").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", -3, "Spades").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "Z", "Spades").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "/", "Spades").to.throwException();
    // Invalid Suit
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "2", "pades").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "3", 0).to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "4", 3).to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("en", "5", "banana").to.throwException();
    // Locale
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("ne", "2", "Spades").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("ed", "3", "Clubs").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("ger", "9", "Diamonds").to.throwException();
    expect((locale, rank, suit) => Card.fromLocale(locale, rank, suit)).withArgs("us", "5", "Hearts").to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.0.1. fromLocale - Validation", function() {
    // Validation
    expect(Card.fromLocale("en", "2","Clubs")).to.eql(new Card(0,0));
    expect(Card.fromLocale("en", "4","Clubs")).to.eql(new Card(2,0));
    expect(Card.fromLocale("en", "6","Diamonds")).to.eql(new Card(4,1));
    expect(Card.fromLocale("en", "8","Diamonds")).to.eql(new Card(6,1));
    expect(Card.fromLocale("en", "T","Hearts")).to.eql(new Card(8,2));
    expect(Card.fromLocale("en", "J","Hearts")).to.eql(new Card(9,2));
    expect(Card.fromLocale("en", "Q","Spades")).to.eql(new Card(10,3));
    expect(Card.fromLocale("en", "A","Spades")).to.eql(new Card(12,3));
  });

  // ================================================================
  
  // 1.1. fromEN
  it("1.1.0. fromEN - Error", function() {
    // Invalid Rank
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs(0, "Spades").to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs(-3, "Spades").to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("Z", "Spades").to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("/", "Spades").to.throwException();
    // Invalid Suit
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("2", "pades").to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("3", 0).to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("4", 3).to.throwException();
    expect((rank, suit) => Card.fromEN(rank, suit)).withArgs("5", "banana").to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.1.1. fromEN - Validation", function() {
    // Validation
    expect(Card.fromEN("2","Clubs")).to.eql(new Card(0,0));
    expect(Card.fromEN("4","Clubs")).to.eql(new Card(2,0));
    expect(Card.fromEN("6","Diamonds")).to.eql(new Card(4,1));
    expect(Card.fromEN("8","Diamonds")).to.eql(new Card(6,1));
    expect(Card.fromEN("T","Hearts")).to.eql(new Card(8,2));
    expect(Card.fromEN("J","Hearts")).to.eql(new Card(9,2));
    expect(Card.fromEN("Q","Spades")).to.eql(new Card(10,3));
    expect(Card.fromEN("A","Spades")).to.eql(new Card(12,3));
  });

  // ================================================================
  // 1.2. - fromENS
  it("1.2.0. fromENS - Error", function() {
    // Invalid input
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs("Spades").to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs("6kpades").to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs(5).to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs(-1).to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs(1.23).to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs("/").to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs("Z").to.throwException();
    expect((ranksuit) => Card.fromENS(ranksuit)).withArgs("5").to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.2.1. fromENS - Validation", function() {
    // Validation
    expect(Card.fromENS("2c")).to.eql(new Card(0,0));
    expect(Card.fromENS("4c")).to.eql(new Card(2,0));
    expect(Card.fromENS("6d")).to.eql(new Card(4,1));
    expect(Card.fromENS("8d")).to.eql(new Card(6,1));
    expect(Card.fromENS("Th")).to.eql(new Card(8,2));
    expect(Card.fromENS("Jh")).to.eql(new Card(9,2));
    expect(Card.fromENS("Qs")).to.eql(new Card(10,3));
    expect(Card.fromENS("As")).to.eql(new Card(12,3));
  });

  // ================================================================
  // 1.3. - fromDE
  it("1.3.0. fromDE - Error", function() {
     // Invalid Rank
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs(0, "Pik").to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs(-3, "Pik").to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("L", "Pik").to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("/", "Pik").to.throwException();
     // Invalid Suit
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("2", "ik").to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("3", 0).to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("4", 3).to.throwException();
     expect((rank, suit) => Card.fromDE(rank, suit)).withArgs("5", "banana").to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.3.1. fromDE - Validation", function() {
    // Validation
    expect(Card.fromDE("2", "Treff")).to.eql(new Card(0,0));
    expect(Card.fromDE("4", "Treff")).to.eql(new Card(2,0));
    expect(Card.fromDE("6", "Karo")).to.eql(new Card(4,1));
    expect(Card.fromDE("8", "Karo")).to.eql(new Card(6,1));
    expect(Card.fromDE("10", "Coeur")).to.eql(new Card(8,2));
    expect(Card.fromDE("B", "Coeur")).to.eql(new Card(9,2));
    expect(Card.fromDE("D", "Pik")).to.eql(new Card(10,3));
    expect(Card.fromDE("A", "Pik")).to.eql(new Card(12,3));
  });

  // ================================================================
  // 1.4. - fromDES
    it("1.4.0. fromDES - Error", function() {
    // Invalid input
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs("Spades").to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs("6kpades").to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs(5).to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs(-1).to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs(1.23).to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs("/").to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs("Z").to.throwException();
    expect((ranksuit) => Card.fromDES(ranksuit)).withArgs("5").to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.4.1. fromDES - Validation", function() {
    // Validation
    expect(Card.fromDES("t2")).to.eql(new Card(0,0));
    expect(Card.fromDES("t4")).to.eql(new Card(2,0));
    expect(Card.fromDES("k6")).to.eql(new Card(4,1));
    expect(Card.fromDES("k8")).to.eql(new Card(6,1));
    expect(Card.fromDES("cZ")).to.eql(new Card(8,2));
    expect(Card.fromDES("cB")).to.eql(new Card(9,2));
    expect(Card.fromDES("pD")).to.eql(new Card(10,3));
    expect(Card.fromDES("pA")).to.eql(new Card(12,3));
  });
  
  // ================================================================
  // 2 - Intern / String Formatting
  // ================================================================
  // 2.1. Rank -> String
});

// ================================================================
