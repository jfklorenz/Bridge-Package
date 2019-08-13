const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { mitchell_skip } = require("../features/mitchell_skip.js");

// ================================================================
describe('test/mitchell_skip - Skip Mitchell Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    expect(mitchell_skip).withArgs(0, 6).to.throwException();
    expect(mitchell_skip).withArgs(-1, 6).to.throwException();
    expect(mitchell_skip).withArgs(1.25, 6).to.throwException();
    expect(mitchell_skip).withArgs(300, 6).to.throwException();
    expect(mitchell_skip).withArgs(301, 6).to.throwException();
    expect(mitchell_skip).withArgs("a", 6).to.throwException();
    expect(mitchell_skip).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(mitchell_skip).withArgs(20,0).to.throwException();
    expect(mitchell_skip).withArgs(20,-1).to.throwException();
    expect(mitchell_skip).withArgs(20,1.25).to.throwException();
    expect(mitchell_skip).withArgs(20,100).to.throwException();
    expect(mitchell_skip).withArgs(20,101).to.throwException();
    expect(mitchell_skip).withArgs(20,"a").to.throwException();
    expect(mitchell_skip).withArgs(20,"/").to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // Even tableCnt
    expect(mitchell_skip).withArgs(10, 27).to.throwException();
    expect(mitchell_skip).withArgs(13, 27).to.throwException();
    expect(mitchell_skip).withArgs(14, 27).to.throwException();
    expect(mitchell_skip).withArgs(18, 27).to.throwException();
    expect(mitchell_skip).withArgs(22, 22).to.throwException();

    // tableCnt % 4 != 0;
    expect(mitchell_skip).withArgs(8, 24).to.throwException();
    expect(mitchell_skip).withArgs(15, 24).to.throwException();
    expect(mitchell_skip).withArgs(16, 24).to.throwException();
    expect(mitchell_skip).withArgs(23, 24).to.throwException();
    expect(mitchell_skip).withArgs(24, 24).to.throwException();
    expect(mitchell_skip).withArgs(31, 24).to.throwException();
    expect(mitchell_skip).withArgs(32, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 18;
    let inBoardCnt = 27;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 26;
    let inBoardCnt = 26;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 14;
    let inBoardCnt = 28;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 22;
    let inBoardCnt = 22;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.5. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 10;
    let inBoardCnt = 20;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

// ================================================================
});
