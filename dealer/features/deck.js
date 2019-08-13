const { shuffle } = require("../features/shuffle.js")
const Card = require("../features/card.js");
const Hand = require("../features/hand.js");

// ================================================================
class Deck {
  constructor() {
    this.cards = []
    this.init();
  }

  init () {
    for (var i = 0; i < 52; i++) {
      this.cards.push(new Card(i));
    }
  }

  shuffle() {
    this.cards = shuffle(this.cards);
  }

  draw(cardCnt) {
    let draw = [];
    for (var i = 0; i < cardCnt; i++) {
      draw.push(this.cards.pop());
    }
    return draw;
  }

  deal(cardCnt, hand) {
    for (var i = 0; i < cardCnt; i++) {
      hand.cards.push(this.cards.pop());
    }
  }

  get length() {
    return this.cards.length;
  }
}

// ================================================================

let deck = new Deck();
deck.shuffle();
let hand = new Hand();
deck.deal(13, hand);

console.log(deck.length);
console.log(hand.all);
console.log("");
console.log(deck.draw(4));

// ================================================================
module.exports = Deck
