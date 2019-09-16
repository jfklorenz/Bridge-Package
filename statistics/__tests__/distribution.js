const expect = require("expect.js");
const { distributions, distributionProbability, distributionHandcnt } = require("../features/distribution.js");

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
});
