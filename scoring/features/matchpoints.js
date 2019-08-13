// List of Scores -> List of matchpoints, respectively
function scoresToMatchpoints(scores) {

  let matchpoints_up = []
  let matchpoints_priv = []
  let matchpoints = []

  for (var a = 0; a < scores.length; a++) {
    matchpoints_up.push(2 * scores.length - 2 * (a + 1));
    matchpoints_priv.push([0, 0]);
    matchpoints.push(0)
  }

  for (var i = 0; i < matchpoints.length; i++) {
      for (var j = 0; j < scores.length; j++) {
          if (i != j) {
              if (scores[i] < scores[j]) {
                matchpoints_priv[i][0] += 1
              } else if (scores[i] == scores[j]) {
                matchpoints_priv[i][1] += 1
              }
          }
      }
  }

  for (var i = 0; i < matchpoints.length; i++) {
      if (matchpoints_priv[i][1] == 0) {
          matchpoints[i] = matchpoints_up[matchpoints_priv[i][0]]
      } else {
          for (var j = 0; j < matchpoints_priv[i][1] + 1; j++) {
              matchpoints[i] += matchpoints_up[matchpoints_priv[i][0] + j]
          }
          matchpoints[i] = Math.round(100 * matchpoints[i] / (matchpoints_priv[i][1] + 1)) / 100
      }
  }
  return matchpoints
}

// List of matchpoints -> list of percentages, respectively
function matchpointsToPercentages(matchpoints) {
  let matchpoints_perc = []
  if (matchpoints.length == 0) {
    matchpoints_perc = []
  } else if (matchpoints.length === 1) {
    matchpoints_perc = [50];
  } else {
    for (var r = 0; r < matchpoints.length; r++) {
        matchpoints_perc.push([0, 0])
    }

    for (var k = 0; k < matchpoints_perc.length; k++) {
        matchpoints_perc[k] = Math.round(100 * 100 * matchpoints[k] / (2 * matchpoints.length - 2)) / 100
    }
  }

  return matchpoints_perc
}

// List of matchpoints -> list of corresponding matchpoints, regarding ns/ew
function matchpointsReverse(matchpoints) {
  if (matchpoints == []) {
    return []
  }
  let len = matchpoints.length;
  let sum = matchpoints.reduce((pv, cv) => pv + cv, 0);
  let reverses = [];
  for (i = 0; i < len; i++) {
    reverse = 2 * sum / len;
    reverses.push(reverse - matchpoints[i]);
  }
  return reverses
}

// In progress...
function matchpointsLeaderboard(matchpointsPerBoard) {
  let matchpoints = [];
  let matchpointsMax = 0;
  let leaderboard = [];
  let boardCnt = matchpointsPerBoard.length;
  let pairCnt = matchpointsPerBoard[0].length;

  for (var i = 0; i < pairCnt; i++) {
    leaderboard.push([i, 0, 0])
  }

  for (var i = 0; i < boardCnt; i++) {
    matchpointsMax = matchpointsMax + pairCnt - 2;
  }

  for (var i = 0; i < boardCnt; i++) {
    for (var j = 0; j < pairCnt; j++) {
      leaderboard[j][1] = leaderboard[j][1] + matchpointsPerBoard[i][j]
    }
  }

  for (var i = 0; i < pairCnt; i++) {
    leaderboard[i][2] = Math.round(10000 * leaderboard[i][1] / matchpointsMax) / 100;
  }

  leaderboard = leaderboard.sort(function(a,b){return b[1] - a[1];});
  return leaderboard
}

// Exports
module.exports = {
  scoresToMatchpoints,
  matchpointsToPercentages,
  matchpointsReverse,
  matchpointsLeaderboard
}
