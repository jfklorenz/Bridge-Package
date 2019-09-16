const expect = require("expect.js");
const { pbnParser } = require("../features/parser.js");

// ================================================================
describe('test/parser.js - PBN Parser', function() {

  // ================================================================
  // PBN Parser
  it("1.0. PBN Parser / Input", function() {
    // Input not a PBN File

  });

  it("1.1. PBN Parser / Example 1", async function() {
    // Example 1
    let run = await pbnParser('./parser/__tests__/example.PBN');
    let games = run[0]
    let game1 = games[0];
    let game2 = games[1];
    let info = run[1];
    
    // Number of Games : 2
    expect(games.length).to.eql(2);

    // Info
    expect(info.pbnVersion).to.eql("PBN 1.0");
    expect(info.type).to.eql("EXPORT");
    expect(info.fileCnt).to.eql(2);
    expect(info.fileCnt).to.eql(games.length);

    // Game 1
    expect(game1.event).to.eql('Event 1');
    expect(game1.site).to.eql('Site 1');
    expect(game1.date).to.eql('Date 1');
    expect(game1.board).to.eql('Board 1');
    expect(game1.north).to.eql('North 1');
    expect(game1.east).to.eql('East 1');
    expect(game1.south).to.eql('South 1');
    expect(game1.west).to.eql('West 1');
    expect(game1.dealer).to.eql('Dealer 1');
    expect(game1.vulnerable).to.eql('Vulnerable 1');
    expect(game1.deal).to.eql('Deal 1');
    expect(game1.declarer).to.eql('Declarer 1');
    expect(game1.contract).to.eql('Contract 1');
    expect(game1.result).to.eql('Result 1');
    expect(game1.hometeam).to.eql('HomeTeam 1');
    expect(game1.room).to.eql('Room 1');
    expect(game1.round).to.eql('Round 1');
    expect(game1.event).to.eql('Score 1');
    expect(game1.event).to.eql('Table 1');
    expect(game1.event).to.eql('VisitTeam 1');
    // expect(game1.event).to.eql('Auction 1');
    // expect(game1.event).to.eql('Play 1');
    // expect(game1.event).to.eql('* 1');

    // Game 2
    expect(game2.event).to.eql('Event 2');
    expect(game2.site).to.eql('Site 2');
    expect(game2.date).to.eql('Date 2');
    expect(game2.board).to.eql('Board 2');
    expect(game2.north).to.eql('North 2');
    expect(game2.east).to.eql('East 2');
    expect(game2.south).to.eql('South 2');
    expect(game2.west).to.eql('West 2');
    expect(game2.dealer).to.eql('Dealer 2');
    expect(game2.vulnerable).to.eql('Vulnerable 2');
    expect(game2.deal).to.eql('Deal 2');
    expect(game2.declarer).to.eql('Declarer 2');
    expect(game2.contract).to.eql('Contract 2');
    expect(game2.result).to.eql('Result 2');
    expect(game2.hometeam).to.eql('HomeTeam 2');
    expect(game2.room).to.eql('Room 2');
    expect(game2.round).to.eql('Round 2');
    expect(game2.event).to.eql('Score 2');
    expect(game2.event).to.eql('Table 2');
    expect(game2.event).to.eql('VisitTeam 2');
    // expect(game2.event).to.eql('Auction 2');
    // expect(game2.event).to.eql('Play 2');
    // expect(game2.event).to.eql('* 2');

  });


// ================================================================
});
