const expect = require("expect.js");
const {
  Auction,
  Bid,
  Pass,
  Double,
  Redouble,
  OneClub,
  OneDiamond,
  OneHeart,
  OneSpade,
  OneNoTrump
} = require("../features/bidding/bidding.js");

// ================================================================
describe("test/bidding - Every bidding functionality", function() {
  // --------------------------------
  it("1.0.0. Bid - Error", function() {
    //
  });

  // --------------------------------
  it("1.0.1. Bid - Attributes", function() {
    let bid = new Bid();
    expect(bid.rank).to.eql(null);
    expect(bid.suit).to.eql(null);
    expect(bid.pass).to.eql(false);
    expect(bid.double).to.eql(false);
    expect(bid.redouble).to.eql(false);
    expect(bid.player).to.eql(null);
    expect(bid.convention).to.eql(null);
    expect(bid.corrected).to.eql(null);
    expect(bid.comment).to.eql(null);
  });

  // --------------------------------
  it("1.0.2. Bid - Methods", function() {
    //
  });

  // ================================
  it("1.1. Pass", function() {
    //
  });

  // --------------------------------
  it("1.2. Double", function() {
    //
  });

  // --------------------------------
  it("1.3. Redouble", function() {
    //
  });

  // ================================
  it("1.4. Specific Bids", function() {
    //
  });

  // ================================
  it("2.0. Auction - Error", function() {
    //
  });
});
