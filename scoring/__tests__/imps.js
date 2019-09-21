const expect = require("expect.js");
const { scoreToImps } = require("../features/imps.js");

// ================================================================
describe('test/scoreToImps - Score difference to IMPs', function() {

  it("0.1. Error - score difference invalid", function() {
    expect(scoreToImps).withArgs(-10001).to.throwException();
    expect(scoreToImps).withArgs(-10203.5).to.throwException();
    expect(scoreToImps).withArgs(-55555).to.throwException();
    expect(scoreToImps).withArgs(-10000000).to.throwException();
    expect(scoreToImps).withArgs("A").to.throwException();
    expect(scoreToImps).withArgs(-"-a").to.throwException();
    expect(scoreToImps).withArgs(10001).to.throwException();
    expect(scoreToImps).withArgs(10001.5).to.throwException();
    expect(scoreToImps).withArgs('/').to.throwException();
  });

  it("0.2. Error - score difference invalid range", function() {
    expect(scoreToImps).withArgs(11).to.throwException();
    expect(scoreToImps).withArgs(-15).to.throwException();
    expect(scoreToImps).withArgs(-99).to.throwException();
    expect(scoreToImps).withArgs(-909).to.throwException();
    expect(scoreToImps).withArgs(75).to.throwException();
    expect(scoreToImps).withArgs(91).to.throwException();
    expect(scoreToImps).withArgs(1001).to.throwException();
  });

// ================================================================
  it("1.1. Func - Positive & negative Scoredifference", function() {
    expect(scoreToImps(0)).to.eql(-scoreToImps(-0));
    expect(scoreToImps(10)).to.eql(-scoreToImps(-10));
    expect(scoreToImps(40)).to.eql(-scoreToImps(-40));
    expect(scoreToImps(50)).to.eql(-scoreToImps(-50));
    expect(scoreToImps(100)).to.eql(-scoreToImps(-100));
    expect(scoreToImps(300)).to.eql(-scoreToImps(-300));
    expect(scoreToImps(1500)).to.eql(-scoreToImps(-1500));
    expect(scoreToImps(9990)).to.eql(-scoreToImps(-9990));

    expect(-scoreToImps(0)).to.eql(scoreToImps(-0));
    expect(-scoreToImps(10)).to.eql(scoreToImps(-10));
    expect(-scoreToImps(40)).to.eql(scoreToImps(-40));
    expect(-scoreToImps(50)).to.eql(scoreToImps(-50));
    expect(-scoreToImps(100)).to.eql(scoreToImps(-100));
    expect(-scoreToImps(300)).to.eql(scoreToImps(-300));
    expect(-scoreToImps(1500)).to.eql(scoreToImps(-1500));
    expect(-scoreToImps(9990)).to.eql(scoreToImps(-9990));
  });

// ================================================================
  it("2.0. Case - Score difference = +/- [0,10]", function() {
    for (var i = 0; i <= 1; i++) {
      expect(scoreToImps(i*10)).to.be(0);
      expect(scoreToImps(-i*10)).to.be(0);
    }
  });

  it("2.1. Case - Score difference = +/- [30,40]", function() {
    for (var i = 2; i <= 4; i++) {
      expect(scoreToImps(i*10)).to.be(1);
      expect(scoreToImps(-i*10)).to.be(-1);
    }
  });

  it("2.2. Case - Score difference = +/- [50,80]", function() {
    for (var i = 5; i <= 8; i++) {
      expect(scoreToImps(i*10)).to.be(2);
      expect(scoreToImps(-i*10)).to.be(-2);
    }
  });

  it("2.3. Case - Score difference = +/- [90,120]", function() {
    for (var i = 9; i <= 12; i++) {
      expect(scoreToImps(i*10)).to.be(3);
      expect(scoreToImps(-i*10)).to.be(-3);
    }
  });

  it("2.4. Case - Score difference = +/- [130,160]", function() {
    for (var i = 13; i <= 16; i++) {
      expect(scoreToImps(i*10)).to.be(4);
      expect(scoreToImps(-i*10)).to.be(-4);
    }
  });

  it("2.5. Case - Score difference = +/- [170,210]", function() {
    for (var i = 17; i <= 21; i++) {
      expect(scoreToImps(i*10)).to.be(5);
      expect(scoreToImps(-i*10)).to.be(-5);
    }
  });

  it("2.6. Case - Score difference = +/- [220,260]", function() {
    for (var i = 22; i <= 26; i++) {
      expect(scoreToImps(i*10)).to.be(6);
      expect(scoreToImps(-i*10)).to.be(-6);
    }
  });

  it("2.7. Case - Score difference = +/- [270,310]", function() {
    for (var i = 27; i <= 31; i++) {
      expect(scoreToImps(i*10)).to.be(7);
      expect(scoreToImps(-i*10)).to.be(-7);
    }
  });

  it("2.8. Case - Score difference = +/- [320,360]", function() {
    for (var i = 32; i <= 36; i++) {
      expect(scoreToImps(i*10)).to.be(8);
      expect(scoreToImps(-i*10)).to.be(-8);
    }
  });

  it("2.9. Case - Score difference = +/- [370,420]", function() {
    for (var i = 37; i <= 42; i++) {
      expect(scoreToImps(i*10)).to.be(9);
      expect(scoreToImps(-i*10)).to.be(-9);
    }
  });

  it("2.10. Case - Score difference = +/- [430,490]", function() {
    for (var i = 43; i <= 49; i++) {
      expect(scoreToImps(i*10)).to.be(10);
      expect(scoreToImps(-i*10)).to.be(-10);
    }
  });

  it("2.11. Case - Score difference = +/- [500,590]", function() {
    for (var i = 50; i <= 59; i++) {
      expect(scoreToImps(i*10)).to.be(11);
      expect(scoreToImps(-i*10)).to.be(-11);
    }
  });

  it("2.12. Case - Score difference = +/- [600,740]", function() {
    for (var i = 60; i <= 74; i++) {
      expect(scoreToImps(i*10)).to.be(12);
      expect(scoreToImps(-i*10)).to.be(-12);
    }
  });

  it("2.13. Case - Score difference = +/- [750,890]", function() {
    for (var i = 75; i <= 89; i++) {
      expect(scoreToImps(i*10)).to.be(13);
      expect(scoreToImps(-i*10)).to.be(-13);
    }
  });

  it("2.14. Case - Score difference = +/- [900,1090]", function() {
    for (var i = 90; i <= 109; i++) {
      expect(scoreToImps(i*10)).to.be(14);
      expect(scoreToImps(-i*10)).to.be(-14);
    }
  });

  it("2.15. Case - Score difference = +/- [1100,1290]", function() {
    for (var i = 110; i <= 129; i++) {
      expect(scoreToImps(i*10)).to.be(15);
      expect(scoreToImps(-i*10)).to.be(-15);
    }
  });

  it("2.16. Case - Score difference = +/- [1300,1490]", function() {
    for (var i = 130; i <= 149; i++) {
      expect(scoreToImps(i*10)).to.be(16);
      expect(scoreToImps(-i*10)).to.be(-16);
    }
  });

  it("2.17. Case - Score difference = +/- [1500,1740]", function() {
    for (var i = 150; i <= 174; i++) {
      expect(scoreToImps(i*10)).to.be(17);
      expect(scoreToImps(-i*10)).to.be(-17);
    }
  });

  it("2.18. Case - Score difference = +/- [1750,1990]", function() {
    for (var i = 175; i <= 199; i++) {
      expect(scoreToImps(i*10)).to.be(18);
      expect(scoreToImps(-i*10)).to.be(-18);
    }
  });

  it("2.19. Case - Score difference = +/- [2000,2240]", function() {
    for (var i = 200; i <= 224; i++) {
      expect(scoreToImps(i*10)).to.be(19);
      expect(scoreToImps(-i*10)).to.be(-19);
    }
  });

  it("2.20. Case - Score difference = +/- [2250,2490]", function() {
    for (var i = 225; i <= 249; i++) {
      expect(scoreToImps(i*10)).to.be(20);
      expect(scoreToImps(-i*10)).to.be(-20);
    }
  });

  it("2.21. Case - Score difference = +/- [2500,2990]", function() {
    for (var i = 250; i <= 299; i++) {
      expect(scoreToImps(i*10)).to.be(21);
      expect(scoreToImps(-i*10)).to.be(-21);
    }
  });

  it("2.22. Case - Score difference = +/- [3000,3490]", function() {
    for (var i = 300; i <= 349; i++) {
      expect(scoreToImps(i*10)).to.be(22);
      expect(scoreToImps(-i*10)).to.be(-22);
    }
  });

  it("2.23. Case - Score difference = +/- [3500,3990]", function() {
    for (var i = 350; i <= 399; i++) {
      expect(scoreToImps(i*10)).to.be(23);
      expect(scoreToImps(-i*10)).to.be(-23);
    }
  });

  it("2.24. Case - Score difference = +/- [4000,9990]", function() {
    for (var i = 400; i <= 999; i++) {
      expect(scoreToImps(i*10)).to.be(24);
      expect(scoreToImps(-i*10)).to.be(-24);
    }
  });

  it("2.25. Case - Score difference wrong", function() {
    for (var i = 0; i <= 999; i++) {
      for (var j = 1; j < 10; j++) {
        expect(scoreToImps).withArgs(i*10 + j).to.throwException();
        expect(scoreToImps).withArgs(-i*10 - j).to.throwException();
      }
    }
  });


});
