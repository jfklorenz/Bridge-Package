const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair, testPlayedEachRound } = require("../features/tests.js");
const { mitchell_extendedhesitation } = require("../features/mitchell_extendedhesitation.js");

// ================================================================
describe('test/mitchell_extendedhesitation - Extended Hesitation Mitchell Movement', function() {

  it("0.1. Error - boardCnt invalid", function() {
    // boardCnt not an Integer
    expect(mitchell_extendedhesitation).withArgs("a").to.throwException();
    expect(mitchell_extendedhesitation).withArgs("/").to.throwException();
    expect(mitchell_extendedhesitation).withArgs(1.25).to.throwException();

    // boardCnt <= 0
    expect(mitchell_extendedhesitation).withArgs(0).to.throwException();
    expect(mitchell_extendedhesitation).withArgs(-1).to.throwException();
    expect(mitchell_extendedhesitation).withArgs(-24).to.throwException();

    // boardCnt >= 100
    expect(mitchell_extendedhesitation).withArgs(100).to.throwException();
    expect(mitchell_extendedhesitation).withArgs(101).to.throwException();
    expect(mitchell_extendedhesitation).withArgs(244).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & boardgroup & round", function() {

  });

// ================================================================
  it("2.0. Case - Wikipedia case", function() {
    let inBoardCnt = 15;
    let movement = mitchell_extendedhesitation(inBoardCnt);

    for (var i = 0; i < movement.length; i++) {
      if (movement[i].tableNr === 0 && movement[i].roundNr === 0) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(3);
        expect(movement[i].boardGroup).to.eql(0);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 1) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(2);
        expect(movement[i].boardGroup).to.eql(1);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 2) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(5);
        expect(movement[i].boardGroup).to.eql(2);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 3) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(4);
        expect(movement[i].boardGroup).to.eql(3);
      } else if (movement[i].tableNr === 0 && movement[i].roundNr === 4) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(1);
        expect(movement[i].boardGroup).to.eql(4);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 0) {
        expect(movement[i].ns).to.eql(1);
        expect(movement[i].ew).to.eql(4);
        expect(movement[i].boardGroup).to.eql(2);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 1) {
        expect(movement[i].ns).to.eql(1);
        expect(movement[i].ew).to.eql(3);
        expect(movement[i].boardGroup).to.eql(3);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 2) {
        expect(movement[i].ns).to.eql(2);
        expect(movement[i].ew).to.eql(1);
        expect(movement[i].boardGroup).to.eql(0);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 3) {
        expect(movement[i].ns).to.eql(5);
        expect(movement[i].ew).to.eql(1);
        expect(movement[i].boardGroup).to.eql(1);
      } else if (movement[i].tableNr === 1 && movement[i].roundNr === 4) {
        expect(movement[i].ns).to.eql(3);
        expect(movement[i].ew).to.eql(5);
        expect(movement[i].boardGroup).to.eql(4);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 0) {
        expect(movement[i].ns).to.eql(2);
        expect(movement[i].ew).to.eql(5);
        expect(movement[i].boardGroup).to.eql(3);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 1) {
        expect(movement[i].ns).to.eql(5);
        expect(movement[i].ew).to.eql(4);
        expect(movement[i].boardGroup).to.eql(0);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 2) {
        expect(movement[i].ns).to.eql(4);
        expect(movement[i].ew).to.eql(3);
        expect(movement[i].boardGroup).to.eql(1);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 3) {
        expect(movement[i].ns).to.eql(3);
        expect(movement[i].ew).to.eql(2);
        expect(movement[i].boardGroup).to.eql(2);
      } else if (movement[i].tableNr === 2 && movement[i].roundNr === 4) {
        expect(movement[i].ns).to.eql(0);
        expect(movement[i].ew).to.eql(2);
        expect(movement[i].boardGroup).to.eql(4);
      }
    }
  });

});
