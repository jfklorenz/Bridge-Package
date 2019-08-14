
// ================================================================
class Card {
  constructor(id) {
    if(typeof(id) === 'number' && id >= 0 && id <= 51 && id % 1 === 0) {
      // This is good
      this.id = id;
    } else {
      // This is bad
      // This return is ignored and an empty object is returned
      throw "400/constructor: id needs to be a integer between 0 and 12";
    }
  }

  get rank() {
    return this.id % 13;
  }

  get suit() {
    return Math.floor(this.id / 13);
  }

  get repr_rank() {
    const dict = {0 : "2", 1: "3", 2: "4", 3: "5", 4: "6", 5: "7", 6: "8", 7: "9", 8: "T", 9: "B", 10: "Q", 11: "K", 12: "A"};
    return dict[this.rank];
  }

  get repr_suit() {
    const dict = {0: "Clubs", 1: "Diamonds", 2: "Hearts", 3: "Spades"};
    return dict[this.suit];
  }

  get repr_card() {
    return this.repr_rank + " of " + this.repr_suit;
  }

  get hcp() {
    if (this.rank === 12) {
      return 4;
    } else if (this.rank == 11) {
      return 3;
    } else if (this.rank == 10) {
      return 2;
    } else if (this.rank == 9) {
      return 1;
    } else if (this.rank <= 8 && this.rank >= 0) {
      return 0;
    } else {
      throw "404/hcp: rank not valid or found / " + this.rank;
    }
  }

  get controls() {
    if (this.rank === 12) {
      return 2;
    } else if (this.rank === 11) {
      return 1;
    } else if (this.rank <= 10 && this.rank >= 0) {
      return 0;
    } else {
      throw "404/controls: rank not valid or found";
    }
  }


  inspect(depth, opts) {
    return this.repr_card;
  }
}


// ================================================================
module.exports = Card
