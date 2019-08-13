const { boardGroups } = require("../features/boardGroups.js");
const { mod } = require("../features/modulo.js");

// ================================================================
function mitchell_skip(pairCnt, boardCnt) {

  const tableCnt = Math.ceil(pairCnt / 2);

  if (!(pairCnt % 1 === 0)) throw "pairCnt must be Integer";
  if (!(pairCnt > 0)) throw "pairCnt must be larger than 0";
  if (!(pairCnt < 300)) throw "pairCnt must be smaller than 300";

  if (!(boardCnt % 1 === 0)) throw "boardCnt must be Integer";
  if (!(boardCnt > 0)) throw "boardCnt must be larger than 0";
  if (!(boardCnt < 100)) throw "boardCnt must be smaller than 100";

  if (!(tableCnt % 1 == 0)) throw "tableCnt must be Integer";
  if (!(tableCnt % 2 === 1)) throw "tableCnt must be even";

  const roundCnt = tableCnt;

  let movement = [];
  for (var t = 0; t < tableCnt; t++) {
    for (var r = 0; r < roundCnt; r++) {
      if (tableCnt % 2 == 0 && roundCnt / 2 == r) {
        continue
      } else {
        movement.push({
          tableNr: t,
          roundNr: r,
          ns: t,
          ew: mod(t - r, tableCnt) + 100,
          boardGroup: (t + r) % tableCnt,
          boards: boardGroups(boardCnt, tableCnt)[(t + r) % tableCnt]
        });
      }
    }
  }
  return movement;
}

// ================================================================
module.exports = {
  mitchell_skip
}
