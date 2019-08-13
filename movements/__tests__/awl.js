const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { awl } = require("../features/awl.js");

// ================================================================
describe('test/awl - American Whist League Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    expect(awl).withArgs(0, 6).to.throwException();
    expect(awl).withArgs(-1, 6).to.throwException();
    expect(awl).withArgs(1.25, 6).to.throwException();
    expect(awl).withArgs(300, 6).to.throwException();
    expect(awl).withArgs(301, 6).to.throwException();
    expect(awl).withArgs("a", 6).to.throwException();
    expect(awl).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(awl).withArgs(20,0).to.throwException();
    expect(awl).withArgs(20,-1).to.throwException();
    expect(awl).withArgs(20,1.25).to.throwException();
    expect(awl).withArgs(20,100).to.throwException();
    expect(awl).withArgs(20,101).to.throwException();
    expect(awl).withArgs(20,"a").to.throwException();
    expect(awl).withArgs(20,"/").to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // Even tableCnt
    expect(awl).withArgs(8, 24).to.throwException();
    expect(awl).withArgs(11, 24).to.throwException();
    expect(awl).withArgs(12, 24).to.throwException();
    expect(awl).withArgs(15, 24).to.throwException();
    expect(awl).withArgs(16, 24).to.throwException();
    expect(awl).withArgs(20, 24).to.throwException();
    expect(awl).withArgs(23, 24).to.throwException();
    expect(awl).withArgs(24, 24).to.throwException();
    expect(awl).withArgs(28, 24).to.throwException();
    expect(awl).withArgs(32, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 22;
    let inBoardCnt = 22;
    let movement = awl(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 18;
    let inBoardCnt = 30;
    let movement = awl(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 10;
    let inBoardCnt = 20;
    let movement = awl(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 18;
    let inBoardCnt = 27;
    let movement = awl(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.5. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 14;
    let inBoardCnt = 28;
    let movement = awl(inPairCnt, inBoardCnt);
    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

// ================================================================
  it("2.0. Case - Wikipedia case", function() {
    let inPairCnt = 10;
    let inBoardCnt = 20;
    let movement = awl(inPairCnt, inBoardCnt);

    for (var i = 0; i < movement.length; i++) {
      if (movement[i].tableNr === 0 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      }
    }

  });

});
