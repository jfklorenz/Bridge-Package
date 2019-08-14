const { binomial, factorial } = require("./helper.js");

// ================================================================
function distributionAny(clubsCnt, diamondsCnt, heartsCnt, spadesCnt) {

  if (isNaN(clubsCnt)) throw "error: length of club suit must be numeric.";
  if (!(clubsCnt <= 13 && clubsCnt >= 0)) throw "error: length of club suit must be within range."
  if (isNaN(diamondsCnt)) throw "error: length of diamond suit must be numeric.";
  if (!(diamondsCnt <= 13 && diamondsCnt >= 0)) throw "error: diamond of club suit must be within range."
  if (isNaN(heartsCnt)) throw "error: length of heart suit must be numeric.";
  if (!(heartsCnt <= 13 && heartsCnt >= 0)) throw "error: length of heart suit must be within range."
  if (isNaN(spadesCnt)) throw "error: length of spade suit must be numeric.";
  if (!(spadesCnt <= 13 && spadesCnt >= 0)) throw "error: length of spade suit must be within range."
  if(!(clubsCnt + diamondsCnt + heartsCnt + spadesCnt == 13)) throw "error: not 13 cards";

  if (clubsCnt - diamondsCnt == 0 || clubsCnt - heartsCnt == 0 || clubsCnt - spadesCnt == 0) {
    var a1 = 0
  }
  else {
    var a1 = 1
  }
  if (diamondsCnt - heartsCnt == 0 || diamondsCnt - spadesCnt == 0) {
    var b1 = 0
  }
  else {
    var b1 = 1
  }
  if (heartsCnt - spadesCnt == 0) {
    var c1 = 0
  }
  else {
    var c1 = 1
  }

  var r = 1 + a1 + b1 + c1;

  return Math.round(10000*binomial(13,clubsCnt)*binomial(13,diamondsCnt)*binomial(13,heartsCnt)*binomial(13,spadesCnt)*(factorial(4) / factorial(5 - r))/635013559600)/100;
};

// ================================================================
function distributionFix(clubsCnt, diamondsCnt, heartsCnt, spadesCnt) {

  if (isNaN(clubsCnt)) throw "error: length of club suit must be numeric.";
  if (!(clubsCnt <= 13 && clubsCnt >= 0)) throw "error: length of club suit must be within range."
  if (isNaN(diamondsCnt)) throw "error: length of diamond suit must be numeric.";
  if (!(diamondsCnt <= 13 && diamondsCnt >= 0)) throw "error: diamond of club suit must be within range."
  if (isNaN(heartsCnt)) throw "error: length of heart suit must be numeric.";
  if (!(heartsCnt <= 13 && heartsCnt >= 0)) throw "error: length of heart suit must be within range."
  if (isNaN(spadesCnt)) throw "error: length of spade suit must be numeric.";
  if (!(spadesCnt <= 13 && spadesCnt >= 0)) throw "error: length of spade suit must be within range."
  if(!(clubsCnt + diamondsCnt + heartsCnt + spadesCnt == 13)) throw "error: not 13 cards";

  if (clubsCnt - diamondsCnt == 0 || clubsCnt - heartsCnt == 0 || clubsCnt - spadesCnt == 0) {
    var a1 = 0
  }
  else {
    var a1 = 1
  }
  if (diamondsCnt - heartsCnt == 0 || diamondsCnt - spadesCnt == 0) {
    var b1 = 0
  }
  else {
    var b1 = 1
  }
  if (heartsCnt - spadesCnt == 0) {
    var c1 = 0
  }
  else {
    var c1 = 1
  }

  var r = 1 + a1 + b1 + c1;

  return Math.round(10000*binomial(13,clubsCnt)*binomial(13,diamondsCnt)*binomial(13,heartsCnt)*binomial(13,spadesCnt)/635013559600)/100;
};

// ================================================================
// console log

// ================================================================
module.exports = {
  distributionAny,
  distributionFix
}