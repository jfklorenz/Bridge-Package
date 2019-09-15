// Imports
const {binomial, factorial, percentageRounded} = require("./math.js");

// ================================================================

// ================================================================
// All Distributions with Probability by Missing Cards
function missingCardsDistribution(cardCnt, cardsLeft = [13, 13]) {
  if (!([...Array(14).keys()].slice(1).includes(cardCnt))) throw "1014: cardCnt invalid.";

  let results = [];
  for (var r = 0; r <= cardCnt; r++) {
    results.push([
      [r, cardCnt - r], 
      binomial(cardCnt, r) * // binom(a, b)
      factorial(cardsLeft[0]) * 
      factorial(cardsLeft[1]) * 
      factorial(cardsLeft[0] + cardsLeft[1] - cardCnt) / 
      factorial(cardsLeft[0] + cardsLeft[1]) / 
      factorial(cardsLeft[0] - r) / 
      factorial(cardsLeft[1] - cardCnt + r)
    ]);
  }
  return results;
}

// ================================================================
// Probability of Missing Cards by Disribution
function missingCardsProbability(distribution, cardsLeft = [13, 13], fix = true) {
  return 100 * 
    binomial(distribution[0] + distribution[1], distribution[0]) * // binom(a, b)
    factorial(cardsLeft[0]) * 
    factorial(cardsLeft[1]) * 
    factorial(cardsLeft[0] + cardsLeft[1] - distribution[0] - distribution[1]) / 
    factorial(cardsLeft[0] + cardsLeft[1]) / 
    factorial(cardsLeft[0] - distribution[0]) / 
    factorial(cardsLeft[1] - distribution[1])
}

// ================================================================
// missingHighcards
function missingHighcardsDistribution(cardCnt, highcardCnt = 0) {
  if (!([...Array(14).keys()].slice(1).includes(cardCnt))) throw "1014: cardCnt invalid.";
  if (!([...Array(14).keys()].includes(highcardCnt))) throw "1014: highcardCnt invalid.";
  if (cardCnt < highcardCnt) throw "1014: cardCnt must be larger than highcardCnt";

  let results = [];
  // Generate Result Desitributions 
  for (var c = 0; c <= cardCnt; c++) {
    for (var h = 0; h <= highcardCnt; h++) {
      if (c >= h && cardCnt - c >= highcardCnt - h) {
        results.push([
          [c, cardCnt - c], 
          [h, highcardCnt - h],
          Math.round(missingCardsProbability([h, highcardCnt - h], [c, cardCnt - c]) * 
          missingCardsProbability([c, cardCnt - c])) / 100
        ])
      }
    }
  }
  return results;
}

// ================================================================
module.exports = {
  missingCardsDistribution,
  missingHighcardsDistribution
}