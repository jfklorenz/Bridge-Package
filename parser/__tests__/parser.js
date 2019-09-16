const expect = require("expect.js");
const { pbnParser } = require("../features/parser.js");

// ================================================================
describe('test/parser.js - PBN Parser', function() {

  // ================================================================
  // PBN Parser
  it("0.0. PBN Parser / Input", function() {
    // Input not a PBN File
    
  });

  it("1.0. PBN Parser / Example 1 - Info", async function() {
    // Example 1
    let run = await pbnParser('./parser/__tests__/example.PBN');
    let games = run[0]
    let game1 = games[0];
    let game2 = games[1];
    let info = run[1];
    
    // Number of Games = 2
    expect(games.length).to.eql(2);

    // Info
    expect(info.pbnVersion).to.eql("PBN 1.0");
    expect(info.type).to.eql("EXPORT");
    expect(info.fileCnt).to.eql(2);
    expect(info.fileCnt).to.eql(games.length);
  });

  it("1.1. PBN Parser / Example 1 - Game 1", async function() {
    // Example 1
    let run = await pbnParser('./parser/__tests__/example.PBN');
    let games = run[0]
    let game1 = games[0];
    let game2 = games[1];
    let info = run[1];

    // Game 1
    // Tags - Mandetory
    // 1 - Event
    expect(game1.event).to.eql('Event 1');
    // 2 - Site
    expect(game1.site).to.eql('Site 1');
    // 3 - Date
    expect(game1.date).to.eql('Date 1');
    // 4 - Board
    expect(game1.board).to.eql('Board 1');
    // 5 - West
    expect(game1.west).to.eql('West 1');
    // 6 - North
    expect(game1.north).to.eql('North 1');
    // 7 - East
    expect(game1.east).to.eql('East 1');
    // 8 - South
    expect(game1.south).to.eql('South 1');
    // 9 - Dealer
    expect(game1.dealer).to.eql('Dealer 1');
    // 10 - Vulnerable
    expect(game1.vulnerable).to.eql('Vulnerable 1');
    // 11 - Deal
    expect(game1.deal).to.eql('Deal 1');
    // 12 - Scoring
    expect(game1.score).to.eql('Score 1');
    // 13 - Declarer
    expect(game1.declarer).to.eql('Declarer 1');
    // 14 - Contract
    expect(game1.contract).to.eql('Contract 1');
    // 15 - Result
    expect(game1.result).to.eql('Result 1');
    
    // Tags - Optional
    // Table
    expect(game1.table).to.eql('Table 1');
    // Round
    expect(game1.round).to.eql('Round 1');
    // Room
    expect(game1.room).to.eql('Room 1');
    // HomeTeam
    expect(game1.hometeam).to.eql('HomeTeam 1');    
    // VisitTeam
    expect(game1.visitteam).to.eql('VisitTeam 1');
    // expect(game1.event).to.eql('Auction 1');
    // expect(game1.event).to.eql('Play 1');
    // expect(game1.event).to.eql('* 1');
  });

  it("1.2. PBN Parser / Example 1 - Game 2", async function() {
    // Example 1
    let run = await pbnParser('./parser/__tests__/example.PBN');
    let games = run[0]
    let game1 = games[0];
    let game2 = games[1];
    let info = run[1];

    // Game 2
    // Tags - Mandetory
    // 1 - Event
    expect(game2.event).to.eql('Event 2');
    // 2 - Site
    expect(game2.site).to.eql('Site 2');
    // 3 - Date
    expect(game2.date).to.eql('Date 2');
    // 4 - Board
    expect(game2.board).to.eql('Board 2');
    // 5 - West
    expect(game2.west).to.eql('West 2');
    // 6 - North
    expect(game2.north).to.eql('North 2');
    // 7 - East
    expect(game2.east).to.eql('East 2');
    // 8 - South
    expect(game2.south).to.eql('South 2');
    // 9 - Dealer
    expect(game2.dealer).to.eql('Dealer 2');
    // 10 - Vulnerable
    expect(game2.vulnerable).to.eql('Vulnerable 2');
    // 12 - Deal
    expect(game2.deal).to.eql('Deal 2');
    // 12 - Scoring
    expect(game2.score).to.eql('Score 2');
    // 13 - Declarer
    expect(game2.declarer).to.eql('Declarer 2');
    // 14 - Contract
    expect(game2.contract).to.eql('Contract 2');
    // 15 - Result
    expect(game2.result).to.eql('Result 2');
    
    // Tags - Optional
    // Table
    expect(game2.table).to.eql('Table 2');
    // Round
    expect(game2.round).to.eql('Round 2');
    // Room
    expect(game2.room).to.eql('Room 2');
    // HomeTeam
    expect(game2.hometeam).to.eql('HomeTeam 2');    
    // VisitTeam
    expect(game2.visitteam).to.eql('VisitTeam 2');
    // expect(game2.event).to.eql('Auction 2');
    // expect(game2.event).to.eql('Play 2');
    // expect(game2.event).to.eql('* 2');
  });

// ================================================================
});
