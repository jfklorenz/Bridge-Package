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

  static isValidRank(rank) {
    return typeof(rank) === 'number' && Number.isInteger(rank) && rank >= 0 && rank <= 12;
  }

  static isValidSuit(suit) {
    return typeof(suit) === 'number' && Number.isInteger(suit) && suit >= 0 && suit <= 3;
  }

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

  static _rankToString(rank, locale = "en") {
    return LOCALES.rank[locale][rank];
  }

  static _suitToString(suit, locale = "en") {
    return LOCALES.suit[locale][suit];
  }

  static _rankToInteger(rank, locale = "en") {
   return LOCALES.rank[locale].findIndex(label => label === rank);
  }

  static _suitToInteger(suit, locale = "en") {
    return LOCALES.suit[locale].findIndex(label => label === suit);
  }

  static fromLocale(locale, rank, suit) {
    return new Card(this._rankToInteger(rank, locale), this._suitToInteger(suit, locale));
  }

  static fromDE(rank, suit) {
    return this.fromLocale("de", rank, suit);
  }

  static fromEN(rank, suit) {
    return this.fromLocale("en", rank, suit);
  }

  static fromDES(suitrank) {
    if (!suitrank.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale("des", suitrank[1], suitrank[0]);
  }

  static fromENS(suitrank) {
    if (!suitrank.length === 2) throw "Error: Input must be 2 characters.";
    return this.fromLocale("ens", suitrank[0], suitrank[1]);
  }

  toString() {
    return this.toStringLocale("en");
  }

  toStringLocale(locale) {
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
