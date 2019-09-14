// Imports
const {binomial, factorial, percentageRounded} = require("./math.js");

// ================================================================
// distribution
function distribution(dist, fix = false) {

  //if (typeof(dist) !== 'list') throw "1014: dist must be a list.";
  for (var i = 0; i < 4; i++) {
    if (!([...Array(14).keys()].includes(dist[i]))) throw "1014: Invalid Input";
  }
  if (!(dist[0] + dist[1] + dist[2] + dist[3] === 13)) throw "1014: Invalid amount of cards.";
  if (!(fix === true || fix === false)) throw "1014: fix must be boolean.";

  let handCnt = 0;
  handCnt = binomial(13, dist[0]) * binomial(13, dist[1]) * binomial(13, dist[2]) * binomial(13, dist[3]);

  if (!fix) {
    handCnt *= factorial(4);
    for (var y = 0; y <= 13; y++) {
      handCnt = handCnt / factorial(dist.filter(x => x==y).length);
    }
  }

  let probability = percentageRounded(handCnt / binomial(52, 13));
  return [handCnt, probability]
}

// ================================================================
// Exports
module.exports = {
  distribution
}