const Card = require("../features/card.js");


// ================================================================
class Hand {
  constructor() {
    this.cards = [];
  }

  get hcp() {
    let hcp = 0;
    for (var i = 0; i < this.cards.length; i++) {
      hcp += this.cards[i].hcp;
    }
    return hcp;
  }

  get controls() {
    let controls = 0;
    for (var i = 0; i < this.cards.length; i++) {
      hcp += this.cards[i].controls;
    }
    return controls;
  }

  get distPoints() {
    let distPoints = 0;
    const dist = this.distribution();

    for (var i = 0; i < 4; i++) {
      if (dist[i] === 0) {
        distPoints += 5;
      } else if (dist[i] === 1) {
        distPoints += 3;
      } else if (dist[i] === 2) {
        distPoints += 1;
      } else if (dist[i] > 2) {
        distPoints += 0;
      } else {
        throw "404/distPoints: distribution invalid / " + dist;
      }
    }
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

  get all1() {
    let all = [[],[],[],[]];
    for (var i = 0; i < this.cards.length; i++) {
      all[this.cards[i].suit].push(this.cards[i].id);
      all[this.cards[i].suit].sort((a,b) => {
        if(a.id > b.id)
         return 1
         else
         return -1
      });
    }
    return all;
  }

  get all() {
    let all = [[],[],[],[]];
    for (var i = 0; i < this.cards.length; i++) {
      all[this.cards[i].suit].push(this.cards[i]);
      all[this.cards[i].suit].sort().reverse();
    }
    return all;
  }

}

// ================================================================

// ================================================================
module.exports = Hand
