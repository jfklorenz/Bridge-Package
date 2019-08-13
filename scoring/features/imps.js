function scoreToImps(scoreDifference) {

  // Exceptions
  if (!(scoreDifference % 10 === 0)) throw "scoreDifference % 10 == 0!";
  if (!(scoreDifference < 10000)) throw "scoreDifference < 10000!";
  if (!(scoreDifference > -10000)) throw "scoreDifference > -10000";

  let imps = 0;
  let swapIMPs = false;

  // Positive / Negative
  if (scoreDifference < 0) {
    scoreDifference = -scoreDifference;
    swapIMPs = true;
  }

  // Cases
  switch (true) {
    case (scoreDifference < 20):
      imps = 0;
      break;
    case (scoreDifference <= 40):
      imps = 1;
      break;
    case (scoreDifference <= 80):
      imps = 2;
      break;
    case (scoreDifference <= 120):
      imps = 3;
      break;
    case (scoreDifference <= 160):
      imps = 4;
      break;
    case (scoreDifference <= 210):
      imps = 5;
      break;
    case (scoreDifference <= 260):
      imps = 6;
      break;
    case (scoreDifference <= 310):
      imps = 7;
      break;
    case (scoreDifference <= 360):
      imps = 8;
      break;
    case (scoreDifference <= 420):
      imps = 9;
      break;
    case (scoreDifference <= 490):
      imps = 10;
      break;
    case (scoreDifference <= 590):
      imps = 11;
      break;
    case (scoreDifference <= 740):
      imps = 12;
      break;
    case (scoreDifference <= 890):
      imps = 13;
      break;
    case (scoreDifference <= 1090):
      imps = 14;
      break;
    case (scoreDifference <= 1290):
      imps = 15;
      break;
    case (scoreDifference <= 1490):
      imps = 16;
      break;
    case (scoreDifference <= 1740):
      imps = 17;
      break;
    case (scoreDifference <= 1990):
      imps = 18;
      break;
    case (scoreDifference <= 2240):
      imps = 19;
      break;
    case (scoreDifference <= 2490):
      imps = 20;
      break;
    case (scoreDifference <= 2990):
      imps = 21;
      break;
    case (scoreDifference <= 3490):
      imps = 22;
      break;
    case (scoreDifference <= 3990):
      imps = 23;
      break;
    case (scoreDifference >= 4000):
      imps = 24;
      break;
    default:
      imps = 0;
      break;
  }

  // Positive / Negative
  if (swapIMPs) {imps = -imps};
  return imps;
};

// Export
module.exports = {
  scoreToImps
}
