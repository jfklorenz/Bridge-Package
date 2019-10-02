// ================================
// Imports

// ================================
class Auction {
  constructor() {
    this.bids = [];
  }

  addBid(bid) {
    if (bid instanceof Bid) {
      this.bids.push(bid);
      return;
    } else throw "Argument must be a Bid object";
  }

  addBids(bids) {
    for (var b = 0; b < bids.length; b++) {
      this.addBid(bids[b]);
    }
    return;
  }

  validate() {
    let state = new Bid();
    for (var r = 0; r < this.bids.length; r++) {
      let curr = this.bids[r];

      // Bidding: Domination
      // Rank >
      if (
        state.rank > curr.rank ||
        (state.rank === curr.rank && state.suit >= curr.suit)
      )
        return false;
      // Rank ==

      state = curr;
    }
    return true;
  }
}

// ================================
class Bid {
  constructor() {
    this.rank = null;
    this.suit = null;

    this.pass = false;
    this.double = false;
    this.redouble = false;

    this.player = null;
    this.convention = null;
    this.corrected = null;
    this.comment = null;
  }

  followed() {
    let ret = JSON.parse(JSON.stringify(this));
    ret.double = true;
    return ret;
  }

  passed() {
    let ret = new Pass();
    ret.rank = this.rank;
    ret.suit = this.suit;
    ret.double = this.double;
    ret.redouble = this.redouble;
    return ret;
  }

  static doubled() {
    let ret = new Double();
    ret.rank = this.rank;
    ret.suit = this.suit;
    ret.pass = this.pass;
    return ret;
  }

  redoubled() {
    let ret = new Redouble();
    ret.rank = this.rank;
    ret.suit = this.suit;
    ret.pass = this.pass;
    ret.double = this.double;
    return ret;
  }
}

// --------------------------------
class Double extends Bid {
  constructor() {
    super();
    this.double = true;
  }
}

// --------------------------------
class Redouble extends Bid {
  constructor() {
    super();
    this.redouble = true;
  }
}

// --------------------------------
class Pass extends Bid {
  constructor() {
    super();
    this.pass = true;
  }
}

// --------------------------------
class OneClub extends Bid {
  constructor() {
    super();
    this.rank = 0;
    this.suit = 0;
  }
}

// --------------------------------
class OneDiamond extends Bid {
  constructor() {
    super();
    this.rank = 0;
    this.suit = 1;
  }
}

// --------------------------------
class OneHeart extends Bid {
  constructor() {
    super();
    this.rank = 0;
    this.suit = 2;
  }
}

// --------------------------------
class OneSpade extends Bid {
  constructor() {
    super();
    this.rank = 0;
    this.suit = 3;
  }
}

// --------------------------------
class OneNoTrump extends Bid {
  constructor() {
    super();
    this.rank = 0;
    this.suit = 4;
  }
}

// --------------------------------
class TwoClubs extends Bid {
  constructor() {
    super();
    this.rank = 1;
    this.suit = 0;
  }
}

// --------------------------------
class TwoDiamonds extends Bid {
  constructor() {
    super();
    this.rank = 1;
    this.suit = 1;
  }
}

// --------------------------------
class TwoHearts extends Bid {
  constructor() {
    super();
    this.rank = 1;
    this.suit = 2;
  }
}

// --------------------------------
class TwoSpades extends Bid {
  constructor() {
    super();
    this.rank = 1;
    this.suit = 3;
  }
}

// --------------------------------
class TwoNoTrump extends Bid {
  constructor() {
    super();
    this.rank = 1;
    this.suit = 4;
  }
}

// ================================
// Console.log
/*
let auc = new Auction();
let dbl = new Double();
let pass = new Pass();

auc.addBids([dbl, pass]);

auc.validate();
console.log(auc.bids);

let tst = new OneSpade();
let tst2 = tst.redoubled();
console.log("================");
console.log(OneSpade.doubled());
console.log("================");
console.log(tst2);
*/
// ================================
// Exports
module.exports = {
  Bid,
  Auction,
  Pass,
  Double,
  Redouble,
  OneClub,
  OneDiamond,
  OneHeart,
  OneSpade,
  OneNoTrump
};
