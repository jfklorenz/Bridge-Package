const { boardGroups } = require("../features/boardGroups.js");
const { mod } = require("../features/modulo.js");

// ================================================================
function mitchell_crisscross(pairCnt, boardCnt) {

  let tableCnt = Math.ceil(pairCnt / 2);

  if (!(pairCnt % 1 === 0)) throw "pairCnt must be Integer";
  if (!(pairCnt > 0)) throw "pairCnt must be positive";
  if (!(pairCnt < 300)) throw "pairCnt must be smaller than 300";

  if (!(tableCnt % 1 === 0)) throw "tableCnt must be Integer";
  if (!(tableCnt % 4 === 0)) throw "tableCnt must a multiple of 4";
  if (!(tableCnt > 0)) throw "tableCnt must be positive";
  if (!(tableCnt <= 150)) throw "tableCnt must be 150 or smaller";

  if (!(boardCnt % 1 === 0)) throw "boardCnt must be Integer";
  if (!(boardCnt > 0)) throw "boardCnt must be positive";
  if (!(boardCnt < 100)) throw "boardCnt must be smaller than 100";

  let movement = [];
  for (var t = 0; t <  tableCnt; t++) {
    for (var r = 0; r < tableCnt; r++) {
      if (r < tableCnt / 2) {
        if ((t + r) % 2 == 0) {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t + r, tableCnt) + 100,
            boardGroup: mod(t - r, tableCnt),
            boards: boardGroups(boardCnt, tableCnt)[mod(t - r, tableCnt)]
          })
        } else {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t - r, tableCnt) + 100,
            boardGroup: mod(t + r, tableCnt),
            boards: boardGroups(boardCnt, tableCnt)[mod(t + r, tableCnt)]
          })
        }
      } else {
        let r2 = r % (tableCnt / 2);

        if ((t + r) % 2 == 0) {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t + r, tableCnt) + 100,
            boardGroup: mod(t - r + (tableCnt - 2) / 2, tableCnt),
            boards: boardGroups(boardCnt, tableCnt)[mod(t - r + (tableCnt - 2) / 2, tableCnt)]
          })
        } else {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t - r, tableCnt) + 100,
            boardGroup: mod(t + r - (tableCnt - 2) / 2, tableCnt),
            boards: boardGroups(boardCnt, tableCnt)[mod(t + r - (tableCnt - 2) / 2, tableCnt)]
          })
        }
      }
    }
  }

  return movement;
}

// ================================================================
module.exports = {
  mitchell_crisscross
}
