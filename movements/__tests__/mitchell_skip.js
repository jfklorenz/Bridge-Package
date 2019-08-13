const expect = require("expect.js");
const { testPlayedNoBoardgroupTwice, testPlayedNoPairTwice, testPlayedNoRoundTwice } = require("../features/tests.js");
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
    expect(mitchell_skip).withArgs(8, 24).to.throwException();
    expect(mitchell_skip).withArgs(11, 24).to.throwException();
    expect(mitchell_skip).withArgs(12, 24).to.throwException();
    expect(mitchell_skip).withArgs(15, 24).to.throwException();
    expect(mitchell_skip).withArgs(16, 24).to.throwException();
    expect(mitchell_skip).withArgs(20, 24).to.throwException();
    expect(mitchell_skip).withArgs(23, 24).to.throwException();
    expect(mitchell_skip).withArgs(24, 24).to.throwException();
    expect(mitchell_skip).withArgs(28, 24).to.throwException();
    expect(mitchell_skip).withArgs(32, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - No pair played a pair, boardgroup or round more than once", function() {
    let inPairCnt = 18;
    let inBoardCnt = 27;
    let movement = mitchell_skip(inPairCnt, inBoardCnt);
    expect(testPlayedNoBoardgroupTwice(movement,inPairCnt)).to.eql(true);
    expect(testPlayedNoPairTwice(movement,inPairCnt)).to.eql(true);
    expect(testPlayedNoRoundTwice(movement,inPairCnt)).to.eql(true);
  });

});
