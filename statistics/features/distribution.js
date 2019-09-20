// Imports
const {binomial, factorial, percentageRounded} = require("./math.js");

// ================================================================
// Distributions - Returns a list of all possible distributions
function distributions(fix = false) {
  if (!(typeof(fix) === 'boolean')) throw "1014: Input must be boolean.";
  let distributions = [];

  // All possible Distributions, fixed
  if (fix) {
    for (var c = 0; c <= 13; c++) {
      for (var d = 0; d <= 13 - c; d++) {
        for (var h = 0; h <= 13 - c - d; h++) {
          for (var s = 0; s <= 13 - c - d - h; s++) {
            if (c + d + h + s === 13) {
              distributions.push([c,d,h,s]);
            }
          }
        }
      } 
    }
  } else {
    // All possible Distributions, not fixed
    distributions = [
      [4,3,3,3], [4,4,3,2], [4,4,4,1],
      [5,3,3,2], [5,4,2,2], [5,4,3,1], [5,4,4,0], [5,5,2,1], [5,5,3,0],
      [6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0],
      [7,2,2,2], [7,3,2,1], [7,3,3,0], [7,4,1,1,], [7,4,2,0], [7,5,1,0], [7,6,0,0],
      [8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0],
      [9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0], 
      [10,1,1,1], [10,2,1,0], [10,3,0,0], 
      [11,1,1,0], [11,2,0,0], [12,1,0,0], [13,0,0,0]
    ]
  }
  return distributions;
}

// ================================================================
// Distribution / Probability
function distributionProbability(dist, fix = false) {

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

  return percentageRounded(handCnt / binomial(52, 13));
}

// ================================================================
// Distribution / HandCnt
function distributionHandcnt(dist, fix = false) {

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

  return handCnt;
}

// ================================================================
// Shortest Suit / Probability
function shortestSuitProbability(cardCnt) {
  if (!([...Array(4).keys()].includes(cardCnt))) throw "1014: Invalid Input";

  switch (cardCnt) {
    // 0 Cards / Void
    case (0):
      return 0.0512;
    // 1 Card / Single
    case (1):
      return 0.3055;
    // 2 Cards / Doubleton
    case (2):
      return 0.5380;
    // 3 Cards / Tripleton
    case (3):
      return 0.1054;
  }

  return;
}

// ================================================================
// Shortest Suit / Distributions
function shortestSuitDistributions(cardCnt) {
  if (!([...Array(4).keys()].includes(cardCnt))) throw "1014: Invalid Input";

  switch (cardCnt) {
    // 0 Cards / Void
    case (0):
      return [
        [13,0,0,0],
        [12,1,0,0],
        [11,2,0,0], [11,1,1,0],
        [10,3,0,0], [10,2,1,0], 
        [9,4,0,0], [9,3,1,0], [9,2,2,0],
        [8,5,0,0], [8,4,1,0], [8,3,2,0],
        [7,6,0,0], [7,5,1,0], [7,4,2,0], [7,3,3,0],
        [6,6,1,0], [6,5,2,0], [6,4,3,0],
        [5,5,3,0], [5,4,4,0]
      ];
    // 1 Card / Single
    case (1):
      return [
        [4,4,4,1], [5,4,3,1], [5,5,2,1], [6,3,3,1], [6,4,2,1], [6,5,1,1], 
        [7,3,2,1], [7,4,1,1], [8,2,2,1], [8,3,1,1], [9,2,1,1], [10,1,1,1]
      ];
    // 2 Cards / Doubleton
    case (2):
      return [
        [4,4,3,2], [5,3,3,2], [5,4,2,2], [6,3,2,2], [7,2,2,2]
      ];
    // 3 Cards / Tripleton
    case (3):
      return [[4,3,3,3]];
  }

  return;
}

// ================================================================
// Longest Suit / Probability
function longestSuitProbability(cardCnt) {
  if (!([...Array(14).keys()].slice(4).includes(cardCnt))) throw "1014: Invalid Input";

  switch (cardCnt) {
    // 4 Cards
    case (4):
      return 0.3508;
    // 5 Cards
    case (5):
      return 0.4434;
    // 6 Cards
    case (6):
      return 0.1655;
    // 7 Cards
    case (7):
      return 0.0353;
    // 8 Cards
    case (8):
      return 0.0047;
    // 9 Cards
    case (9):
      return 0.00037;
    // 10 Cards
    case (10):
      return 0.000017;
    // 11 Cards
    case (11):
      return 0.0000003;
    // 12 Cards
    case (12):
        return 0.000000003;
    // 13 Cards
    case (13):
      return 0.000000000006; 
  }

  return;
}

// ================================================================
// Longest Suit / Distributions
function longestSuitDistributions(cardCnt) {
  if (!([...Array(14).keys()].slice(4).includes(cardCnt))) throw "1014: Invalid Input";

  switch (cardCnt) {
    // 4 Cards
    case (4):
      return [[4,3,3,3], [4,4,3,2], [4,4,4,1]];
    // 5 Cards
    case (5):
      return [[5,3,3,2], [5,4,2,2], [5,4,3,1], [5,5,2,1], [5,4,4,0], [5,5,3,0]];
    // 6 Cards
    case (6):
      return [[6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0]];
    // 7 Cards
    case (7):
      return [[7,2,2,2], [7,3,2,1], [7,3,3,0], [7,4,1,1], [7,4,2,0], [7,5,1,0], [7,6,0,0]];
    // 8 Cards
    case (8):
      return [[8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0]];
    // 9 Cards
    case (9):
      return [[9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0]];
    // 10 Cards
    case (10):
      return [[10,1,1,1], [10,2,1,0], [10,3,0,0]];
    // 11 Cards
    case (11):
      return [[11,1,1,0], [11,2,0,0]];
    // 12 Cards
    case (12):
        return [[12,1,0,0]];
    // 13 Cards
    case (13):
      return [[13,0,0,0]];
  }

  return;
}

// ================================================================
// Hand Type / Probability
function handtypeProbability(handtype) {
  // handtype / 0: balanced, 1: 1-suiter, 2: 2-suiter, 3: 3-suiter

  switch (handtype) {
    // Balanced
    case (0):
      return 47.61;
    // 1-Suiter
    case (1):
      return 19.15;
    // 2-Suiter
    case (2):
      return 29.02;
    // 3-Suiter
    case (3):
      return 4.23;
  }

  return;
}

// ================================================================
// Hand Type / Distributions
function handtypeDistributions(handtype) {
  // handtype / 0: balanced, 1: 1-suiter, 2: 2-suiter, 3: 3-suiter

  switch (handtype) {
    // Balanced
    case (0):
      return [[4,3,3,3], [4,4,3,2], [5,3,3,2]];
    // 1-Suiter
    case (1):
      return [[6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], 
              [7,2,2,2], [7,3,2,1], [7,3,3,0], [7,4,1,1], [7,4,2,0], [7,5,1,0], 
              [8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0], 
              [9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0], [10,1,1,1], [10,2,1,0], [10,3,0,0], 
              [11,1,1,0], [11,2,0,0], [12,1,0,0], [13,0,0,0]];
    // 2-Suiter
    case (2):
      return [[5,4,2,2], [5,4,3,1], [5,5,2,1], [5,5,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0], [7,6,0,0]];
    // 3-Suiter
    case (3):
      return [[4,4,4,1], [5,4,4,0]];
  }

  return;

}



// ================================================================
// Exports
module.exports = {
  distributions,
  distributionProbability,
  distributionHandcnt,
  shortestSuitDistributions,
  shortestSuitProbability,
  longestSuitDistributions,
  longestSuitProbability,
  handtypeDistributions,
  handtypeProbability
}