const expect = require("expect.js");
const { score } = require("../features/score.js");

// ================================================================
describe('test/score - scoring of a single deal', function() {

  it("0.1. Error - level invalid", function() {
    expect(score).withArgs(-1, 0, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(1.25, 0, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs("a", 0, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs("/", 0, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(7, 0, 0, 0, 0, 0).to.throwException();
  });

  it("0.2. Error - suit invalid", function() {
    expect(score).withArgs(0, -1, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, -1.25, 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, "a", 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, "/", 0, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, 5, 0, 0, 0, 0).to.throwException();
  });

  it("0.3. Error - double invalid", function() {
    expect(score).withArgs(0, 0, -1, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 1.25, 0, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, "a", 0, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, "/", 0, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 3, 0, 0, 0).to.throwException();
  });

  it("0.4. Error - declarer invalid", function() {
    expect(score).withArgs(0, 0, 0, -1, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 1.25, 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, "a", 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, "/", 0, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 4, 0, 0).to.throwException();
  });

  it("0.5. Error - vulnerability invalid", function() {
    expect(score).withArgs(0, 0, 0, 0, -1, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 1.25, 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, "a", 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, "/", 0).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 2, 0).to.throwException();
  });

  it("0.6. Error - result invalid", function() {
    expect(score).withArgs(0, 0, 0, 0, 0, -14).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 0, 1.25).to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 0, "a").to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 0, "/").to.throwException();
    expect(score).withArgs(0, 0, 0, 0, 0, 8).to.throwException();
  });

// ================================================================
  it("1.1. Func - Gamebonus", function() {
    expect(score(4, 0, 0, 0, 0, 0)).to.be(400);
    expect(score(3, 0, 0, 0, 0, 0)).to.be(130);

    expect(score(3, 2, 0, 0, 0, 0)).to.be(420);
    expect(score(2, 2, 0, 0, 0, 0)).to.be(140);

    expect(score(2, 4, 0, 0, 0, 0)).to.be(400);
    expect(score(1, 4, 0, 0, 0, 0)).to.be(120);
  });

  it("1.2. Func - Slambonus", function() {
    expect(score(4, 0, 0, 0, 0, 0)).to.be(400);
    expect(score(5, 0, 0, 0, 0, 0)).to.be(920);
    expect(score(6, 0, 0, 0, 0, 0)).to.be(1440);

    expect(score(4, 2, 0, 0, 0, 0)).to.be(450);
    expect(score(5, 2, 0, 0, 0, 0)).to.be(980);
    expect(score(6, 2, 0, 0, 0, 0)).to.be(1510);

    expect(score(4, 4, 0, 0, 0, 0)).to.be(460);
    expect(score(5, 4, 0, 0, 0, 0)).to.be(990);
    expect(score(6, 4, 0, 0, 0, 0)).to.be(1520);
  });

  it("1.3. Func - Double / Redouble", function() {
    // Double: Positive
    expect(score(1, 2, 1, 0, 0, 0)).to.be(470);
    expect(score(2, 4, 1, 0, 0, 1)).to.be(650);
    expect(score(2, 4, 1, 0, 1, 2)).to.be(1150);

    // Redouble: Positive
    expect(score(1, 2, 2, 0, 0, 0)).to.be(640);
    expect(score(3, 3, 2, 0, 0, 2)).to.be(1280);
    expect(score(3, 3, 2, 0, 1, 1)).to.be(1480);

    // Double: Negative
    expect(score(2, 4, 1, 0, 0, -1)).to.be(-100);
    expect(score(4, 2, 1, 0, 0, -2)).to.be(-300);
    expect(score(2, 2, 1, 0, 0, -3)).to.be(-500);

    // Redouble: Negative
    expect(score(4, 2, 2, 0, 0, -1)).to.be(-200);
    expect(score(2, 2, 2, 0, 0, -2)).to.be(-600);
    expect(score(2, 4, 2, 0, 0, -3)).to.be(-1000);
  });

  it("1.4. Func - Vulnerability", function() {
    expect(score(4, 0, 0, 0, 1, 0)).to.be(600);
    expect(score(5, 0, 0, 0, 1, 0)).to.be(1370);
    expect(score(6, 0, 0, 0, 1, 0)).to.be(2140);

    expect(score(4, 2, 0, 0, 1, 0)).to.be(650);
    expect(score(5, 2, 0, 0, 1, 0)).to.be(1430);
    expect(score(6, 2, 0, 0, 1, 0)).to.be(2210);

    expect(score(4, 4, 0, 0, 1, 0)).to.be(660);
    expect(score(5, 4, 0, 0, 1, 0)).to.be(1440);
    expect(score(6, 4, 0, 0, 1, 0)).to.be(2220);
  });

  it("1.5. Func - Declarer / Result", function() {
    expect(score(3, 2, 0, 1, 0, 0)).to.be(420);
    expect(score(3, 2, 0, 2, 0, 0)).to.be(-420);

    expect(score(3, 2, 0, 1, 0, -1)).to.be(-50);
    expect(score(3, 2, 0, 2, 0, -1)).to.be(50);
  });

// ================================================================
  it("2.0. Case - Extreme Results", function() {
    expect(score(2, 2, 0, 0, 0, -7)).to.be(-350);
    expect(score(6, 2, 0, 0, 1, -13)).to.be(-1300);

    expect(score(1, 2, 1, 0, 1, -5)).to.be(-1400);
    expect(score(2, 2, 2, 0, 1, -5)).to.be(-2800);

    expect(score(1, 2, 1, 0, 0, -5)).to.be(-1100);
    expect(score(2, 2, 2, 0, 0, -5)).to.be(-2200);
  });

  it("2.1. Case - all results: 1 club", function() {
    // Non Vulnerable, No Double
    expect(score(0, 0, 0, 0, 0, -7)).to.be(-350);
    expect(score(0, 0, 0, 0, 0, -6)).to.be(-300);
    expect(score(0, 0, 0, 0, 0, -5)).to.be(-250);
    expect(score(0, 0, 0, 0, 0, -4)).to.be(-200);
    expect(score(0, 0, 0, 0, 0, -3)).to.be(-150);
    expect(score(0, 0, 0, 0, 0, -2)).to.be(-100);
    expect(score(0, 0, 0, 0, 0, -1)).to.be(-50);
    expect(score(0, 0, 0, 0, 0, 0)).to.be(70);
    expect(score(0, 0, 0, 0, 0, 1)).to.be(90);
    expect(score(0, 0, 0, 0, 0, 2)).to.be(110);
    expect(score(0, 0, 0, 0, 0, 3)).to.be(130);
    expect(score(0, 0, 0, 0, 0, 4)).to.be(150);
    expect(score(0, 0, 0, 0, 0, 5)).to.be(170);
    expect(score(0, 0, 0, 0, 0, 6)).to.be(190);

    // Non Vulnerable, Double
    expect(score(0, 0, 1, 0, 0, -7)).to.be(-1700);
    expect(score(0, 0, 1, 0, 0, -6)).to.be(-1400);
    expect(score(0, 0, 1, 0, 0, -5)).to.be(-1100);
    expect(score(0, 0, 1, 0, 0, -4)).to.be(-800);
    expect(score(0, 0, 1, 0, 0, -3)).to.be(-500);
    expect(score(0, 0, 1, 0, 0, -2)).to.be(-300);
    expect(score(0, 0, 1, 0, 0, -1)).to.be(-100);
    expect(score(0, 0, 1, 0, 0, 0)).to.be(140);
    expect(score(0, 0, 1, 0, 0, 1)).to.be(240);
    expect(score(0, 0, 1, 0, 0, 2)).to.be(340);
    expect(score(0, 0, 1, 0, 0, 3)).to.be(440);
    expect(score(0, 0, 1, 0, 0, 4)).to.be(540);
    expect(score(0, 0, 1, 0, 0, 5)).to.be(640);
    expect(score(0, 0, 1, 0, 0, 6)).to.be(740);

    // Non Vulnerable, Redouble
    expect(score(0, 0, 2, 0, 0, -7)).to.be(-3400);
    expect(score(0, 0, 2, 0, 0, -6)).to.be(-2800);
    expect(score(0, 0, 2, 0, 0, -5)).to.be(-2200);
    expect(score(0, 0, 2, 0, 0, -4)).to.be(-1600);
    expect(score(0, 0, 2, 0, 0, -3)).to.be(-1000);
    expect(score(0, 0, 2, 0, 0, -2)).to.be(-600);
    expect(score(0, 0, 2, 0, 0, -1)).to.be(-200);
    expect(score(0, 0, 2, 0, 0, 0)).to.be(230);
    expect(score(0, 0, 2, 0, 0, 1)).to.be(430);
    expect(score(0, 0, 2, 0, 0, 2)).to.be(630);
    expect(score(0, 0, 2, 0, 0, 3)).to.be(830);
    expect(score(0, 0, 2, 0, 0, 4)).to.be(1030);
    expect(score(0, 0, 2, 0, 0, 5)).to.be(1230);
    expect(score(0, 0, 2, 0, 0, 6)).to.be(1430);

    // Vulnerable, No Double
    expect(score(0, 0, 0, 0, 1, -7)).to.be(-700);
    expect(score(0, 0, 0, 0, 1, -6)).to.be(-600);
    expect(score(0, 0, 0, 0, 1, -5)).to.be(-500);
    expect(score(0, 0, 0, 0, 1, -4)).to.be(-400);
    expect(score(0, 0, 0, 0, 1, -3)).to.be(-300);
    expect(score(0, 0, 0, 0, 1, -2)).to.be(-200);
    expect(score(0, 0, 0, 0, 1, -1)).to.be(-100);
    expect(score(0, 0, 0, 0, 0, 0)).to.be(70);
    expect(score(0, 0, 0, 0, 0, 1)).to.be(90);
    expect(score(0, 0, 0, 0, 0, 2)).to.be(110);
    expect(score(0, 0, 0, 0, 0, 3)).to.be(130);
    expect(score(0, 0, 0, 0, 0, 4)).to.be(150);
    expect(score(0, 0, 0, 0, 0, 5)).to.be(170);
    expect(score(0, 0, 0, 0, 0, 6)).to.be(190);

    // Vulnerable, Double
    expect(score(0, 0, 1, 0, 1, -7)).to.be(-2000);
    expect(score(0, 0, 1, 0, 1, -6)).to.be(-1700);
    expect(score(0, 0, 1, 0, 1, -5)).to.be(-1400);
    expect(score(0, 0, 1, 0, 1, -4)).to.be(-1100);
    expect(score(0, 0, 1, 0, 1, -3)).to.be(-800);
    expect(score(0, 0, 1, 0, 1, -2)).to.be(-500);
    expect(score(0, 0, 1, 0, 1, -1)).to.be(-200);
    expect(score(0, 0, 1, 0, 1, 0)).to.be(140);
    expect(score(0, 0, 1, 0, 1, 1)).to.be(340);
    expect(score(0, 0, 1, 0, 1, 2)).to.be(540);
    expect(score(0, 0, 1, 0, 1, 3)).to.be(740);
    expect(score(0, 0, 1, 0, 1, 4)).to.be(940);
    expect(score(0, 0, 1, 0, 1, 5)).to.be(1140);
    expect(score(0, 0, 1, 0, 1, 6)).to.be(1340);

    // Vulnerable, Redouble
    expect(score(0, 0, 2, 0, 1, -7)).to.be(-4000);
    expect(score(0, 0, 2, 0, 1, -6)).to.be(-3400);
    expect(score(0, 0, 2, 0, 1, -5)).to.be(-2800);
    expect(score(0, 0, 2, 0, 1, -4)).to.be(-2200);
    expect(score(0, 0, 2, 0, 1, -3)).to.be(-1600);
    expect(score(0, 0, 2, 0, 1, -2)).to.be(-1000);
    expect(score(0, 0, 2, 0, 1, -1)).to.be(-400);
    expect(score(0, 0, 2, 0, 1, 0)).to.be(230);
    expect(score(0, 0, 2, 0, 1, 1)).to.be(630);
    expect(score(0, 0, 2, 0, 1, 2)).to.be(1030);
    expect(score(0, 0, 2, 0, 1, 3)).to.be(1430);
    expect(score(0, 0, 2, 0, 1, 4)).to.be(1830);
    expect(score(0, 0, 2, 0, 1, 5)).to.be(2230);
    expect(score(0, 0, 2, 0, 1, 6)).to.be(2630);
  });

  it("2.2. Case - all results: 1 diamond", function() {
    // Non Vulnerable, No Double
    expect(score(0, 1, 0, 0, 0, -7)).to.be(-350);
    expect(score(0, 1, 0, 0, 0, -6)).to.be(-300);
    expect(score(0, 1, 0, 0, 0, -5)).to.be(-250);
    expect(score(0, 1, 0, 0, 0, -4)).to.be(-200);
    expect(score(0, 1, 0, 0, 0, -3)).to.be(-150);
    expect(score(0, 1, 0, 0, 0, -2)).to.be(-100);
    expect(score(0, 1, 0, 0, 0, -1)).to.be(-50);
    expect(score(0, 1, 0, 0, 0, 0)).to.be(70);
    expect(score(0, 1, 0, 0, 0, 1)).to.be(90);
    expect(score(0, 1, 0, 0, 0, 2)).to.be(110);
    expect(score(0, 1, 0, 0, 0, 3)).to.be(130);
    expect(score(0, 1, 0, 0, 0, 4)).to.be(150);
    expect(score(0, 1, 0, 0, 0, 5)).to.be(170);
    expect(score(0, 1, 0, 0, 0, 6)).to.be(190);

    // Non Vulnerable, Double
    expect(score(0, 1, 1, 0, 0, -7)).to.be(-1700);
    expect(score(0, 1, 1, 0, 0, -6)).to.be(-1400);
    expect(score(0, 1, 1, 0, 0, -5)).to.be(-1100);
    expect(score(0, 1, 1, 0, 0, -4)).to.be(-800);
    expect(score(0, 1, 1, 0, 0, -3)).to.be(-500);
    expect(score(0, 1, 1, 0, 0, -2)).to.be(-300);
    expect(score(0, 1, 1, 0, 0, -1)).to.be(-100);
    expect(score(0, 1, 1, 0, 0, 0)).to.be(140);
    expect(score(0, 1, 1, 0, 0, 1)).to.be(240);
    expect(score(0, 1, 1, 0, 0, 2)).to.be(340);
    expect(score(0, 1, 1, 0, 0, 3)).to.be(440);
    expect(score(0, 1, 1, 0, 0, 4)).to.be(540);
    expect(score(0, 1, 1, 0, 0, 5)).to.be(640);
    expect(score(0, 1, 1, 0, 0, 6)).to.be(740);

    // Non Vulnerable, Redouble
    expect(score(0, 1, 2, 0, 0, -7)).to.be(-3400);
    expect(score(0, 1, 2, 0, 0, -6)).to.be(-2800);
    expect(score(0, 1, 2, 0, 0, -5)).to.be(-2200);
    expect(score(0, 1, 2, 0, 0, -4)).to.be(-1600);
    expect(score(0, 1, 2, 0, 0, -3)).to.be(-1000);
    expect(score(0, 1, 2, 0, 0, -2)).to.be(-600);
    expect(score(0, 1, 2, 0, 0, -1)).to.be(-200);
    expect(score(0, 1, 2, 0, 0, 0)).to.be(230);
    expect(score(0, 1, 2, 0, 0, 1)).to.be(430);
    expect(score(0, 1, 2, 0, 0, 2)).to.be(630);
    expect(score(0, 1, 2, 0, 0, 3)).to.be(830);
    expect(score(0, 1, 2, 0, 0, 4)).to.be(1030);
    expect(score(0, 1, 2, 0, 0, 5)).to.be(1230);
    expect(score(0, 1, 2, 0, 0, 6)).to.be(1430);

    // Vulnerable, No Double
    expect(score(0, 1, 0, 0, 1, -7)).to.be(-700);
    expect(score(0, 1, 0, 0, 1, -6)).to.be(-600);
    expect(score(0, 1, 0, 0, 1, -5)).to.be(-500);
    expect(score(0, 1, 0, 0, 1, -4)).to.be(-400);
    expect(score(0, 1, 0, 0, 1, -3)).to.be(-300);
    expect(score(0, 1, 0, 0, 1, -2)).to.be(-200);
    expect(score(0, 1, 0, 0, 1, -1)).to.be(-100);
    expect(score(0, 1, 0, 0, 0, 0)).to.be(70);
    expect(score(0, 1, 0, 0, 0, 1)).to.be(90);
    expect(score(0, 1, 0, 0, 0, 2)).to.be(110);
    expect(score(0, 1, 0, 0, 0, 3)).to.be(130);
    expect(score(0, 1, 0, 0, 0, 4)).to.be(150);
    expect(score(0, 1, 0, 0, 0, 5)).to.be(170);
    expect(score(0, 1, 0, 0, 0, 6)).to.be(190);

    // Vulnerable, Double
    expect(score(0, 1, 1, 0, 1, -7)).to.be(-2000);
    expect(score(0, 1, 1, 0, 1, -6)).to.be(-1700);
    expect(score(0, 1, 1, 0, 1, -5)).to.be(-1400);
    expect(score(0, 1, 1, 0, 1, -4)).to.be(-1100);
    expect(score(0, 1, 1, 0, 1, -3)).to.be(-800);
    expect(score(0, 1, 1, 0, 1, -2)).to.be(-500);
    expect(score(0, 1, 1, 0, 1, -1)).to.be(-200);
    expect(score(0, 1, 1, 0, 1, 0)).to.be(140);
    expect(score(0, 1, 1, 0, 1, 1)).to.be(340);
    expect(score(0, 1, 1, 0, 1, 2)).to.be(540);
    expect(score(0, 1, 1, 0, 1, 3)).to.be(740);
    expect(score(0, 1, 1, 0, 1, 4)).to.be(940);
    expect(score(0, 1, 1, 0, 1, 5)).to.be(1140);
    expect(score(0, 1, 1, 0, 1, 6)).to.be(1340);

    // Vulnerable, Redouble
    expect(score(0, 1, 2, 0, 1, -7)).to.be(-4000);
    expect(score(0, 1, 2, 0, 1, -6)).to.be(-3400);
    expect(score(0, 1, 2, 0, 1, -5)).to.be(-2800);
    expect(score(0, 1, 2, 0, 1, -4)).to.be(-2200);
    expect(score(0, 1, 2, 0, 1, -3)).to.be(-1600);
    expect(score(0, 1, 2, 0, 1, -2)).to.be(-1000);
    expect(score(0, 1, 2, 0, 1, -1)).to.be(-400);
    expect(score(0, 1, 2, 0, 1, 0)).to.be(230);
    expect(score(0, 1, 2, 0, 1, 1)).to.be(630);
    expect(score(0, 1, 2, 0, 1, 2)).to.be(1030);
    expect(score(0, 1, 2, 0, 1, 3)).to.be(1430);
    expect(score(0, 1, 2, 0, 1, 4)).to.be(1830);
    expect(score(0, 1, 2, 0, 1, 5)).to.be(2230);
    expect(score(0, 1, 2, 0, 1, 6)).to.be(2630);
  });

});
