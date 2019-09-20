// ================================================================
// Imports
const Card = require("./card.js");

// ================================================================
// Parameters
const HANDTYPES = {
  "Balanced": [[4,3,3,3], [4,4,3,2], [5,3,3,2]],
  "1-Suiter": [[6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], 
    [7,2,2,2], [7,3,2,1], [7,3,3,0], [7,4,1,1], [7,4,2,0], [7,5,1,0], 
    [8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0], 
    [9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0], [10,1,1,1], [10,2,1,0], [10,3,0,0], 
    [11,1,1,0], [11,2,0,0], [12,1,0,0], [13,0,0,0]],
  "2-Suiter": [[5,4,2,2], [5,4,3,1], [5,5,2,1], [5,5,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0], [7,6,0,0]],
  "3-Suiter": [[4,4,4,1], [5,4,4,0]]
}

// ================================================================
// Card Set
class CardSet {
  constructor() {
    this.cards = []
  }

  // ================================================================
  // Suits
  // ================================================================
  // Cards
  suit(suit) {
    switch(suit) {
      case (0 || "Clubs" || "c" || "Treff" || "t"):
        return this.clubs;
      case (1):
        return this.diamonds;
      case (2):
        return this.hearts;
      case (3):
        return this.spades
    }
  }
  get clubs() {
    return this.cards.filter(c => c.suit === 0);
  }
  get diamonds() {
    return this.cards.filter(c => c.suit === 1);
  }
  get hearts() {
    return this.cards.filter(c => c.suit === 2);
  }
  get spades() {
    return this.cards.filter(c => c.suit === 3);
  }
  // ----------------------------------------------------------------
  // Number of Cards 
  get club() {
    return this.clubs.length;
  }
  get diamond() {
    return this.diamonds.length;
  }
  get heart() {
    return this.hearts.length;
  }
  get spade() {
    return this.spades.length;
  }

  // ================================================================
  // Distribution
  get distribution() {
    return [this.club, this.diamond, this.heart, this.spade];
  }

  get shortestSuit() {
    return Math.min(...this.distribution);
  }

  get longestSuit() {
    return Math.max(...this.distribution);
  }

  // ----------------------------------------------------------------
  // Handtype
  get handtype() {
    const handtypes = ["Balanced", "1-Suiter", "2-Suiter", "3-Suiter"];
    for (var h = 0; h < handtypes.length; h++) {
      if (this._hasSubArray(HANDTYPES[handtypes[h]], this.distribution.sort(function(a, b){return b-a}))) {
        return handtypes[h];
      }
    }
    return "No Type";
  }

  // ================================================================
  // Bridge
  // ================================================================
  // Highcard Points (HCP)
  get hcp() {
    return this.cards.reduce((a, b) => a + b.hcp, 0);
  }

  // ----------------------------------------------------------------
  // controls
  get controls() {
    return this.cards.reduce((a, b) => a + b.controls, 0);
  }

  // ----------------------------------------------------------------
  // Distribution Points
  get distributionPoints() {
    let points = 0;
    switch(true) {
      case (this.distribution.includes(0)):
        points += 5;
      case (this.distribution.includes(1)):
        points += 3;
      case (this.distribution.includes(2)):
        points += 1;
    }
    return points;
  }

  // ================================================================
  // Functionality
  // ================================================================
  // Add Card
  addCard(card) {
    this.cards.push(card);
    return
  }

  // ----------------------------------------------------------------
  // Remove Card
  removeCard(card) {
    this.cards = this.cards.filter(c => !c.equals(card));
    return
  }

  // ----------------------------------------------------------------
  // Shuffle
  shuffle() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  // ----------------------------------------------------------------
  // Hand is Valid, i.e. no Duplicates
  get isValid() {
    return this.cards.length === this.cards.reduce((unique, o) => {
      if(!unique.some(obj => obj.rank === o.rank && obj.suit === o.suit)) {
        unique.push(o);
      }
      return unique;
  },[]).length;
  }

  // ----------------------------------------------------------------
  // Handsize
  get handsize() {
    return this.cards.length;
  }

  get isFull() {
    return this.handsize === 13;
  }

  get isEmpty() {
    return this.handsize === 0;
  }

  _hasSubArray(master, sub) {
    return master.some(a => sub.every((v, i) => v === a[i]));
  }
}

// ================================================================
// Console.log

let hand = new CardSet;
hand.addCard(new Card(0,0));
hand.addCard(new Card(1,0));
hand.addCard(new Card(2,0));
hand.addCard(new Card(3,0));
hand.addCard(new Card(0,1));
hand.addCard(new Card(1,1));
hand.addCard(new Card(2,1));
hand.addCard(new Card(0,2));
hand.addCard(new Card(1,2));
hand.addCard(new Card(2,2));
hand.addCard(new Card(0,3));
hand.addCard(new Card(1,3));
hand.addCard(new Card(2,3));

hand.shuffle()
console.log(hand.cards);
console.log("distribution", hand.distribution)
console.log("isEmpty", hand.isEmpty);
console.log("isFull", hand.isFull);
console.log("handsize", hand.handsize)
console.log("distPoints", hand.distributionPoints)
console.log("shortestSuit", hand.shortestSuit)
console.log("longestSuit", hand.longestSuit)
console.log("handtype", hand.handtype)
console.log("VALID", hand.isValid)


// ================================================================
// Exports
module.exports = CardSet