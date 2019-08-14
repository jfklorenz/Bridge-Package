const { binomial, factorial } = require("./helper.js");

// ================================================================
function cardsLeft(cardsCnt) {

  if (isNaN(cardsCnt)) throw "error: cards left must be numeric.";
  if (!(cardsCnt <= 13 && cardsCnt >= 0)) throw "error: length of club suit must be within range.";

  let distribution = [];
  let cases = [];

  for (var i = 0; i <= cardsCnt; i++) {
    cases.push([i, cardsCnt - i]);
  }

  for (var i = 0; i <= cardsCnt; i++) {
    let value = 1;
    let xCnt = 0;
    let yCnt = 0;

    for (var xi = 0; xi < cases[i][0]; xi++) {
      value *= (13 - xCnt) / ((13 - xCnt) + (13 - yCnt));
      xCnt += 1;
    }
    for (var yi = 0; yi < cases[i][1]; yi++) {
      value *= (13 - yCnt) / ((13 - xCnt) + (13 - yCnt));
      yCnt += 1;      
    }
    value *= factorial(cases[i][0] + cases[i][1]) / (factorial(cases[i][0]) * factorial(cases[i][1]));

    value = Math.round(100 * value) / 100;

    distribution.push(value);
  }

  return distribution;
  };

// ================================================================
// console log

console.log(cardsLeft(3));

// ================================================================
module.exports = {
  cardsLeft
}