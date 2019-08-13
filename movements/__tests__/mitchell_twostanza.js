const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { mitchell_twostanza } = require("../features/mitchell_twostanza.js");

// ================================================================
describe('test/mitchell_twostanza - Two-Stanza Mitchell Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    expect(mitchell_twostanza).withArgs(0, 6).to.throwException();
    expect(mitchell_twostanza).withArgs(-1, 6).to.throwException();
    expect(mitchell_twostanza).withArgs(1.25, 6).to.throwException();
    expect(mitchell_twostanza).withArgs(300, 6).to.throwException();
    expect(mitchell_twostanza).withArgs(301, 6).to.throwException();
    expect(mitchell_twostanza).withArgs("a", 6).to.throwException();
    expect(mitchell_twostanza).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(mitchell_twostanza).withArgs(20,0).to.throwException();
    expect(mitchell_twostanza).withArgs(20,-1).to.throwException();
    expect(mitchell_twostanza).withArgs(20,1.25).to.throwException();
    expect(mitchell_twostanza).withArgs(20,100).to.throwException();
    expect(mitchell_twostanza).withArgs(20,101).to.throwException();
    expect(mitchell_twostanza).withArgs(20,"a").to.throwException();
    expect(mitchell_twostanza).withArgs(20,"/").to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // tableCnt not even
    expect(mitchell_twostanza).withArgs(10, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(14, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(18, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(22, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(26, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(30, 24).to.throwException();

    // tableCnt a mupltiple of 4, but not 8 or 12
    expect(mitchell_twostanza).withArgs(8, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(32, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(40, 24).to.throwException();
    expect(mitchell_twostanza).withArgs(48, 24).to.throwException();
  });

  it("0.4. Error - breakNr invalid", function() {
    // breakNr not Integer
    expect(mitchell_twostanza).withArgs(24, 24, 5.33).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, 4.25).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, "a").to.throwException();
    expect(mitchell_twostanza).withArgs(16, 24, "Z").to.throwException();
    expect(mitchell_twostanza).withArgs(16, 24, "/").to.throwException();

    // breakNr < 0
    expect(mitchell_twostanza).withArgs(24, 24, -1).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, -10).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, -24).to.throwException();

    // breakNr > tableCnt
    expect(mitchell_twostanza).withArgs(16, 24, 9).to.throwException();
    expect(mitchell_twostanza).withArgs(16, 24, 16).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, 13).to.throwException();
    expect(mitchell_twostanza).withArgs(24, 24, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 24;
    let inBoardCnt = 24;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 16;
    let inBoardCnt = 24;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 12;
    let inBoardCnt = 24;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 20;
    let inBoardCnt = 20;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.5. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 16;
    let inBoardCnt = 32;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

// ================================================================
  it("2.0. Case - Wikipedia case", function() {
    let inPairCnt = 12;
    let inBoardCnt = 24;
    let movement = mitchell_twostanza(inPairCnt, inBoardCnt);

    for (var i = 0; i < movement.length; i++) {
      if (movement[i].tableNr === 0 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([8,9,10,11]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2,3]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([4,5,6,7]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([20,21,22,23]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([12,13,14,15]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([16,17,18,19]);
      }
    }
  });

});
