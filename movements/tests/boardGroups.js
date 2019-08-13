const expect = require("expect.js");
const BoardGroups = require("../features/boardGroups.js");

// ================================================================
describe('test/boardGroup - Correct initialization of board groups', function() {

  it("0.1. Error - boardCnt invalid", function() {
    expect(new BoardGroups).withArgs(0, 6).to.throwException();
    expect(new BoardGroups).withArgs(-1, 6).to.throwException();
    expect(new BoardGroups).withArgs(1.25, 6).to.throwException();
    expect(new BoardGroups).withArgs(300, 6).to.throwException();
    expect(new BoardGroups).withArgs(301, 6).to.throwException();
    expect(new BoardGroups).withArgs("a", 6).to.throwException();
    expect(new BoardGroups).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - groupCnt invalid", function() {
    expect(BoardGroups).withArgs(0, 6).to.throwException();
    expect(BoardGroups).withArgs(-1, 6).to.throwException();
    expect(BoardGroups).withArgs(1.25, 6).to.throwException();
    expect(BoardGroups).withArgs(300, 6).to.throwException();
    expect(BoardGroups).withArgs(301, 6).to.throwException();
    expect(BoardGroups).withArgs("a", 6).to.throwException();
    expect(BoardGroups).withArgs("/", 6).to.throwException();
  });

  it("0.3. Error - boardCnt - groupCnt ratio invalid", function() {
    expect(BoardGroups).withArgs(6, 7).to.throwException();
    expect(BoardGroups).withArgs(5, 10).to.throwException();
    expect(BoardGroups).withArgs(12, 24).to.throwException();
    expect(BoardGroups).withArgs(10, 21).to.throwException();
    expect(BoardGroups).withArgs(13, 15).to.throwException();
    expect(BoardGroups).withArgs(6, 18).to.throwException();
    expect(BoardGroups).withArgs(18, 24).to.throwException();
  });

// ================================================================
  it("1.1. Func - exactly boardCnt amount of boards", function () {
    let boardCnt = 15;
    let groupCnt = 5;
    let boards = new BoardGroups(boardCnt, groupCnt).flat(Infinity);

    expect(boards.length).to.eql(boardCnt);
    for (var i; i < boardCnt; i++) {
      expect(boards[i]).to.eql(i);
    }
  });

  it("1.2. Func - correct group sizes / max 1 group size off", function() {
    let boardCnt = 15;
    let groupCnt = 5;
    let boards = new BoardGroups(boardCnt, groupCnt);

    let groupSizeCnt = 0;
    let groupSize = false;
    for (var i = 0; i < boards.length; i++) {
      if (boards[i].length === Math.ceil(boardCnt / groupCnt)) {
        groupSize = groupSize + 1;
      }
    }
    if (groupSizeCnt === groupCnt || groupSizeCnt === groupCnt - 1) {
      groupSize = true;
    }

    expect(groupSize).to.eql(true);
  });

// ================================================================
  it("2.1. Case - Deals: 15, Group: 1", function() {
    expect(new BoardGroups(15, 5).boards[0]).to.eql([0,1,2])
  });

  it("2.2. Case - Deals: 25, Group: 4", function() {
    expect(new BoardGroups(25, 5).boards[3]).to.eql([15,16,17,18,19])
  });

  it("2.3. Case - Deals: 30, Group: 5", function() {
    expect(new BoardGroups(30, 5).boards[4]).to.eql([24,25,26,27,28,29])
  });

  it("2.4. Case - Deals: 20, Group: 2", function() {
    expect(new BoardGroups(20, 5).boards[1]).to.eql([4,5,6,7])
  });

  it("2.5. Case - Deals: 10, Group: 3", function() {
    expect(new BoardGroups(10, 5).boards[2]).to.eql([4,5])
  });

});
