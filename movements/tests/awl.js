const expect = require("expect.js");
const { awl } = require("../features/awl.js");

describe('test/awl - AWL Movement', function() {

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
    // even tableCnt
    expect(awl).withArgs(16, 24).to.throwException();
    expect(awl).withArgs(20, 30).to.throwException();
    expect(awl).withArgs(24, 24).to.throwException();
    expect(awl).withArgs(28, 32).to.throwException();
  });

// ================================================================
  it("1.1. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 18;
    let inb = 27;
    let movement = awl(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.2. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 14;
    let inb = 28;
    let movement = awl(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.3. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 30;
    let inb = 30;
    let movement = awl(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

  it("1.4. Func - Each pair played each pair & each boardgroup", function() {
    let ina = 10;
    let inb = 25;
    let movement = awl(ina, inb);

    expect(testPlayedEachPair(movement)).to.eql(true);
    expect(testPlayedEachBoardgroup(movement)).to.eql(true);
  });

// ================================================================
});
