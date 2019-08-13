const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { mitchell } = require("../features/mitchell.js");

// ================================================================
describe('test/mitchell - Mitchell Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    // pairCnt not an Integer
    expect(mitchell).withArgs("a", 22).to.throwException();
    expect(mitchell).withArgs("/", 20).to.throwException();
    expect(mitchell).withArgs(1.25, 24).to.throwException();

    // pairCnt <= 0
    expect(mitchell).withArgs(0, 12).to.throwException();
    expect(mitchell).withArgs(-1, 6).to.throwException();
    expect(mitchell).withArgs(-14, 28).to.throwException();

    // pairCnt >= 300
    expect(mitchell).withArgs(300, 24).to.throwException();
    expect(mitchell).withArgs(301, 32).to.throwException();
    expect(mitchell).withArgs(999, 24).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    // boardCnt not an Integer
    expect(mitchell).withArgs(18,"a").to.throwException();
    expect(mitchell).withArgs(22,"/").to.throwException();
    expect(mitchell).withArgs(14,1.25).to.throwException();

    // boardCnt <= 0
    expect(mitchell).withArgs(26,0).to.throwException();
    expect(mitchell).withArgs(22,-1).to.throwException();
    expect(mitchell).withArgs(30,-24).to.throwException();

    // boardCnt >= 100
    expect(mitchell).withArgs(18,100).to.throwException();
    expect(mitchell).withArgs(22,101).to.throwException();
    expect(mitchell).withArgs(14,244).to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // Even tableCnt
    expect(mitchell).withArgs(8, 24).to.throwException();
    expect(mitchell).withArgs(11, 24).to.throwException();
    expect(mitchell).withArgs(12, 24).to.throwException();
    expect(mitchell).withArgs(15, 24).to.throwException();
    expect(mitchell).withArgs(16, 24).to.throwException();
    expect(mitchell).withArgs(20, 24).to.throwException();
    expect(mitchell).withArgs(23, 24).to.throwException();
    expect(mitchell).withArgs(24, 24).to.throwException();
    expect(mitchell).withArgs(28, 24).to.throwException();
    expect(mitchell).withArgs(32, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 22;
    let inBoardCnt = 22;
    let movement = mitchell(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 18;
    let inBoardCnt = 30;
    let movement = mitchell(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 10;
    let inBoardCnt = 20;
    let movement = mitchell(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 18;
    let inBoardCnt = 27;
    let movement = mitchell(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.5. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 14;
    let inBoardCnt = 28;
    let movement = mitchell(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

// ================================================================
  it("2.0. Case - Wikipedia case", function() {
    let inPairCnt = 10;
    let inBoardCnt = 20;
    let movement = mitchell(inPairCnt, inBoardCnt);

    for (var i = 0; i < movement.length; i++) {
      if (movement[i].tableNr === 0 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      }
    }
  });

});
