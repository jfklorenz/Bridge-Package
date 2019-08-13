const expect = require("expect.js");
const Card = require("../features/card.js");

// ================================================================
describe('test/card - A single playing card', function() {

  it("0.1. Error - id invalid", function() {
    // ID is not a number
    expect((id) => {new Card(id)}).withArgs("a").to.throwException();
    expect((id) => {new Card(id)}).withArgs("Z").to.throwException();
    expect((id) => {new Card(id)}).withArgs("/").to.throwException();

    // ID is not an Integer
    expect((id) => {new Card(id)}).withArgs(4.25).to.throwException();
    expect((id) => {new Card(id)}).withArgs(16.5).to.throwException();
    expect((id) => {new Card(id)}).withArgs(47.9).to.throwException();

    // ID < 0
    expect((id) => {new Card(id)}).withArgs(-1).to.throwException();
    expect((id) => {new Card(id)}).withArgs(-5).to.throwException();
    expect((id) => {new Card(id)}).withArgs(-44).to.throwException();

    // ID > 51
    expect((id) => {new Card(id)}).withArgs(52).to.throwException();
    expect((id) => {new Card(id)}).withArgs(66).to.throwException();
    expect((id) => {new Card(id)}).withArgs(157).to.throwException();
  });


// ================================================================
  it("1.1. Func - correct rank", function() {
    expect(new Card(14).rank).to.eql(1);
    expect(new Card(26).rank).to.eql(0);
    expect(new Card(42).rank).to.eql(3);
    expect(new Card(51).rank).to.eql(12);
    expect(new Card(0).rank).to.eql(0);
    expect(new Card(33).rank).to.eql(7);
    expect(new Card(38).rank).to.eql(12);
    expect(new Card(11).rank).to.eql(11);
  });

  it("1.2. Func - correct suit", function() {
    expect(new Card(14).suit).to.eql(1);
    expect(new Card(26).suit).to.eql(2);
    expect(new Card(42).suit).to.eql(3);
    expect(new Card(51).suit).to.eql(3);
    expect(new Card(0).suit).to.eql(0);
    expect(new Card(33).suit).to.eql(2);
    expect(new Card(38).suit).to.eql(2);
    expect(new Card(11).suit).to.eql(0);
    });

  it("1.3. Func - correct repr", function() {
    // 6 of Clubs
    expect(new Card(8).repr_rank).to.eql("T");
    expect(new Card(8).repr_suit).to.eql("Clubs");
    expect(new Card(8).repr_card).to.eql("T of Clubs");

    // K of Diamonds
    expect(new Card(14).repr_rank).to.eql("3");
    expect(new Card(14).repr_suit).to.eql("Diamonds");
    expect(new Card(14).repr_card).to.eql("3 of Diamonds");

    // 7 of Hearts
    expect(new Card(32).repr_rank).to.eql("8");
    expect(new Card(32).repr_suit).to.eql("Hearts");
    expect(new Card(32).repr_card).to.eql("8 of Hearts");

    // 4 of Spades
    expect(new Card(49).repr_rank).to.eql("Q");
    expect(new Card(49).repr_suit).to.eql("Spades");
    expect(new Card(49).repr_card).to.eql("Q of Spades");
  });

  it("1.4. Func - correct hcp", function() {
    expect(new Card(14).hcp).to.eql(0);
    expect(new Card(26).hcp).to.eql(0);
    expect(new Card(42).hcp).to.eql(0);
    expect(new Card(51).hcp).to.eql(4);
    expect(new Card(0).hcp).to.eql(0);
    expect(new Card(36).hcp).to.eql(2);
    expect(new Card(37).hcp).to.eql(3);
    expect(new Card(9).hcp).to.eql(1);
  });

  it("1.5. Func - correct controls", function() {
    expect(new Card(14).controls).to.eql(0);
    expect(new Card(26).controls).to.eql(0);
    expect(new Card(42).controls).to.eql(0);
    expect(new Card(51).controls).to.eql(2);
    expect(new Card(0).controls).to.eql(0);
    expect(new Card(33).controls).to.eql(0);
    expect(new Card(37).controls).to.eql(1);
    expect(new Card(11).controls).to.eql(1);
  });

// ================================================================
  it("2.1. Case - 2 of clubs", function() {
    expect(new Card(0).id).to.eql(0);
    expect(new Card(0).rank).to.eql(0);
    expect(new Card(0).suit).to.eql(0);
    expect(new Card(0).repr_rank).to.eql("2");
    expect(new Card(0).repr_suit).to.eql("Clubs");
    expect(new Card(0).repr_card).to.eql("2 of Clubs");
    expect(new Card(0).hcp).to.eql(0);
    expect(new Card(0).controls).to.eql(0);
  });

  it("2.2. Case - 3 of clubs", function() {
    expect(new Card(1).id).to.eql(1);
    expect(new Card(1).rank).to.eql(1);
    expect(new Card(1).suit).to.eql(0);
    expect(new Card(1).repr_rank).to.eql("3");
    expect(new Card(1).repr_suit).to.eql("Clubs");
    expect(new Card(1).repr_card).to.eql("3 of Clubs");
    expect(new Card(1).hcp).to.eql(0);
    expect(new Card(1).controls).to.eql(0);
  });

});
