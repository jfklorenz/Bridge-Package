const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { mitchell_crisscross } = require("../features/mitchell_crisscross.js");

// ================================================================
describe('test/mitchell_crisscross - Crisscross Mitchell Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    expect(mitchell_crisscross).withArgs(0, 6).to.throwException();
    expect(mitchell_crisscross).withArgs(-1, 6).to.throwException();
    expect(mitchell_crisscross).withArgs(1.25, 6).to.throwException();
    expect(mitchell_crisscross).withArgs(300, 6).to.throwException();
    expect(mitchell_crisscross).withArgs(301, 6).to.throwException();
    expect(mitchell_crisscross).withArgs("a", 6).to.throwException();
    expect(mitchell_crisscross).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(mitchell_crisscross).withArgs(20,0).to.throwException();
    expect(mitchell_crisscross).withArgs(20,-1).to.throwException();
    expect(mitchell_crisscross).withArgs(20,1.25).to.throwException();
    expect(mitchell_crisscross).withArgs(20,100).to.throwException();
    expect(mitchell_crisscross).withArgs(20,101).to.throwException();
    expect(mitchell_crisscross).withArgs(20,"a").to.throwException();
    expect(mitchell_crisscross).withArgs(20,"/").to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // tableCnt not a multiple of 4
    expect(mitchell_crisscross).withArgs(10, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(12, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(13, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(14, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(18, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(20, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(21, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(22, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(26, 24).to.throwException();
    expect(mitchell_crisscross).withArgs(27, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 24;
    let inBoardCnt = 24;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 32;
    let inBoardCnt = 32;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 16;
    let inBoardCnt = 32;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 16;
    let inBoardCnt = 24;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

  it("1.5. Func - Each pair played each pair & boardgroup & round", function() {
    let inPairCnt = 8;
    let inBoardCnt = 20;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    expect(testPlayedEachBoardgroup(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachPair(movement,inPairCnt)).to.eql(true);
    expect(testPlayedEachRound(movement,inPairCnt)).to.eql(true);
  });

// ================================================================
  it("2.0. Case - Wikipedia case", function() {
    let inPairCnt = 16;
    let inBoardCnt = 24;
    let movement = mitchell_crisscross(inPairCnt, inBoardCnt);

    for (var i = 0; i < movement.length; i++) {
      if (movement[i].tableNr === 0 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 3 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 4 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      }else if (movement[i].tableNr === 5 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 5 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      }else if (movement[i].tableNr === 6 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      } else if (movement[i].tableNr === 6 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      }else if (movement[i].tableNr === 7 && movement[i].roundNr === 0) {
        expect(movement[i].ew).to.eql(107);
        expect(movement[i].boardGroup).to.eql(7);
        expect(movement[i].boards).to.eql([21,22,23]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 1) {
        expect(movement[i].ew).to.eql(100);
        expect(movement[i].boardGroup).to.eql(6);
        expect(movement[i].boards).to.eql([18,19,20]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 2) {
        expect(movement[i].ew).to.eql(105);
        expect(movement[i].boardGroup).to.eql(1);
        expect(movement[i].boards).to.eql([3,4,5]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 3) {
        expect(movement[i].ew).to.eql(102);
        expect(movement[i].boardGroup).to.eql(4);
        expect(movement[i].boards).to.eql([12,13,14]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 4) {
        expect(movement[i].ew).to.eql(103);
        expect(movement[i].boardGroup).to.eql(0);
        expect(movement[i].boards).to.eql([0,1,2]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 5) {
        expect(movement[i].ew).to.eql(104);
        expect(movement[i].boardGroup).to.eql(5);
        expect(movement[i].boards).to.eql([15,16,17]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 6) {
        expect(movement[i].ew).to.eql(101);
        expect(movement[i].boardGroup).to.eql(2);
        expect(movement[i].boards).to.eql([6,7,8]);
      } else if (movement[i].tableNr === 7 && movement[i].roundNr === 7) {
        expect(movement[i].ew).to.eql(106);
        expect(movement[i].boardGroup).to.eql(3);
        expect(movement[i].boards).to.eql([9,10,11]);
      }
    }

  });


});
