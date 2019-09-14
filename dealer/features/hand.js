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

  draw(cards) {
    for (var i = 0; i < cards.length; i++) {
      this.cards.push(cards[i]);
    }
    return
  }

  get cardCnt() {
    return this.cards.length;
  }

  get fullHand() {
    if (this.cards.length === 13) {
      return true;
    } else {
      return false;
    }
  }

}

// ================================================================

// ================================================================
module.exports = Hand
