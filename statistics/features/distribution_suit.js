const { binomial, factorial } = require("./helper.js");

// ================================================================
function missingCards(cardsCnt, cardsX = 13, cardsY = 13) {

  if (isNaN(cardsCnt)) throw "error: cards count must be numeric.";
  if (!(cardsCnt % 1 === 0)) throw "error: cards count must be an integer.";
  if (!(cardsCnt >= 0)) throw "error: cards count must be 0 or larger.";
  if (!(cardsCnt <= 13)) throw "error: cards count must be 13 or smaller.";

  if (isNaN(cardsX)) throw "error: cardsX must be numeric.";
  if (!(cardsX % 1 === 0)) throw "error: cardsX must be an integer.";
  if (!(cardsX >= 0)) throw "error: cardsX must be 0 or larger.";
  if (!(cardsX <= 13)) throw "error: cardsX must be 13 or smaller.";

  if (isNaN(cardsY)) throw "error: cardsY must be numeric.";
  if (!(cardsY % 1 === 0)) throw "error: cardsY must be an integer.";
  if (!(cardsY >= 0)) throw "error: cardsY be 0 or larger.";
  if (!(cardsY <= 13)) throw "error: cardsY be 13 or smaller.";

  if (!(cardsCnt <= cardsX + cardsY)) throw "error: not enough cards available.";

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
      value *= (cardsX - xCnt) / ((cardsX - xCnt) + (cardsY - yCnt));
      xCnt += 1;
    }
    for (var yi = 0; yi < cases[i][1]; yi++) {
      value *= (cardsY - yCnt) / ((cardsX - xCnt) + (cardsY - yCnt));
      yCnt += 1;      
    }
    value *= factorial(cases[i][0] + cases[i][1]) / (factorial(cases[i][0]) * factorial(cases[i][1]));

    value = Math.round(100 * value);

    distribution.push([cases[i], value]);
  }

  return distribution;
  };

// ================================================================
function missingHighcards(cardsCnt, highcardsCnt) {

  if (isNaN(cardsCnt)) throw "error: cards count must be numeric.";
  if (!(cardsCnt % 1 === 0)) throw "error: cards count must be an integer.";
  if (!(cardsCnt >= 0)) throw "error: cards count must be 0 or larger.";
  if (!(cardsCnt <= 13)) throw "error: cards count must be 13 or smaller.";

  if (isNaN(highcardsCnt)) throw "error: high cards count must be numeric.";
  if (!(highcardsCnt % 1 === 0)) throw "error: high cards count must be an integer.";
  if (!(highcardsCnt >= 0)) throw "error: high cards count must be 0 or larger.";
  if (!(highcardsCnt <= 13)) throw "error: high cards count must be 13 or smaller.";

  if (!(cardsCnt >= highcardsCnt)) throw "error: high cards count can not be larger than cards count.";

  let distribution = [];
  let cases = [];

  for (var i = 0; i <= cardsCnt; i++) {
    for (var j = 0; j <= highcardsCnt; j++) {
      if (i >= j && cardsCnt - i >= highcardsCnt - j) {
        cases.push([[i, cardsCnt - i], [j, highcardsCnt - j]]);
      }
    }
  }

  for (var i = 0; i < cases.length; i++) {
    let value = 0;
    const distCards = missingCards(cases[i][0][0] + cases[i][0][1]);
    const distHighcards = missingCards(cases[i][1][0] + cases[i][1][1], cases[i][0][0], cases[i][0][1]);
    let probCards = 0;
    let probHighcards = 0;

    for (var j = 0; j < distCards.length; j++) {
      if (distCards[j][0][0] === cases[i][0][0] && distCards[j][0][1] === cases[i][0][1]) {
        probCards += distCards[j][1];
      }
    }

    for (var k = 0; k < distHighcards.length; k++) {
      if (distHighcards[k][0][0] === cases[i][1][0] && distHighcards[k][0][1] === cases[i][1][1]) {
        probHighcards += distHighcards[k][1];
      }

    }
    value = Math.round(100 * probCards * probHighcards);
    distribution.push([cases[i][0], cases[i][1], value]);
  }

  return distribution;
  };


// ================================================================
// console log

// ================================================================
module.exports = {
  missingCards,
  missingHighcards,
}