// ================================================================
// Imports
const Card = require("../../dealer/features/card.js");
const Hand = require("../../dealer/features/hand.js");
const { analyzeCardHcp, analyzeCardControls } = require("../features/card.js");

// ================================================================
// Analyze Hand: High Card Points
function analyzeHandHcp(hand) {
  if (!(hand instanceof Hand)) throw "1014: Input must be a Hand";
  let hcp = 0;
  for (var c = 0; c < hand.cards.length; c++) {
    hcp += analyzeCardHcp(hand.cards[c])
  }
  return hcp;
}

// ================================================================
// Analyze Hand: Control Points
function analyzeHandControls(hand) {
  if (!(hand instanceof Hand)) throw "1014: Input must be a Hand";
  let controls = 0;
  for (var c = 0; c < hand.cards.length; c++) {
    controls += analyzeCardControls(hand.cards[c])
  }
  return controls;
}

// ================================================================
// Analyze Hand: Distribution Points
function analyzeHandDistributionpoints(hand) {
  if (!(hand instanceof Hand)) throw "1014: Input must be a Hand";
  console.log(hand.longestSuit);
  switch(hand.shortestSuit) {
    case (0):
      return 5;
    case (1):
      return 3;
    case (2):
      return 1;
    default:
      return 0;
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

let hand2 = new Hand;
    hand2.draw([new Card(0), new Card(1), new Card(2), 
              new Card(3), new Card(4), new Card(5), 
              new Card(6), new Card(7), new Card(8), 
              new Card(9), new Card(10), new Card(11), new Card(12)]);

console.log(analyzeHandHcp(hand))
console.log(analyzeHandDistributionpoints(hand2))
*/

// ================================================================
// Exports
module.exports = {
  analyzeHandHcp,
  analyzeCardControls
}
