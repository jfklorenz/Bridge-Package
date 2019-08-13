const { boardGroups } = require("../features/boardGroups.js");
const { mod } = require("../features/modulo.js");

// ================================================================
function mitchell_twostanza(pairCnt, boardCnt, breakNr = null) {

  let tableCnt = Math.ceil(pairCnt / 2);

  if (breakNr == null) {
    breakNr = Math.floor(tableCnt / 2);
  }

  if (!(breakNr % 1 === 0)) throw "breakNr must be Integer";
  if (!(breakNr <= tableCnt)) throw "breakNr must be smaller than tableCnt/roundCnt";
  if (!(breakNr > 0)) throw "breakNr must be larger than 0";

  if (!(pairCnt % 1 === 0)) throw "pairCnt must be Integer";
  if (!(pairCnt > 0)) throw "pairCnt must be larger than 0";
  if (!(pairCnt < 100)) throw "pairCnt must be smaller than 100";

  if (!(boardCnt % 1 === 0)) throw "boardCnt must be Integer";
  if (!(boardCnt > 0)) throw "boardCnt must be larger than 0";
  if (!(boardCnt < 100)) throw "boardCnt must be smaller than 100";

  if (!(tableCnt % 1 === 0)) throw "tableCnt must be Integer";
  if (!(tableCnt > 0)) throw "tableCnt must be larger than 0";
  if (!(tableCnt <= 50)) throw "tableCnt must be 50 or smaller";
  if (!(tableCnt % 2 === 0)) throw "tableCnt must be even";
  if (!(tableCnt % 4 != 0 || tableCnt === 8 || tableCnt === 12) && tableCnt % 2 === 0) throw "tableCnt can not be a multiple of 4, except for 8 and 12";

  let movement = [];
  if (tableCnt == 8) {
    for (var r = 0; r < tableCnt; r++) {
      for (var t = 0; t < tableCnt; t++) {
        let skip = 0;
        if (r > 3) {
          skip = 1;
        }
        movement.push({
          tableNr: t,
          roundNr: r,
          ns: t,
          ew: mod(t - 2*r - skip, tableCnt) + 100,
          boardGroup: mod(t + r , breakNr) + breakNr * Math.floor(r / breakNr),
          boards: boardGroups(boardCnt, tableCnt)[mod(t + r , breakNr) + breakNr * Math.floor(r / breakNr)]
        });
      }
    }
  } else if (tableCnt == 12) {
    for (var r = 0; r < tableCnt; r++) {
      for (var t = 0; t < tableCnt; t++) {
        let skip = 0;
        if (r > 2) {
          skip = 3;
        }
        if (r > 8) {
          skip = 6;
        }
        movement.push({
          tableNr: t,
          roundNr: r,
          ns: t,
          ew: mod(t - r - skip, tableCnt) + 100,
          boardGroup: mod(t + r , breakNr) + breakNr * Math.floor(r / breakNr),
          boards: boardGroups(boardCnt, tableCnt)[mod(t + r , breakNr) + breakNr * Math.floor(r / breakNr)]
        });
      }
    }
  } else if (tableCnt % 2 == 0) {
    for (var r = 0; r < tableCnt; r++) {
      for (var t = 0; t < tableCnt; t++) {
        if (r < breakNr) {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t - r, tableCnt) + 100,
            boardGroup: mod(t + r , breakNr),
            boards: boardGroups(boardCnt, tableCnt)[mod(t + r , breakNr)]
          });
        } else if (r >= breakNr) {
          movement.push({
            tableNr: t,
            roundNr: r,
            ns: t,
            ew: mod(t - r, tableCnt) + 100,
            boardGroup: breakNr + mod(t + r , tableCnt - breakNr),
            boards: boardGroups(boardCnt, tableCnt)[breakNr + mod(t + r , tableCnt - breakNr)]
          });
        }
      }
    }
  }
  return movement;
}

// ================================================================
module.exports = {
  mitchell_twostanza
}
