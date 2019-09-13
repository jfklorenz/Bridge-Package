// Imports
const {binomial, percentageRounded} = require("./math.js");

// ================================================================
// hcpRange
function hcpRange(hcpMin, hcpMax = hcpMin) {
  
  if (!([...Array(38).keys()].includes(hcpMin))) throw "1014: hcpMin invalid.";
  if (!([...Array(38).keys()].includes(hcpMax))) throw "1014: hcpMax invalid.";
  if (hcpMin > hcpMax) throw "1014: hcpMin can not be larger than hcpMax.";

  let handCnt = 0;
  for (var ace = 0; ace <= 4; ace ++) {
    for (var king = 0; king <= 4; king ++) {
      for (var queen = 0; queen <= 4; queen ++) {
        for (var jack = 0; jack <= Math.min(4, 13 - ace - king - queen); jack ++) {
          if (ace * 4 + king * 3 + queen * 2 + jack * 1 <= hcpMax && hcpMin <= ace * 4 + king * 3 + queen * 2 + jack * 1) {  
            handCnt += binomial(4, ace) * binomial(4, king) * binomial(4, queen) * binomial(4, jack) * binomial(36, 13 - ace - king - queen - jack);
          }
        }
      }
    }
  }
  let probability =  percentageRounded(handCnt / binomial(52,13));
  return [handCnt, probability];
};

// ================================================================
// Exports
module.exports = {
  hcpRange
}