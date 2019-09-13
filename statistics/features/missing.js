// Imports
const {factorial, percentageRounded} = require("./math.js");

// ================================================================
// missingCards
function missingCards(cardCnt) {

  if (!([...Array(14).keys()].slice(1).includes(cardCnt))) throw "1014: Input invalid.";

  let results = [];
  for (var i = 0; i <= cardCnt; i++) {
    results.push([[i, cardCnt - i], 0]);
  }

  for (var j = 0; j < results.length; j++) {
    let cardsLeft = 13;
    let cardsRight = 13;
    let result = 1;
    let resultCurrent = results[j][0];

    for (var l = 0; l <= resultCurrent[0]; l++) {
      if (l > 0) {
        result *= cardsLeft / (cardsLeft + cardsRight);
        cardsLeft -= 1;
      }
    }
    
    for (var r = 0; r <= resultCurrent[1]; r++) {
      if (r > 0) {
        result *= cardsRight / (cardsLeft + cardsRight);
        cardsRight -= 1;
      }
    }

    result *= factorial(resultCurrent[0] + resultCurrent[1]) / (factorial(resultCurrent[0]) * factorial(resultCurrent[1]));
    results[j][1] = percentageRounded(result);
  }

  return results;
}

// ================================================================
// missingHighcards
function missingHighcards(cardCnt, highcardCnt) {
  let results = [];
  for (var i = 0; i <= cardCnt; i++) {
    results.push([[i, cardCnt - i], 0]);
  }

  return results
}

// ================================================================
module.exports = {
  missingCards,
  missingHighcards
}