const expect = require("expect.js");
const { boardGroups } = require("../features/boardGroups.js");
const { testBoardgroupEachBoard } = require("../features/tests.js")

// ================================================================
describe('test/boardGroup - Board Groups', function() {

  it("0.1. Error - boardCnt invalid", function() {
    expect(boardGroups).withArgs(0, 6).to.throwException();
    expect(boardGroups).withArgs(-1, 6).to.throwException();
    expect(boardGroups).withArgs(1.25, 1).to.throwException();
    expect(boardGroups).withArgs(100, 6).to.throwException();
    expect(boardGroups).withArgs("a", 6).to.throwException();
    expect(boardGroups).withArgs("/", 6).to.throwException();
  });

  it("0.2. Error - groupCnt invalid", function() {
    expect(boardGroups).withArgs(10, 0).to.throwException();
    expect(boardGroups).withArgs(10, -1).to.throwException();
    expect(boardGroups).withArgs(10, 1.25).to.throwException();
    expect(boardGroups).withArgs(10, 100).to.throwException();
    expect(boardGroups).withArgs(10, "a").to.throwException();
    expect(boardGroups).withArgs(10, "/").to.throwException();
  });

  it("0.3. Error - groupCnt > boardCnt", function() {
    expect(boardGroups).withArgs(10, 11).to.throwException();
    expect(boardGroups).withArgs(10, 15).to.throwException();
    expect(boardGroups).withArgs(10, 20).to.throwException();
    expect(boardGroups).withArgs(20, 21).to.throwException();
    expect(boardGroups).withArgs(8, 24).to.throwException();
    expect(boardGroups).withArgs(16, 32).to.throwException();
  });

// ================================================================
  it("1.1. Func - correct amount of board groups", function() {
    expect(boardGroups(20,10).length).to.eql(10);
    expect(boardGroups(24,8).length).to.eql(8);
    expect(boardGroups(24,6).length).to.eql(6);
    expect(boardGroups(22,8).length).to.eql(8);
    expect(boardGroups(22,6).length).to.eql(6);
    expect(boardGroups(18,8).length).to.eql(8);
    expect(boardGroups(18,6).length).to.eql(6);
    expect(boardGroups(24,1).length).to.eql(1);
    expect(boardGroups(2,1).length).to.eql(1);
    expect(boardGroups(2,2).length).to.eql(2);
  });

  it("1.2. Func - correct size of board groups", function() {
    expect(boardGroups(20,10)[0].length).to.eql(2);
    expect(boardGroups(24,8)[0].length).to.eql(3);
    expect(boardGroups(24,6)[0].length).to.eql(4);
    expect(boardGroups(22,8)[0].length).to.eql(3);
    expect(boardGroups(22,6)[0].length).to.eql(4);
    expect(boardGroups(18,8)[0].length).to.eql(3);
    expect(boardGroups(18,6)[0].length).to.eql(3);
    expect(boardGroups(24,1)[0].length).to.eql(24);
    expect(boardGroups(2,1)[0].length).to.eql(2);
    expect(boardGroups(2,2)[0].length).to.eql(1);
  });

  it("1.3. Func - correct amount of boards", function() {
    expect(Array.prototype.concat.apply([], boardGroups(28,4)).length).to.eql(28);
    expect(Array.prototype.concat.apply([], boardGroups(24,8)).length).to.eql(24);
    expect(Array.prototype.concat.apply([], boardGroups(20,5)).length).to.eql(20);
    expect(Array.prototype.concat.apply([], boardGroups(25,5)).length).to.eql(25);
    expect(Array.prototype.concat.apply([], boardGroups(16,4)).length).to.eql(16);
    expect(Array.prototype.concat.apply([], boardGroups(17,3)).length).to.eql(17);
    expect(Array.prototype.concat.apply([], boardGroups(24,6)).length).to.eql(24);
    expect(Array.prototype.concat.apply([], boardGroups(2,1)).length).to.eql(2);
    expect(Array.prototype.concat.apply([], boardGroups(2,2)).length).to.eql(2);
  });

  it("1.4. Func - all board numbers", function() {
    expect(testBoardgroupEachBoard(boardGroups(25,5),25)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(24,6),24)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(24,8),24)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(22,11),22)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(2,1),2)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(2,2),2)).to.eql(true);
    expect(testBoardgroupEachBoard(boardGroups(16,4),16)).to.eql(true);

    expect(testBoardgroupEachBoard(boardGroups(25,5),26)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(24,6),23)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(24,8),25)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(22,11),11)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(2,1),1)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(2,2),3)).to.eql(false);
    expect(testBoardgroupEachBoard(boardGroups(16,4),15)).to.eql(false);
  });

  // ================================================================
  it("2.0. Case - Wiki cases", function() {
    // Beginner: 10 Boards
    expect(boardGroups(10,5)[0]).to.eql([0,1]);
    expect(boardGroups(10,5)[1]).to.eql([2,3]);
    expect(boardGroups(10,5)[2]).to.eql([4,5]);
    expect(boardGroups(10,5)[3]).to.eql([6,7]);
    expect(boardGroups(10,5)[4]).to.eql([8,9]);

    // Adv. Beginner: 15 Boards
    expect(boardGroups(15,5)[0]).to.eql([0,1,2]);
    expect(boardGroups(15,5)[1]).to.eql([3,4,5]);
    expect(boardGroups(15,5)[2]).to.eql([6,7,8]);
    expect(boardGroups(15,5)[3]).to.eql([9,10,11]);
    expect(boardGroups(15,5)[4]).to.eql([12,13,14]);

    // Intermediate: 20 Boards
    expect(boardGroups(20,5)[0]).to.eql([0,1,2,3]);
    expect(boardGroups(20,5)[1]).to.eql([4,5,6,7]);
    expect(boardGroups(20,5)[2]).to.eql([8,9,10,11]);
    expect(boardGroups(20,5)[3]).to.eql([12,13,14,15]);
    expect(boardGroups(20,5)[4]).to.eql([16,17,18,19]);

    // Open: 25 Boards
    expect(boardGroups(25,5)[0]).to.eql([0,1,2,3,4]);
    expect(boardGroups(25,5)[1]).to.eql([5,6,7,8,9]);
    expect(boardGroups(25,5)[2]).to.eql([10,11,12,13,14]);
    expect(boardGroups(25,5)[3]).to.eql([15,16,17,18,19]);
    expect(boardGroups(25,5)[4]).to.eql([20,21,22,23,24]);

    // Expert: 30 Boards
    expect(boardGroups(30,5)[0]).to.eql([0,1,2,3,4,5]);
    expect(boardGroups(30,5)[1]).to.eql([6,7,8,9,10,11]);
    expect(boardGroups(30,5)[2]).to.eql([12,13,14,15,16,17]);
    expect(boardGroups(30,5)[3]).to.eql([18,19,20,21,22,23]);
    expect(boardGroups(30,5)[4]).to.eql([24,25,26,27,28,29]);
  });

  it("2.1. Case - boardCnt: 25, groupCnt: 5", function() {
    expect(boardGroups(25,5)[0]).to.eql([0,1,2,3,4]);
    expect(boardGroups(25,5)[1]).to.eql([5,6,7,8,9]);
    expect(boardGroups(25,5)[2]).to.eql([10,11,12,13,14]);
    expect(boardGroups(25,5)[3]).to.eql([15,16,17,18,19]);
    expect(boardGroups(25,5)[4]).to.eql([20,21,22,23,24]);
  });

  it("2.2. Case - boardCnt: 24, groupCnt: 8", function() {
    expect(boardGroups(24,8)[0]).to.eql([0,1,2]);
    expect(boardGroups(24,8)[1]).to.eql([3,4,5]);
    expect(boardGroups(24,8)[2]).to.eql([6,7,8]);
    expect(boardGroups(24,8)[3]).to.eql([9,10,11]);
    expect(boardGroups(24,8)[4]).to.eql([12,13,14]);
    expect(boardGroups(24,8)[5]).to.eql([15,16,17]);
    expect(boardGroups(24,8)[6]).to.eql([18,19,20]);
    expect(boardGroups(24,8)[7]).to.eql([21,22,23]);
  });

  it("2.3. Case - boardCnt: 24, groupCnt: 6", function() {
    expect(boardGroups(24,6)[0]).to.eql([0,1,2,3]);
    expect(boardGroups(24,6)[1]).to.eql([4,5,6,7]);
    expect(boardGroups(24,6)[2]).to.eql([8,9,10,11]);
    expect(boardGroups(24,6)[3]).to.eql([12,13,14,15]);
    expect(boardGroups(24,6)[4]).to.eql([16,17,18,19]);
    expect(boardGroups(24,6)[5]).to.eql([20,21,22,23]);
  });

  it("2.4. Case - boardCnt: 22, groupCnt: 4", function() {
    expect(boardGroups(22,4)[0]).to.eql([0,1,2,3,4,5]);
    expect(boardGroups(22,4)[1]).to.eql([6,7,8,9,10,11]);
    expect(boardGroups(22,4)[2]).to.eql([12,13,14,15,16,17]);
    expect(boardGroups(22,4)[3]).to.eql([18,19,20,21]);
  });

  it("2.5. Case - boardCnt: 9, groupCnt: 4", function() {
    expect(boardGroups(9,4)[0]).to.eql([0,1,2]);
    expect(boardGroups(9,4)[1]).to.eql([3,4]);
    expect(boardGroups(9,4)[2]).to.eql([5,6]);
    expect(boardGroups(9,4)[3]).to.eql([7,8]);
  });

});
