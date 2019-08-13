// Function: generating boardGroups and boards
function boardGroups(boardCnt, groupCnt) {
  if (!(boardCnt > 0 && boardCnt < 100 && boardCnt % 1 === 0)) throw "boardCnt invalid";
  if (!(groupCnt > 0 && groupCnt < 100 && groupCnt % 1 === 0)) throw "GroupCnt invalid";
  if (!(boardCnt >= groupCnt)) throw "boardCnt - groupCnt ratio invalid";
  let boards = [];

  if (Math.ceil(boardCnt/Math.ceil(boardCnt/groupCnt)) === groupCnt) {
    for (var i = 0; i < groupCnt; i++) {
      boards.push([]);
    };

    for (var i = 0; i < boardCnt; i++) {

      let quot = Math.floor(i / (Math.ceil(boardCnt / groupCnt)));
      boards[quot].push(i);
    }
  } else if (Math.ceil(boardCnt/Math.ceil(boardCnt/groupCnt)) < groupCnt) {
    for (var i = 0; i < groupCnt; i++) {
      boards.push([]);
    };

    for (var i = 0; i < boardCnt; i++) {
      let quot = Math.floor(i / (boardCnt / groupCnt));
      boards[quot].push(i);
    }
  } else {
    throw "algorithm selection invalid";
  }
  return boards;
}


// Function: [[]]
function boardGroups1(boardCnt, groupCnt) {

  if (!(boardCnt > 0 && boardCnt < 100 && boardCnt % 1 === 0)) throw "boardCnt invalid";
  if (!(groupCnt > 0 && groupCnt < 100 && groupCnt % 1 === 0)) throw "GroupCnt invalid";
  if (!(boardCnt >= groupCnt)) throw "boardCnt - groupCnt ratio invalid";
  let boards = [];

  for (var i = 0; i < groupCnt; i++) {
    boards.push([]);
  };

  for (var i = 0; i < boardCnt; i++) {

    let quot = Math.floor(i / (Math.ceil(boardCnt / groupCnt)));
    boards[quot].push(i);
  }
  return boards;
}

// Function: [[1,2,3],[4,5],[6,7],[8,9]]
function boardGroups2(boardCnt, groupCnt) {

  if (!(boardCnt > 0 && boardCnt < 100 && boardCnt % 1 === 0)) throw "boardCnt invalid";
  if (!(groupCnt > 0 && groupCnt < 100 && groupCnt % 1 === 0)) throw "GroupCnt invalid";
  if (!(boardCnt >= groupCnt)) throw "boardCnt - groupCnt ratio invalid";
  let boards = [];

  for (var i = 0; i < groupCnt; i++) {
    boards.push([]);
  };

  for (var i = 0; i < boardCnt; i++) {
    let quot = Math.floor(i / (boardCnt / groupCnt));
    boards[quot].push(i);
  }
  return boards;
}

// Export
module.exports = {
  boardGroups,
  boardGroups1,
  boardGroups2
}
