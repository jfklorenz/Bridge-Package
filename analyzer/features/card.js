const Card = require("../../dealer/features/card.js");

// ================================================================
function analyzeCardHcp(card) {
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
  switch(card.rank) {
    case(12):
      return 2;
    case(11):
      return 1;
    default:
      return 0;
  }
}


console.log(analyzeCardHcp(new Card(11)));
console.log(analyzeCardHcp(new Card(22)));

// ================================================================

