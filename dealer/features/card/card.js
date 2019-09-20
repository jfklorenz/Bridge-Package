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
// Card
class Card {
  constructor(rank, suit) {
    if (!Card.isValidRank(rank)) throw Error(`${rank} is not a valid rank`);
    if (!Card.isValidSuit(suit)) throw Error(`${suit} is not a valid suit`);

    this.rank = rank;
    this.suit = suit;
  }    

  // ----------------------------------------------------------------
  /*
  Valid Ranks: [0,1,2,3,4,5,6,7,8,9,10,11,12]
  @param anything
  @returns {boolean} true if within range, false otherwise
  */
  static isValidRank(rank) {
    return typeof(rank) === 'number' && Number.isInteger(rank) && rank >= 0 && rank <= 12;
  }

  // ----------------------------------------------------------------
  /*
  Valid Ranks: [0,1,2,3]
  @param anything
  @returns {boolean} true if within range, false otherwise
  */
  static isValidSuit(suit) {
    return typeof(suit) === 'number' && Number.isInteger(suit) && suit >= 0 && suit <= 3;
  }

  // ----------------------------------------------------------------
  /*
  Highcard points of a card
  @param {number} A: 4, K: 3, Q: 2, J: 1, Rest: 0
  */
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
  /*
  Control points of a card
  @param {number} A: 2, K: 1, Rest: 0
  */
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

  // ----------------------------------------------------------------
  /*
  Equality check for a card with another
  @param {Card} A playing card
  @returns {boolean} true if equal, false otherwise
  */
  equals(card) {
     return this.rank === card.rank && this.suit === card.suit;
  }

  // ----------------------------------------------------------------
  /*
  Converts the Number representation of a rank into a locale String.
  @param {number} rank 
  @param {string} locale, default = "en"
  @returns {string} rank of respetive locale
  */
  static _rankToString(rank, locale = "en") {
    return LOCALES.rank[locale][rank];
  }

  // ----------------------------------------------------------------
  /*
  Converts the Number representation of a suit into a locale String.
  @param {number} suit 
  @param {string} locale, default = "en"
  @returns {string} suit of respetive locale
  */
  static _suitToString(suit, locale = "en") {
    return LOCALES.suit[locale][suit];
  }

  // ----------------------------------------------------------------
  /*
  Converts the String representation of a rank into a locale Number.
  @param {string} rank 
  @param {string} locale, default = "en"
  @returns {number} rank of respetive locale
  */
  static _rankToInteger(rank, locale = "en") {
   return LOCALES.rank[locale].findIndex(label => label === rank);
  }

  // ----------------------------------------------------------------
   /*
  Converts the String representation of a suit into a locale Number.
  @param {string} suit 
  @param {string} locale, default = "en"
  @returns {number} suit of respetive locale
  */
  static _suitToInteger(suit, locale = "en") {
    return LOCALES.suit[locale].findIndex(label => label === suit);
  }

  // ----------------------------------------------------------------
  /*
  Generates a Card from a locale String representation.
  @param {string} rank
  @param {string} suit
  @param {string} locale
  return {Card} the respective Card
  */
  static fromLocale(rank, suit, locale = "en") {
    return new Card(this._rankToInteger(rank, locale), this._suitToInteger(suit, locale));
  }
  
  // ----------------------------------------------------------------
  /*
  Calls fromLocale with locale = "de".
  @param {string} rank
  @param {string} suit
  @return {Card} the respective Card
  */
  static fromDE(rank, suit) {
    return this.fromLocale(rank, suit, "de");
  }

  // ----------------------------------------------------------------
  /*
  Calls fromLocale with locale = "en".
  @param {string} rank
  @param {string} suit
  @return {Card} the respective Card
  */
  static fromEN(rank, suit) {
    return this.fromLocale(rank, suit, "en");
  }

  // ----------------------------------------------------------------
  /*
  Calls fromLocale with locale = "des".
  @param {string} ranksuit
  @return {Card} the respective Card
  */
  static fromDES(ranksuit) {
    if (!ranksuit.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale(ranksuit[1], ranksuit[0], "des");
  }

  // ----------------------------------------------------------------
  /*
  Calls fromLocale with locale = "ens".
  @param {string} ranksuit
  @return {Card} the respective Card
  */
  static fromENS(ranksuit) {
    if (!ranksuit.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale(ranksuit[0], ranksuit[1], "ens");
  }

  // ----------------------------------------------------------------
  /*
  Calls toStringLocale with locale = "en".
  @returns {string} String representation of the Card
  */
  toString() {
    return this.toStringLocale("en");
  }

  // ----------------------------------------------------------------
  /*
  Gives a (human readable) String representation of the Card.
  @param {string} locale
  @returns {string} String representation of the Card
  */
  toStringLocale(locale = "en") {
    return LOCALES.toString[locale](
      Card._rankToString(this.rank, locale), 
      Card._suitToString(this.suit, locale)
    )
  }
}

// ================================================================
// Console.log
/*
console.log(Card.fromDE("6","Treff").toStringLocale("de"));
console.log(Card.fromDE("6","Treff").toStringLocale("en"));
console.log(Card.fromENS("6c").toStringLocale("ens"));
console.log(Card.fromENS("6c").toStringLocale("en"));
let card2 = new Card("7", "Spades");
*/

// ================================================================
module.exports = Card
