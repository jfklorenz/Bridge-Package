const expect = require("expect.js");
const { impsToVictoryPoints } = require("../features/victorypoints.js");

// ================================================================
describe('test/impsToVictoryPoints - IMPs to Victory Points', function() {

  it("0.1. Error - IMPs invalid", function() {
    expect(impsToVictoryPoints).withArgs(-201, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(-203.5, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(-500, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(-1000, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(22.5, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(-76.4, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs("A", 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(-"-a", 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(201, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(201.5, 6).to.throwException();
    expect(impsToVictoryPoints).withArgs(1000, 6).to.throwException();
  });

  it("0.2. Error - boardCnt invalid", function() {
    expect(impsToVictoryPoints).withArgs(20, -1).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 0).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, "a").to.throwException();
    expect(impsToVictoryPoints).withArgs(20, "/").to.throwException();
  });

  it("0.3. Error - boardCnt invalid range", function() {
    expect(impsToVictoryPoints).withArgs(20, 1).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 5).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 11).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 18).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 24).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 31).to.throwException();
    expect(impsToVictoryPoints).withArgs(20, 144).to.throwException();
  });

// ================================================================
  it("2.1. Case - IMPS: 16, Boards: 32", function() {
    expect(impsToVictoryPoints(16, 32)).to.eql([13.12, 6.88])
  });

  it("2.2. Case - IMPs: 47, Boards: 32", function() {
    expect(impsToVictoryPoints(47, 32)).to.eql([17.21, 2.79])
  });

});
