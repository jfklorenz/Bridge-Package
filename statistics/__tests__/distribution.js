const expect = require("expect.js");
const { distributions, 
        distributionProbability, distributionHandcnt,
        longestSuitDistributions, longestSuitProbability,
        shortestSuitDistributions, shortestSuitProbability } = require("../features/distribution.js");

// ================================================================
describe('test/distribution.js - Distribution Probability', function() {

  // ================================================================
  // Distribution
  it("1.0. Distributions / Input must be 'boolean'", function() {
    // Exceptions
    expect(distributions).withArgs("a").to.throwException();
    expect(distributions).withArgs("Z").to.throwException();
    expect(distributions).withArgs(-1).to.throwException();
    expect(distributions).withArgs(1.234).to.throwException();
    expect(distributions).withArgs(38).to.throwException();
    expect(distributions).withArgs(0).to.throwException();
  });

  // ----------------------------------------------------------------
  it("1.1. Distributions / Variable - Correct cases included", function() {
    let dists = distributions(false);
    
    const distributionsVariable = [
      [4,3,3,3], [4,4,3,2], [4,4,4,1],
      [5,3,3,2], [5,4,2,2], [5,4,3,1], [5,4,4,0], [5,5,2,1], [5,5,3,0],
      [6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0],
      [7,2,2,2], [7,3,2,1], [7,3,3,0], [7,4,1,1,], [7,4,2,0], [7,5,1,0], [7,6,0,0],
      [8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0],
      [9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0], 
      [10,1,1,1], [10,2,1,0], [10,3,0,0], 
      [11,1,1,0], [11,2,0,0], [12,1,0,0], [13,0,0,0]
    ];

    // All cases included
    expect(dists).to.eql(distributionsVariable);
    // 39 cases
    expect(dists.length).to.eql(39);
  });

  // ----------------------------------------------------------------
  it("1.2. Distributions / Fix - Correct cases included", function() {
    let dists = distributions(true);

    const distributionsFix = [];
    for (var c = 0; c <= 13; c++) {
      for (var d = 0; d <= 13 - c; d++) {
        for (var h = 0; h <= 13 - c - d; h++) {
          for (var s = 0; s <= 13 - c - d - h; s++) {
            if (c + d + h + s === 13) {
              distributionsFix.push([c,d,h,s]);
            }
          }
        }
      } 
    }

    // All cases included
    expect(dists).to.eql(distributionsFix);
    // 560 cases
    expect(dists.length).to.eql(560);
  });

// ================================================================
// Distribution Probability

// ================================================================
// Distribution HandCnt

  // ================================================================
  // Shortest Suit / Distributions
  it("4.0. Shortest Suit / Distributions - Invalid input", function() {
    expect(shortestSuitDistributions).withArgs("a").to.throwException();
    expect(shortestSuitDistributions).withArgs("Z").to.throwException();
    expect(shortestSuitDistributions).withArgs(-1).to.throwException();
    expect(shortestSuitDistributions).withArgs(4).to.throwException();
    expect(shortestSuitDistributions).withArgs(0.1234).to.throwException();
    expect(shortestSuitDistributions).withArgs(-22).to.throwException();
  });

  // ----------------------------------------------------------------
  it("4.1. Shortest Suit / Distributions - Cases", function() {
    expect(shortestSuitDistributions(0)).to.eql([
      [13,0,0,0],
      [12,1,0,0],
      [11,2,0,0], [11,1,1,0],
      [10,3,0,0], [10,2,1,0], 
      [9,4,0,0], [9,3,1,0], [9,2,2,0],
      [8,5,0,0], [8,4,1,0], [8,3,2,0],
      [7,6,0,0], [7,5,1,0], [7,4,2,0], [7,3,3,0],
      [6,6,1,0], [6,5,2,0], [6,4,3,0],
      [5,5,3,0], [5,4,4,0]
    ]);
    expect(shortestSuitDistributions(1)).to.eql([
      [4,4,4,1], [5,4,3,1], [5,5,2,1], [6,3,3,1], [6,4,2,1], [6,5,1,1], 
      [7,3,2,1], [7,4,1,1], [8,2,2,1], [8,3,1,1], [9,2,1,1], [10,1,1,1]
    ]);
    expect(shortestSuitDistributions(2)).to.eql([
      [4,4,3,2], [5,3,3,2], [5,4,2,2], [6,3,2,2], [7,2,2,2]
    ]);
    expect(shortestSuitDistributions(3)).to.eql([[4,3,3,3]]);
  });

  // ================================================================
  // Shortest Suit / Probability
  it("5.0. Shortest Suit / Distributions - Invalid input", function() {
    expect(shortestSuitProbability).withArgs("a").to.throwException();
    expect(shortestSuitProbability).withArgs("Z").to.throwException();
    expect(shortestSuitProbability).withArgs(-1).to.throwException();
    expect(shortestSuitProbability).withArgs(4).to.throwException();
    expect(shortestSuitProbability).withArgs(0.1234).to.throwException();
    expect(shortestSuitProbability).withArgs(17.2).to.throwException();
  });

  // ----------------------------------------------------------------
  it("5.1. Shortest Suit / Probability - Cases", function() {
    expect(shortestSuitProbability(0)).to.eql(0.0512);
    expect(shortestSuitProbability(1)).to.eql(0.3055);
    expect(shortestSuitProbability(2)).to.eql(0.5380);
    expect(shortestSuitProbability(3)).to.eql(0.1054);
  });

  // ================================================================
  // Longest Suit / Distributions
  it("6.0. Longest Suit / Distributions - Invalid input", function() {
    expect(longestSuitDistributions).withArgs("a").to.throwException();
    expect(longestSuitDistributions).withArgs("Z").to.throwException();
    expect(longestSuitDistributions).withArgs(-1).to.throwException();
    expect(longestSuitDistributions).withArgs(3).to.throwException();
    expect(longestSuitDistributions).withArgs(0.1234).to.throwException();
    expect(longestSuitDistributions).withArgs(14).to.throwException();
  });

  // ----------------------------------------------------------------
  it("6.1. Longest Suit / Distributions - Cases", function() {
    expect(longestSuitDistributions(4)).to.eql([[4,3,3,3], [4,4,3,2], [4,4,4,1]]);
    expect(longestSuitDistributions(5)).to.eql([[5,3,3,2], [5,4,2,2], [5,4,3,1], [5,5,2,1], [5,4,4,0], [5,5,3,0]]);
    expect(longestSuitDistributions(6)).to.eql([[6,3,2,2], [6,3,3,1], [6,4,2,1], [6,4,3,0], [6,5,1,1], [6,5,2,0], [6,6,1,0]]);
    expect(longestSuitDistributions(7)).to.eql([[7,2,2,2, 7,3,2,1, 7,3,3,0, 7,4,1,1, 7,4,2,0, 7,5,1,0, 7,6,0,0]]);
    expect(longestSuitDistributions(8)).to.eql([[8,2,2,1], [8,3,1,1], [8,3,2,0], [8,4,1,0], [8,5,0,0]]);
    expect(longestSuitDistributions(9)).to.eql([[9,2,1,1], [9,2,2,0], [9,3,1,0], [9,4,0,0]]);
    expect(longestSuitDistributions(10)).to.eql([[10,1,1,1], [10,2,1,0], [10,3,0,0]]);
    expect(longestSuitDistributions(11)).to.eql([[11,1,1,0], [11,2,0,0]]);
    expect(longestSuitDistributions(12)).to.eql([[12,1,0,0]]);
    expect(longestSuitDistributions(13)).to.eql([[13,0,0,0]]);
  });

  // ================================================================
  // Longest Suit / Probability
  it("7.0. Longest Suit / Probability - Invalid input", function() {
    expect(longestSuitProbability).withArgs("a").to.throwException();
    expect(longestSuitProbability).withArgs("Z").to.throwException();
    expect(longestSuitProbability).withArgs(-1).to.throwException();
    expect(longestSuitProbability).withArgs(3).to.throwException();
    expect(longestSuitProbability).withArgs(0.1234).to.throwException();
    expect(longestSuitProbability).withArgs(14).to.throwException();
  });

  // ----------------------------------------------------------------
  it("7.1. Longest Suit / Probability - Cases", function() {
    expect(longestSuitProbability(4)).to.eql(0.3508);
    expect(longestSuitProbability(5)).to.eql(0.4434);
    expect(longestSuitProbability(6)).to.eql(0.1655);
    expect(longestSuitProbability(7)).to.eql(0.0353);
    expect(longestSuitProbability(8)).to.eql(0.0047);
    expect(longestSuitProbability(9)).to.eql(0.00037);
    expect(longestSuitProbability(10)).to.eql(0.000017);
    expect(longestSuitProbability(11)).to.eql(0.0000003);
    expect(longestSuitProbability(12)).to.eql(0.000000003);
    expect(longestSuitProbability(13)).to.eql(0.000000000006);
  });


// ================================================================
// Distribution HandCnt

// ================================================================
// Distribution HandCnt


});
