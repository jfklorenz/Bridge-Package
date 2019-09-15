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

  // ----------------------------------------------------------------
  it("1.1. HCP Range / Base Cases", function() {
    // 0 HCP / 2310789600, 0.36
    expect(hcpRange(0)[0]).to.equal(2310789600);
    expect(hcpRange(0)[1]).to.equal(0.0036);
    // 37 HCP / 4, 0.00
    expect(hcpRange(37)[0]).to.equal(4);
    expect(hcpRange(37)[1]).to.equal(0.00);
  });

  // ----------------------------------------------------------------
  it("1.2. HCP Range / Cases", function() {
    // 1 HCP / 5006710800, 0.79
    expect(hcpRange(1)[0]).to.equal(5006710800);
    expect(hcpRange(1)[1]).to.equal(0.0079);
    // 2 HCP / 8611542576, 1.36
    expect(hcpRange(2)[0]).to.equal(8611542576);
    expect(hcpRange(2)[1]).to.equal(0.0136);
    // 3 HCP / 15636342960, 2.46
    expect(hcpRange(3)[0]).to.equal(15636342960);
    expect(hcpRange(3)[1]).to.equal(0.0246);
    // 1-3 HCP / 29254596336, 4.61
    expect(hcpRange(1,3)[0]).to.equal(29254596336);
    expect(hcpRange(1,3)[1]).to.equal(0.0461);
  });

// ================================================================
});
