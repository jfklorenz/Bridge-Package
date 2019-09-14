
// ================================================================
class Card {
  constructor(id) {
    if(typeof(id) === 'number' && id >= 0 && id <= 51 && id % 1 === 0) {
      // This is good
      this.id = id;
    } else {
      // This is bad
      // This return is ignored and an empty object is returned
      throw "400/constructor: id needs to be a integer between 0 and 51.";
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

  inspect(depth, opts) {
    return this.repr_card;
  }
}


// ================================================================
module.exports = Card
