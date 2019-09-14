// Imports
const {factorial, percentageRounded} = require("./math.js");

// ================================================================

// ================================================================
// All Distributions with Probability by Missing Cards
function allDistributionsWithProbabilityByMissingCards(cardCnt) {
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
// Probability of Missing Cards by Disribution
function probabilityOfMissingCardsByDistribution(distribution) {
  let results = allDistributionsWithProbabilityByMissingCards(distribution[0] + distribution[1]);
  for (var i = 0; i < results.length; i++) {
    if (results[i][0][0] === distribution[0] && results[i][0][1] === distribution[1]) {
      return results[i][1];
    }
  }
}

// ================================================================
// missingHighcards
function allDistributionsWithProbabilityByMissingCardsAndHighcards(cardCnt, highcardCnt) {
  let results = [];

  for (var i = 0; i <= cardCnt; i++) {
    let result0 = []
    for (var j = 0; j <= highcardCnt; j++) {
      if (i >= j && cardCnt -i >= highcardCnt - j) {
        result0.push([[i, cardCnt - i], [j, highcardCnt - j], 
            percentageRounded(
                probabilityOfMissingCardsByDistribution([i, cardCnt - i]) * 
                probabilityOfMissingCardsByDistribution([j, highcardCnt - j]) / 10000)]);
      }
    }
    results.push(result0);
  }
  return results
}

let test = allDistributionsWithProbabilityByMissingCardsAndHighcards(4, 2);
for (var i = 0; i < test.length; i++) {
  console.log(test[i])
}

// ================================================================
module.exports = {
  allDistributionsWithProbabilityByMissingCards,
  allDistributionsWithProbabilityByMissingCardsAndHighcards,
  probabilityOfMissingCardsByDistribution
}