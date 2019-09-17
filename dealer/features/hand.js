const Card = require("../features/card.js");

// ================================================================
class Hand {
  constructor() {
    this.cards = [];
  }

  get distribution() {
    let dist = [0,0,0,0];
    for (var i = 0; i < this.cards.length; i++) {
      dist[this.cards[i].suit] += 1;
    }
    return dist;
  }

  get clubsCnt() {
    return this.distribution[0];
  }

  get diamondsCnt() {
    return this.distribution[1];
  }

  get heartsCnt() {
    return this.distribution[2];
  }

  get spadesCnt() {
    return this.distribution[3];
  }

  get shortestSuit() {
    return Math.min(...this.distribution);
  }

  get longestSuit() {
    return Math.max(...this.distribution)
  }

  get clubs() {
    let clubs = [];
    for (var  i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === 0) {
        clubs.push(this.cards[i].repr_rank);
      }
    }
    return clubs.sort().reverse();;
  }

  get diamonds() {
    let diamonds = [];
    for (var  i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === 1) {
        diamonds.push(this.cards[i].repr_rank);
      }
    }
    return diamonds.sort().reverse();;
  }

  get hearts() {
    let hearts = [];
    for (var  i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === 2) {
        hearts.push(this.cards[i].repr_rank);
      }
    }
    return hearts.sort();
  }

  get spades() {
    let spades = [];
    for (var  i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === 3) {
        spades.push(this.cards[i].repr_rank);
      }
    }
    return spades.sort().reverse();;
  }

  get all() {
    let all = [[],[],[],[]];
    for (var i = 0; i < this.cards.length; i++) {
      all[this.cards[i].suit].push(this.cards[i].repr_rank);
    }
    for (var i = 0; i < 4; i++) {
      all[i].sort().reverse();
    }
    return all.reverse();
  }

  get handSize() {
    return this.cards.length;
  }

  get fullHand() {
    if (this.cards.length === 13) {
      return true;
    } else {
      return false;
    }
  }

  draw(cards) {
    for (var i = 0; i < cards.length; i++) {
      this.cards.push(cards[i]);
    }
    return
  }

}

// ================================================================
// Console.log

/*
let hand = new Hand;
    hand.draw([new Card(0), new Card(3), new Card(12), 
              new Card(15), new Card(16), new Card(18), 
              new Card(29), new Card(33), new Card(38), 
              new Card(41), new Card(42), new Card(45), new Card(49)]);

console.log(hand)
console.log(hand.shortestSuit)
*/

// ================================================================
// Exports
module.exports = Hand
