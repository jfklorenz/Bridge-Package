const expect = require("expect.js");
const Card = require("../features/card.js");
const Hand = require("../features/hand.js");

// ================================================================
describe("test/Hand - A single playing Hand", function() {
  it("2.1. Example - Example 1", function() {
    let hand = new Hand;
    hand.draw([new Card(0), new Card(3), new Card(12), 
              new Card(15), new Card(16), new Card(18), 
              new Card(29), new Card(33), new Card(38), 
              new Card(41), new Card(42), new Card(45), new Card(49)]);

    expect(hand.cardCnt).to.eql(13);
    expect(hand.fullHand).to.eql(true);
  });

  // ================================================================
});
