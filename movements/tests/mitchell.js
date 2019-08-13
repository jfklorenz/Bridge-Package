const expect = require("expect.js");
const { testPlayedEachBoardgroup, testPlayedEachPair } = require("../features/tests.js");
const { mitchell } = require("../features/mitchell.js");

// ================================================================
describe('test/mitchell - Mitchell Movement', function() {

  it("0.1. Error - pairCnt invalid", function() {
    expect(mitchell).withArgs(0, 6).to.throwException();
    expect(mitchell).withArgs(-1, 6).to.throwException();
    expect(mitchell).withArgs(1.25, 6).to.throwException();
    expect(mitchell).withArgs(300, 6).to.throwException();
    expect(mitchell).withArgs(301, 6).to.throwException();
    expect(mitchell).withArgs("a", 6).to.throwException();
    expect(mitchell).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(mitchell).withArgs(20,0).to.throwException();
    expect(mitchell).withArgs(20,-1).to.throwException();
    expect(mitchell).withArgs(20,1.25).to.throwException();
    expect(mitchell).withArgs(20,100).to.throwException();
    expect(mitchell).withArgs(20,101).to.throwException();
    expect(mitchell).withArgs(20,"a").to.throwException();
    expect(mitchell).withArgs(20,"/").to.throwException();
  });

  it("0.3. Error - tableCnt invalid", function() {
    // Odd tableCnt
    expect(mitchell).withArgs(18, 27).to.throwException();
    expect(mitchell).withArgs(22, 22).to.throwException();

    // tableCnt % 4 != 0;
    expect(mitchell).withArgs(16, 24).to.throwException();
    expect(mitchell).withArgs(24, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 20;
    let inb = 30;
    let movement = mitchell(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 28;
    let inb = 28;
    let movement = mitchell(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 12;
    let inb = 24;
    let movement = mitchell(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 12;
    let inb = 30;
    let movement = mitchell(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

// ================================================================
});

  it("1.2. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 28;
    let inBoardCnt = 28;
    let movement = mitchell(inPairCnt, inBoardCnt);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 12;
    let inBoardCnt = 24;
    let movement = mitchell(inPairCnt, inBoardCnt);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & each boardgroup", function() {
    let inPairCnt = 12;
    let inBoardCnt = 30;
    let movement = mitchell(inPairCnt, inBoardCnt);

    expect(testPlayedEachPair(movement, 12)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement, 12)).to.eql(true);
  });
