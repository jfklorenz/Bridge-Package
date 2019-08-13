const { boardGroups } = require("../features/boardGroups.js");
const { mod } = require("../features/modulo.js");

// ================================================================
function mitchell_extendedhesitation(boardCnt) {
  let tableCnt = 3;
  let pairCnt = 6;

  if (!(boardCnt % 1 === 0)) throw "boardCnt must be Integer";
  if (!(boardCnt > 0)) throw "boardCnt > 0!";
  if (!(boardCnt < 100)) throw "boardCnt < 100!";

  let movement = [];
  const template = [[[0,3,0],[0,2,1],[0,5,2],[0,4,3],[0,1,4]],
                    [[1,4,2],[1,3,3],[2,1,0],[5,1,1],[3,5,4]],
                    [[2,5,3],[5,4,0],[4,3,1],[3,2,2],[0,1,4]]]

  for (var t = 0; t < tableCnt; t++ ) {
    for (var r = 0; r < tableCnt; r++) {
        movement.push({
          tableNr: t,
          roundNr: r,
          ns: template[t][r][0],
          ew: template[t][r][1],
          boardGroup: template[t][r][2],
          boards: boardGroups(boardCnt, tableCnt + 1)[template[t][r][2]]
      });
    }
  }
  return movement;
}

// ================================================================
module.exports = {
  mitchell_extendedhesitation
}
