// ================================================================
// Imports
const Card = require("../card/card.js");

// ================================================================
// Parameters
const HANDTYPES = {
  Balanced: [[4, 3, 3, 3], [4, 4, 3, 2], [5, 3, 3, 2]],
  "1-Suiter": [
    [6, 3, 2, 2],
    [6, 3, 3, 1],
    [6, 4, 2, 1],
    [6, 4, 3, 0],
    [7, 2, 2, 2],
    [7, 3, 2, 1],
    [7, 3, 3, 0],
    [7, 4, 1, 1],
    [7, 4, 2, 0],
    [7, 5, 1, 0],
    [8, 2, 2, 1],
    [8, 3, 1, 1],
    [8, 3, 2, 0],
    [8, 4, 1, 0],
    [8, 5, 0, 0],
    [9, 2, 1, 1],
    [9, 2, 2, 0],
    [9, 3, 1, 0],
    [9, 4, 0, 0],
    [10, 1, 1, 1],
    [10, 2, 1, 0],
    [10, 3, 0, 0],
    [11, 1, 1, 0],
    [11, 2, 0, 0],
    [12, 1, 0, 0],
    [13, 0, 0, 0]
  ],
  "2-Suiter": [
    [5, 4, 2, 2],
    [5, 4, 3, 1],
    [5, 5, 2, 1],
    [5, 5, 3, 0],
    [6, 5, 1, 1],
    [6, 5, 2, 0],
    [6, 6, 1, 0],
    [7, 6, 0, 0]
  ],
  "3-Suiter": [[4, 4, 4, 1], [5, 4, 4, 0]]
};

// ================================================================
// Card Set
class CardSet {
  constructor() {
    this.cards = [];
  }
  // ================================================================
  // 2. Cards
  // ================================================================
  // 2.1. Shuffle
  shuffle() {
    var currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  // ----------------------------------------------------------------
  // 2.1. Add Card
  addCard(card) {
    this.cards.push(card);
    return;
  }

  // ----------------------------------------------------------------
  // 2.2. Add Cards
  addCards(cards) {
    for (var c = 0; c < cards.length; c++) {
      this.cards.push(cards[c]);
    }
    return;
  }

  // ----------------------------------------------------------------
  // 2.3. Remove Card
  removeCard(card) {
    this.cards = this.cards.filter(c => !c.equals(card));
    return;
  }
  // ----------------------------------------------------------------
  // 2.4. Remove Cards
  removeCards(cards) {
    for (var c = 0; c < cards.length; c++) {
      this.removeCard(cards[c]);
    }
  }

  // ================================================================
  // 3. Suits
  // ================================================================
  // 3.1. Suit
  suit(suit) {
    switch (suit) {
      case 0 || "Clubs" || "c" || "Treff" || "t":
        return this.clubs;
      case 1:
        return this.diamonds;
      case 2:
        return this.hearts;
      case 3:
        return this.spades;
    }
  }

  // ----------------------------------------------------------------
  // 3.1. Clubs
  get clubs() {
    return this.cards.filter(c => c.suit === 0);
  }

  // ----------------------------------------------------------------
  // 3.2. Diamonds
  get diamonds() {
    return this.cards.filter(c => c.suit === 1);
  }

  // ----------------------------------------------------------------
  // 3.3. Hearts
  get hearts() {
    return this.cards.filter(c => c.suit === 2);
  }

  // ----------------------------------------------------------------
  // 3.4. Spades
  get spades() {
    return this.cards.filter(c => c.suit === 3);
  }

  // ----------------------------------------------------------------
  // 3.5. Club Count
  get club() {
    return this.clubs.length;
  }

  // ----------------------------------------------------------------
  // 3.6. Diamond Count
  get diamond() {
    return this.diamonds.length;
  }

  // ----------------------------------------------------------------
  // 3.7. Heart Count
  get heart() {
    return this.hearts.length;
  }

  // ----------------------------------------------------------------
  // 3.8. Spade Count
  get spade() {
    return this.spades.length;
  }

  // ================================================================
  // 4. Distributions
  // ================================================================
  // 4.1. Distribution
  get distribution() {
    return [this.club, this.diamond, this.heart, this.spade];
  }

  // ----------------------------------------------------------------
  // 4.2. Shortest Suit
  get shortestSuit() {
    return Math.min(...this.distribution);
  }

  // ----------------------------------------------------------------
  // 4.3. Longest Suit
  get longestSuit() {
    return Math.max(...this.distribution);
  }

  // ----------------------------------------------------------------
  // 4.4. Handsize
  get handsize() {
    return this.cards.length;
  }

  // ----------------------------------------------------------------
  // 4.5. is Full Hand
  get isFull() {
    return this.handsize === 13;
  }

  // ----------------------------------------------------------------
  // 4.6. is Empty Hand
  get isEmpty() {
    return this.handsize === 0;
  }

  // ----------------------------------------------------------------
  // 4.7. is Deck
  get isDeck() {
    return this.handsize === 52;
  }

  // ----------------------------------------------------------------
  // 4.8. is Valid (no duplicates)
  get isValid() {
    for (var i = 0; i < this.cards.length; i++) {
      for (var j = i + 1; j < this.cards.length; j++) {
        if (
          this.cards[i].rank === this.cards[j].rank &&
          this.cards[i].suit === this.cards[j].suit
        ) {
          return false;
        }
      }
    }
    return true;
  }

  // ================================================================
  // 5. Bridge Related
  // ================================================================
  // 5.1. Highcard Points (HCP)
  get hcp() {
    return this.cards.reduce((a, b) => a + b.hcp, 0);
  }

  // ----------------------------------------------------------------
  // 5.2. Control Points
  get controls() {
    return this.cards.reduce((a, b) => a + b.controls, 0);
  }

  // ----------------------------------------------------------------
  // 5.3. Distribution Points
  get distributionPoints() {
    let points = 0;
    switch (true) {
      case this.distribution.includes(0):
        points += 5;
      case this.distribution.includes(1):
        points += 3;
      case this.distribution.includes(2):
        points += 1;
    }
    return points;
  }

  // ----------------------------------------------------------------
  // 5.4. Handtype
  get handtype() {
    const handtypes = ["Balanced", "1-Suiter", "2-Suiter", "3-Suiter"];
    for (var h = 0; h < handtypes.length; h++) {
      if (
        this._hasSubArray(
          HANDTYPES[handtypes[h]],
          this.distribution.sort(function(a, b) {
            return b - a;
          })
        )
      ) {
        return handtypes[h];
      }
    }
    return "No Type";
  }

  _hasSubArray(master, sub) {
    return master.some(a => sub.every((v, i) => v === a[i]));
  }
}

// ================================================================
// Console.log

// ================================================================
// Exports
module.exports = CardSet;
