//const R = require("ramda");

const suits = ["clubs", "spades", "hearts", "diamonds"];
const directions = ["N", "E", "S", "W"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function isValidDirection(direction) {
  return directions.includes(direction);
}

function isValidSuit(suit, withTrump = false) {
  if (withTrump) {
    return suits.includes(suit) || suit === "noTrump";
  }
  return suits.includes(suit);
}

function isValidValue(value) {
  return values.includes(value);
}

/**
 * Checks if the contract is endangered.
 * @param {number} boardNr The board number
 * @param {string} declarer N, S, E, W
 * @throws {Error} The declarer is not valid.
 */
function isVulnerable(boardNr, declarer) {
  boardNr++;
  const vulnerableAll = [4, 20, 10, 26, 7, 23, 13, 29];
  let vulnerable = [];
  switch (declarer) {
    case "N":
    case "S":
      vulnerable = [2, 18, 12, 28, 5, 21, 15, 31, ...vulnerableAll];
      break;
    case "E":
    case "W":
      vulnerable = [3, 19, 6, 22, 16, 32, 9, 25, ...vulnerableAll];
      break;
    default:
      throw Error(`${declarer} is not a valid declarer.`);
  }
  return vulnerable.includes(boardNr);
}

class CardSet {
  constructor() {
    this.cardSet = new Set();
  }

  convertToInternal({ suit, value }) {
    return `${suit}-${value}`;
  }

  convertFromInternal(card) {
    const [suit, value] = card.split("-");
    return { suit, value };
  }

  addCard({ suit, value }) {
    if (!isValidSuit(suit)) {
      throw new Error(`'${suit}' is not a valid Suit.`);
    }
    if (!isValidValue(value)) {
      throw new Error(`'${value}' is not a valid Value.`);
    }
    this.cardSet.add(this.convertToInternal({ suit, value }));
  }

  addCards(cards) {
    for (const card of cards) {
      this.addCard(card);
    }
  }

  cards() {
    return [...this.cardSet].map(this.convertFromInternal);
  }

  size() {
    return this.cardSet.size;
  }

  standard52() {
    this.cardSet = new Set();

    for (const suit of suits) {
      for (const value of values) {
        this.addCard({ suit, value });
      }
    }
  }

  popRandomCard() {
    if (this.size() === 0) {
      throw new Error("No card left in set.");
    }
    const currentCards = [...this.cardSet];
    const choice =
      currentCards[Math.floor(Math.random() * currentCards.length)];
    this.cardSet.delete(choice);
    return this.convertFromInternal(choice);
  }
}

/**
 * Generates an object with four player hands with no duplicates.
 */
function generateHand() {
  const cs = new CardSet();
  cs.standard52();
  const hands = [[], [], [], []];

  let i = 0;
  while (cs.size() > 0) {
    hands[i % 4].push(cs.popRandomCard());
    i++;
  }

  return {
    N: hands[0],
    E: hands[1],
    S: hands[2],
    W: hands[3]
  };
}

console.log(generateHand());


module.exports = {
  directions,
  suits,
  values,
  isValidDirection,
  isValidSuit,
  isValidValue,
  isVulnerable,
  CardSet,
  generateHand
};
