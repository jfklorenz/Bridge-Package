const Card = require("../../dealer/features/card.js");

// ================================================================
function analyzeCardHcp(card) {
  if (!(card instanceof Card)) throw "1014: Input must be a Card";
  switch(card.rank) {
    case(12):
      return 4;
    case(11):
      return 3;
    case(10):
      return 2;
    case(9):
      return 1;
    default:
      return 0;
  }
}

function analyzeCardControls(card) {
  if (!(card instanceof Card)) throw "1014: Input must be a Card";
  switch(card.rank) {
    case(12):
      return 2;
    case(11):
      return 1;
    default:
      return 0;
  }
}

// ================================================================
// Console.log
//console.log(analyzeCardHcp(new Card(11)));
//console.log(analyzeCardHcp(new Card(22)));

// ================================================================
// Exports
module.exports = {
  analyzeCardHcp,
  analyzeCardControls
}
