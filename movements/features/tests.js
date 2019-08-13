// ================================================================
function testPlayedEachPair(movement, pairCnt) {
  let expPairs = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expPairs.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expPairs[i].push(0);
      equ[i].push(1);
    }
  }
  for (var i = 0; i < movement.length; i++) {
    expPairs[movement[i].ns][movement[i].ew - 100] = expPairs[movement[i].ns][movement[i].ew - 100] + 1;
  }

  if (JSON.stringify(expPairs) === JSON.stringify(equ)) {
    return true;
  } else {
    return false;
  }
}

// ================================================================
function testPlayedNoPairTwice(movement, pairCnt) {
  let expPairs = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expPairs.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expPairs[i].push(0);
      equ[i].push(1);
    }
  }
  for (var i = 0; i < movement.length; i++) {
    expPairs[movement[i].ns][movement[i].ew - 100] = expPairs[movement[i].ns][movement[i].ew - 100] + 1;
  }

  for (var i = 0; i < expPairs.length; i++) {
    for (var j = 0; j < expPairs[i].length; j++) {
      if (expPairs[i][j] > equ[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// ================================================================
function testPlayedEachBoardgroup(movement, pairCnt) {
  let expBoardgroups = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expBoardgroups.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expBoardgroups[i].push(0);
      equ[i].push(1);
    }
  }

  for (var i = 0; i < movement.length; i++) {
    expBoardgroups[movement[i].ns][movement[i].boardGroup] = expBoardgroups[movement[i].ns][movement[i].boardGroup] + 1;
  }
  if (JSON.stringify(expBoardgroups) === JSON.stringify(equ)) {
    return true;
  } else {
    return false;
  }
}

// ================================================================
function testPlayedNoBoardgroupTwice(movement, pairCnt) {
  let expBoardgroups = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expBoardgroups.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expBoardgroups[i].push(0);
      equ[i].push(1);
    }
  }

  for (var i = 0; i < movement.length; i++) {
    expBoardgroups[movement[i].ns][movement[i].boardGroup] = expBoardgroups[movement[i].ns][movement[i].boardGroup] + 1;
  }

  for (var i = 0; i < expBoardgroups.length; i++) {
    for (var j = 0; j < expBoardgroups[i].length; j++) {
      if (expBoardgroups[i][j] > equ[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// ================================================================
function testPlayedEachRound(movement, pairCnt) {
  let expRounds = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expRounds.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expRounds[i].push(0);
      equ[i].push(1);
    }
  }
  for (var i = 0; i < movement.length; i++) {
    expRounds[movement[i].ns][movement[i].roundNr] = expRounds[movement[i].ns][movement[i].roundNr] + 1;
  }

  if (JSON.stringify(expRounds) === JSON.stringify(equ)) {
    return true;
  } else {
    return false;
  }
}

// ================================================================
function testPlayedNoRoundTwice(movement, pairCnt) {
  let expRounds = [];
  let equ = [];
  for (var i = 0; i < pairCnt / 2; i++) {
    expRounds.push([]);
    equ.push([]);
    for (var j = 0; j < pairCnt / 2; j++) {
      expRounds[i].push(0);
      equ[i].push(1);
    }
  }
  for (var i = 0; i < movement.length; i++) {
    expRounds[movement[i].ns][movement[i].roundNr] = expRounds[movement[i].ns][movement[i].roundNr] + 1;
  }

  for (var i = 0; i < expRounds.length; i++) {
    for (var j = 0; j < expRounds[i].length; j++) {
      if (expRounds[i][j] > equ[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// ================================================================
function testBoardgroupEachBoard(boardGroup, boardCnt) {
  let boards = Array.prototype.concat.apply([], boardGroup);

  // all boards included
  for (var i = 0; i < boardCnt; i++) {
    if (!(i in boards)) {
      return false;
    }
  }

  // no other boards included
  if (!(boards.length === boardCnt)) {
    return false;
  }
  return true;
}

// ================================================================
module.exports = {
  testPlayedEachPair,
  testPlayedNoPairTwice,
  testPlayedEachBoardgroup,
  testPlayedNoBoardgroupTwice,
  testPlayedEachRound,
  testPlayedNoRoundTwice,
  testBoardgroupEachBoard
}
