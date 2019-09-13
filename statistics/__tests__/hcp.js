const expect = require("expect.js");
const { hcpRange } = require("../features/hcp.js");

// ================================================================
describe('test/hcp.js - Highcard Point Probability', function() {

  // ================================================================
  // HCP Range
  it("1.0. HCP Range / Input", function() {
    expect(hcpRange).withArgs("a").to.throwException();
    expect(hcpRange).withArgs("Z").to.throwException();
    expect(hcpRange).withArgs(-1).to.throwException();
    expect(hcpRange).withArgs(1.234).to.throwException();
    expect(hcpRange).withArgs(38).to.throwException();
  });

  it("1.1. HCP Range / Base Cases", function() {
    // Missing 1 Card / 50-50
    expect(hcpRange(0)[0]).to.equal(2310789600);
    expect(hcpRange(0)[1]).to.equal(0.36);
    expect(hcpRange(37)[0]).to.equal(4);
    expect(hcpRange(37)[1]).to.equal(0);
  });

  it("1.2. HCP Range / Cases", function() {
    //expect(hcpRange(3)).to.equal(120);
    //expect(hcpRange(13)).to.equal(126);
    //expect(hcpRange(28)).to.equal(10);
    //expect(hcpRange(11,17)).to.equal(12376);
  });

// ================================================================
});
