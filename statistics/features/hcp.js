const { binomial, factorial } = require("./helper.js");
// ================================================================
function hcpProbabilityRange(hcpMin = 0, hcpMax = hcpMin) {

  if (isNaN(hcpMin)) throw "error: hcp minimum must be numeric.";
  if (!(hcpMin % 1 === 0)) throw "error: hcp minimum must be an integer.";
  if (!(hcpMin >= 0)) throw "error: hcp minimum must be larger than 0.";
  if (!(hcpMin <= 37)) throw "error: hcp minimum must be 37 or smaller.";

  if (isNaN(hcpMax)) throw "error: hcp maximum must be numeric.";
  if (!(hcpMax % 1 === 0)) throw "error: hcp maximum must be an integer.";
  if (!(hcpMax >= 0)) throw "error: hcp maximum must be larger than 0.";
  if (!(hcpMax <= 37)) throw "error: hcp maximum must be 37 or smaller.";

  let distCnt = 0;

  for (var a = 0; a <= 4; a++) {
    for (var k = 0; k <= 4; k++) {
      for (var q = 0; q <= 4; q++) {
        for (var j = 0; j <= 4; j++) {
          if (a*4 + k*3 + q*2 + j*1 >= hcpMin && a*4 + k*3 + q*2 + j*1 <= hcpMax && a + k + q + j <= 13) {
            distCnt += binomial(4, a) * binomial(4, k) * binomial(4, q) * binomial(4, j) * binomial(36, 13 - a - k - q - j);
          }
        }
      }
    }
  }

  let probability = distCnt  / binomial(52, 13);

  return probability;
}

// ================================================================
// console log

// ================================================================
module.exports = {
  hcpProbabilityRange
}