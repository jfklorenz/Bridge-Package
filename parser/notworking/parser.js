const expect = require("expect.js");
const { pbnParser } = require("../features/parser.js");

// ================================================================
describe('test/parser.js - PBN Parser', function() {

  // ================================================================
  // PBN Parser
  it("1.0. PBN Parser / Input", function() {
    // Input not a PBN File
  });

  it("1.1. PBN Parser / Example", function() {
    // Example 1
    let run = pbnParser('example.PBN');
    console.log(run);
    let game1 = run[0][0];
    let game2 = run[0][1];
    let info = run[1];
    // Game 1
    expect(game1.event).to.eql('Event 1');
  });


// ================================================================
});
