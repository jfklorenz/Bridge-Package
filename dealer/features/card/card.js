// ================================================================
const LOCALES = {
  rank: {
    de: ["2","3","4","5","6","7","8","9","10","B", "D", "K", "A"],
    des: ["2","3","4","5","6","7","8","9","Z","B", "D", "K", "A"],
    en: ["2","3","4","5","6","7","8","9","T","J", "Q", "K", "A"],
    ens: ["2","3","4","5","6","7","8","9","T","J", "Q", "K", "A"],
  },
  suit: {
    de: ["Treff", "Karo", "Coeur", "Pik"],
    des: ["t", "k", "c", "p"],
    en: ["Clubs", "Diamonds", "Hearts", "Spades"],
    ens: ["c", "d", "h", "s"]
  },
  toString: {
      de: (rank, suit) => `${suit} ${rank}`,
      des: (rank, suit) => `${suit}${rank}`,
      en: (rank, suit) => `${rank} of ${suit}`,
      ens: (rank, suit) => `${rank}${suit}`
  }
};

// ================================================================
// 1. Card
class Card {
  constructor(rank, suit) {
    if (!Card.isValidRank(rank)) throw Error(`${rank} is not a valid rank`);
    if (!Card.isValidSuit(suit)) throw Error(`${suit} is not a valid suit`);
    // ================================================================
    // 2. Base Attributes & Representation
    // ================================================================
    // 2.1. Rank
    this.rank = rank;

    // ----------------------------------------------------------------
    // 2.2. Suit
    this.suit = suit;
  }    

  // ----------------------------------------------------------------
  // 2.3. toString
  toString() {
    return this.toStringLocale("en");
  }

  // ----------------------------------------------------------------
  // 2.4. toStringLocale
  toStringLocale(locale = "en") {
    return LOCALES.toString[locale](
      Card._rankToString(this.rank, locale), 
      Card._suitToString(this.suit, locale)
    )
  }

  // ----------------------------------------------------------------
  // 2.5. _rankToInteger
  static _rankToInteger(rank, locale = "en") {
    return LOCALES.rank[locale].findIndex(label => label === rank);
  }

  // ----------------------------------------------------------------
  // 2.6. _rankToString
  static _rankToString(rank, locale = "en") {
    return LOCALES.rank[locale][rank];
  }

  // ----------------------------------------------------------------
  // 2.7. _suitToInteger
  static _suitToInteger(suit, locale = "en") {
    return LOCALES.suit[locale].findIndex(label => label === suit);
  }

  // ----------------------------------------------------------------
  // 2.8. _suitToString
  static _suitToString(suit, locale = "en") {
    return LOCALES.suit[locale][suit];
  }

  // ================================================================
  // 3. Card Generation
  // ================================================================
  // 3.1. fromLocale
  static fromLocale(rank, suit, locale = "en") {
    return new Card(this._rankToInteger(rank, locale), this._suitToInteger(suit, locale));
  }

  // ----------------------------------------------------------------
  // 3.2. fromEN
  static fromEN(rank, suit) {
    return this.fromLocale(rank, suit, "en");
  }

  // ----------------------------------------------------------------
  // 3.3. fromENS
  static fromENS(ranksuit) {
    if (!ranksuit.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale(ranksuit[0], ranksuit[1], "ens");
  }

  // ----------------------------------------------------------------
  // 3.4. fromDE
  static fromDE(rank, suit) {
    return this.fromLocale(rank, suit, "de");
  }

  // ----------------------------------------------------------------
  // 3.5. fromDES
  static fromDES(ranksuit) {
    if (!ranksuit.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale(ranksuit[1], ranksuit[0], "des");
  }
  // ================================================================
  // 4. Checker
  // ================================================================
  // 4.0. equals
  equals(card) {
    return this.rank === card.rank && this.suit === card.suit;
  }
  
  // ----------------------------------------------------------------
  // 4.1. isValidRank
  static isValidRank(rank) {
    return typeof(rank) === 'number' && Number.isInteger(rank) && rank >= 0 && rank <= 12;
  }

  // ----------------------------------------------------------------
  // 4.2. isValidSuit
  static isValidSuit(suit) {
    return typeof(suit) === 'number' && Number.isInteger(suit) && suit >= 0 && suit <= 3;
  }

  // ================================================================
  // 5. Bridge Related
  // ================================================================
  // 5.1. Highcard Points (HCP)
  get hcp() {
    switch(this.rank) {
      case(12):
        return 4;
      case(11):
        return 3;
      case(10):
        return 2;
      case(9):
        return 1;
      default:
        return 0;
    }
  }

  // ----------------------------------------------------------------
  // 5.2. Control Points
  get controls() {
    switch(this.rank) {
      case(12):
        return 2;
      case(11):
        return 1;
      default:
        return 0;
    }
  }
}

// ================================================================
// Console.log

// ================================================================
module.exports = Card
