const { binomial, factorial } = require("./helper.js");
// ================================================================
function hcpProbabilityRange(hcpMin, hcpMax) {

  if (isNaN(hcpMin)) throw "error: hcp minimum must be numeric.";
  if (!(hcpMin % 1 === 0)) throw "error: hcp minimum must be an integer.";
  if (!(hcpMin >= 0)) throw "error: hcp minimum must be larger than 0.";
  if (!(hcpMin <= 37)) throw "error: hcp minimum must be 37 or smaller.";

  if (isNaN(hcpMax)) throw "error: hcp maximum must be numeric.";
  if (!(hcpMax % 1 === 0)) throw "error: hcp maximum must be an integer.";
  if (!(hcpMax >= 0)) throw "error: hcp maximum must be larger than 0.";
  if (!(hcpMax <= 37)) throw "error: hcp maximum must be 37 or smaller.";

  let probability = 0;

  return probability;
}

// ================================================================
// console log

console.log(hcpProbabilityRange(-1,0));
console.log(hcpProbabilityRange(10,10));
console.log(hcpProbabilityRange(0,37));



// ================================================================
module.exports = {
  hcpProbabilityRange
}