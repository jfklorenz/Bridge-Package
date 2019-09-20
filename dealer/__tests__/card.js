const expect = require("expect.js");
const Card = require("../features/card/card.js");

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
  // 2 - Base Attributes & Representation
  // ================================================================
  // 2.1. rank
  // ----------------------------------------------------------------
  // 2.2. suit
  // ----------------------------------------------------------------
  it("2.3. toString - Validation", function() {
    expect(Card.fromENS("6s").toString()).to.eql("6 of Spades");
    expect(Card.fromENS("Td").toString()).to.eql("T of Diamonds");
    expect(Card.fromENS("Ac").toString()).to.eql("A of Clubs");
  });

  // ----------------------------------------------------------------
  it("2.4. toStringLocale - Validation", function() {
    // ToDo
  });

  // ----------------------------------------------------------------
  it("2.5. _rankToInteger - Validation", function() {
    expect(Card._rankToInteger("A")).to.eql(12);
    expect(Card._rankToInteger("Q")).to.eql(10);
    expect(Card._rankToInteger("2")).to.eql(0);
  });

  // ----------------------------------------------------------------
  it("2.6. _rankToString - Validation", function() {
    expect(Card._rankToString(12)).to.eql("A");
    expect(Card._rankToString(8)).to.eql("T");
    expect(Card._rankToString(0)).to.eql("2");
  }); 

  // ----------------------------------------------------------------
  it("2.7. _suitToInteger - Validation", function() {
    expect(Card._suitToInteger("Clubs")).to.eql(0);
    expect(Card._suitToInteger("Diamonds")).to.eql(1);
    expect(Card._suitToInteger("Hearts")).to.eql(2);
    expect(Card._suitToInteger("Spades")).to.eql(3);
  });

  // ----------------------------------------------------------------
  it("2.8. _suitToString - Validation", function() {
    expect(Card._suitToString(0)).to.eql("Clubs");
    expect(Card._suitToString(1)).to.eql("Diamonds");
    expect(Card._suitToString(2)).to.eql("Hearts");
    expect(Card._suitToString(3)).to.eql("Spades");
  });

  // ================================================================
  // 3. Card Generation
  // ================================================================
  it("3.1.0. fromLocale - Error", function() {
    // Invalid Rank
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs(0, "Spades", "en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs(-3, "Spades", "en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("Z", "Spades","en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("/", "Spades", "en").to.throwException();
    // Invalid Suit
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("2", "pades", "en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("3", 0, "en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("4", 3, "en").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("5", "banana", "en").to.throwException();
    // Locale
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("2", "Spades", "ne").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("3", "Clubs", "ed").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("9", "Diamonds", "ger").to.throwException();
    expect((rank, suit, locale) => Card.fromLocale(rank, suit, locale)).withArgs("5", "Hearts", "us").to.throwException();
  });

  // ----------------------------------------------------------------
  it("3.1.1. fromLocale - Validation", function() {
    // Validation
    expect(Card.fromLocale("2","Clubs","en")).to.eql(new Card(0,0));
    expect(Card.fromLocale("4","Clubs","en")).to.eql(new Card(2,0));
    expect(Card.fromLocale("6","Diamonds","en")).to.eql(new Card(4,1));
    expect(Card.fromLocale("8","Diamonds","en")).to.eql(new Card(6,1));
    expect(Card.fromLocale("T","Hearts")).to.eql(new Card(8,2));
    expect(Card.fromLocale("J","Hearts")).to.eql(new Card(9,2));
    expect(Card.fromLocale("Q","Spades")).to.eql(new Card(10,3));
    expect(Card.fromLocale("A","Spades")).to.eql(new Card(12,3));
  });

  // ----------------------------------------------------------------
  it("3.2.0. fromEN - Error", function() {
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
  it("3.2.1. fromEN - Validation", function() {
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

  // ----------------------------------------------------------------
  it("3.3.0. fromENS - Error", function() {
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
  it("3.3.1. fromENS - Validation", function() {
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

  // ----------------------------------------------------------------
  it("3.3.0. fromDE - Error", function() {
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
  it("3.3.1. fromDE - Validation", function() {
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

  // ----------------------------------------------------------------
  it("3.5.0. fromDES - Error", function() {
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
  it("3.5.1. fromDES - Validation", function() {
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
  // 4 - Checker
  // ================================================================
  // 4.0. equals
  // ----------------------------------------------------------------
  // 4.1. isValidRank
  // ----------------------------------------------------------------
  // 4.2. isValidSuit
  
  // ================================================================
  // 5. Bridge Related
  // ================================================================
  it("5.1. Highcard Points - Validation", function() {
    for (var rank = 0; rank < 13; rank++) {
      for (var suit = 0; suit < 4; suit++) {
        if (rank === 12) {
          expect(new Card(rank,suit).hcp).to.eql(4)
        } else if (rank === 11) {
          expect(new Card(rank,suit).hcp).to.eql(3)
        } else if (rank === 10) {
          expect(new Card(rank,suit).hcp).to.eql(2)
        } else if (rank === 9) {
          expect(new Card(rank,suit).hcp).to.eql(1)
        } else {
          expect(new Card(rank,suit).hcp).to.eql(0)
        }
      }
    }
  });

  // ----------------------------------------------------------------
  it("5.2. Controls - Validation", function() {
    for (var rank = 0; rank < 13; rank++) {
      for (var suit = 0; suit < 4; suit++) {
        if (rank === 12) {
          expect(new Card(rank,suit).controls).to.eql(2)
        } else if (rank === 11) {
          expect(new Card(rank,suit).controls).to.eql(1)
        } else {
          expect(new Card(rank,suit).controls).to.eql(0)
        }
      }
    }
  });

});

// ================================================================
