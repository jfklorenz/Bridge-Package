const { boardGroups } = require("../features/boardGroups.js");
const { mod } = require("../features/modulo.js");

// ================================================================
function mitchell(pairCnt, boardCnt) {
  let tableCnt = Math.ceil(pairCnt / 2);

  if (!(pairCnt % 1 === 0)) throw "pairCnt must be Integer";
  if (!(pairCnt > 0)) throw "pairCnt > 0!";
  if (!(pairCnt < 300)) throw "pairCnt < 300!";

  if (!(boardCnt % 1 === 0)) throw "boardCnt must be Integer";
  if (!(boardCnt > 0)) throw "boardCnt > 0!";
  if (!(boardCnt < 100)) throw "boardCnt < 100!";

  if (!(tableCnt % 1 == 0)) throw "tableCnt must be Integer";
  if (!(tableCnt % 2 === 1)) throw "tableCnt % 2 == 0!";

  let movement = [];
  for (var t = 0; t < tableCnt; t++ ) {
    for (var r = 0; r < tableCnt; r++) {
        movement.push({
          tableNr: t,
          roundNr: r,
          ns: t,
          ew: mod(t - r, tableCnt) + 100,
          boardGroup: mod(t + r , tableCnt),
          boards: boardGroups(boardCnt, tableCnt)[mod(t + r , tableCnt)]
      });
    }
  }
  return movement;
}

// ================================================================
module.exports = {
  mitchell
}
