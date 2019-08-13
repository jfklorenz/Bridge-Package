const expect = require("expect.js");
const { scoresToMatchpoints, matchpointsToPercentages, matchpointsReverse, matchpointsLeaderboard } = require("../features/matchpoints.js");

// ================================================================
describe('test/scoresToMatchpoints - Scores to matchpoints', function() {

  it("1.1. Func - Empty list", function() {
    expect(scoresToMatchpoints([])).to.eql([]);
  });

  it("1.2. Func - Single item in list", function() {
    expect(scoresToMatchpoints([400])).to.eql([0]);
    expect(scoresToMatchpoints([-400])).to.eql([0]);
    expect(scoresToMatchpoints([0])).to.eql([0]);
  });

// -------------------------------------------------------------------
  it("2.1. Case - [-90,170,-90,-100,-90,150]", function() {
    expect(scoresToMatchpoints([-90,170,-90,-100,-90,150])).to.eql([4,10,4,0,4,8]);
  });

  it("2.2. Case - [150, 120, 120, 430, 400, 400]", function() {
    expect(scoresToMatchpoints([150, 120, 120, 430, 400, 400])).to.eql([4,1,1,10,7,7]);
  });

  it("2.3. Case - [170, 170, 170, 170, 150, 150]", function() {
    expect(scoresToMatchpoints([170, 170, 170, 170, 150, 150])).to.eql([7,7,7,7,1,1]);
  });

  it("2.4. Case - [200, -170, -450, -150, -170, -170, 50, -170, -100]", function() {
    expect(scoresToMatchpoints([200, -170, -450, -150, -170, -170, 50, -170, -100])).to.eql([16,5,0,10,5,5,14,5,12]);
  });

  it("2.5. Case - [-110, -170, -120, -200, 200, 0, 0, -300, 100]", function() {
    expect(scoresToMatchpoints([-110, -170, -120, -200, 200, 0, 0, -300, 100])).to.eql([8,4,6,2,16,11,11,0,14]);
  });

});

// ================================================================
describe('test/matchpointsToPercentages -Matchpoints to percentages', function() {

  it("1.1. Func - Empty list", function() {
    expect(scoresToMatchpoints([])).to.eql([]);
  });

  it("1.2. Func - Single item in list", function() {
    expect(matchpointsToPercentages(scoresToMatchpoints([400]))).to.eql([50]);
    expect(matchpointsToPercentages(scoresToMatchpoints([-400]))).to.eql([50]);
    expect(matchpointsToPercentages(scoresToMatchpoints([0]))).to.eql([50]);
  });

// -------------------------------------------------------------------
  it("2.1. Case - [0,2,4]", function() {
    expect(matchpointsToPercentages([0,2,4])).to.eql([0,50,100]);
  });

  it("2.2. Case - [1,1,4,7,7]", function() {
    expect(matchpointsToPercentages([1,1,4,7,7])).to.eql([12.5, 12.5, 50, 87.5, 87.5]);
  });

  it("2.3. Case - [7,7,7,7,1,1]", function() {
    expect(matchpointsToPercentages([7,7,7,7,1,1])).to.eql([70,70,70,70,10,10]);
  });

});

// ================================================================
describe('test/matchpointsReverse - Matchpoints reversed for EW', function() {

  it("1.1. Func - Empty list", function() {
    expect(matchpointsReverse(scoresToMatchpoints([]))).to.eql([]);
  });

  it("1.2. Func - Single item in list", function() {
    expect(matchpointsReverse(scoresToMatchpoints([400]))).to.eql([0]);
    expect(matchpointsReverse(scoresToMatchpoints([-400]))).to.eql([0]);
    expect(matchpointsReverse(scoresToMatchpoints([0]))).to.eql([0]);
  });

// -------------------------------------------------------------------
  it("2.1. Case - [-90,170,-90,-100,-90,150]", function() {
    expect(matchpointsReverse(scoresToMatchpoints([-90,170,-90,-100,-90,150]))).to.eql([6,0,6,10,6,2]);
  });

  it("2.2. Case - [150, 120, 120, 430, 400, 400]", function() {
    expect(matchpointsReverse(scoresToMatchpoints([150, 120, 120, 430, 400, 400]))).to.eql([6,9,9,0,3,3]);
  });

  it("2.3. Case - [170, 170, 170, 170, 150, 150]", function() {
    expect(matchpointsReverse(scoresToMatchpoints([170, 170, 170, 170, 150, 150]))).to.eql([3,3,3,3,9,9]);
  });

  it("2.4. Case - [200, -170, -450, -150, -170, -170, 50, -170, -100]", function() {
    expect(matchpointsReverse(scoresToMatchpoints([200, -170, -450, -150, -170, -170, 50, -170, -100]))).to.eql([0,11,16,6,11,11,2,11,4]);
  });

  it("2.5. Case - [-110, -170, -120, -200, 200, 0, 0, -300, 100]", function() {
    expect(matchpointsReverse(scoresToMatchpoints([-110, -170, -120, -200, 200, 0, 0, -300, 100]))).to.eql([8,12,10,14,0,5,5,16,2]);
  });

  it("2.6. Case - [0,2,4,6,8]", function() {
    expect(matchpointsReverse([0,2,4,6,8])).to.eql([8,6,4,2,0]);
  });

  it("2.7. Case - [1,1,4,7,7]", function() {
    expect(matchpointsReverse([1,1,4,7,7])).to.eql([7,7,4,1,1]);
  });

// ================================================================
});
