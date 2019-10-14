// ================================================================
// Scoring
function score(level, suit, double, declarer, vulnerability, result) {
  if (![0, 1, 2, 3, 4, 5, 6].includes(level))
    throw Error(`ValueError: level ${level} is invalid`);
  if (![0, 1, 2, 3, 4].includes(suit))
    throw Error(`ValueError: suit ${suit} is invalid`);
  if (![0, 1, 2].includes(double))
    throw Error(`ValueError: double ${double} is invalid`);
  if (![0, 1, 2, 3].includes(declarer))
    throw Error(`ValueError: declarer ${declarer} is invalid`);
  if (![0, 1].includes(vulnerability))
    throw Error(`ValueError: vulnerability ${vulnerability} is invalid`);
  if (
    ![
      [-13, -12, -11, -10, -9],
      [-8, -7, -6, -5, -4, -3, -2],
      [-1, 0, 1, 2, 3, 4, 5, 6]
    ]
      .flat()
      .includes(result)
  )
    throw Error(`ValueError: result ${result} is invalid`);

  // Contract Points
  const points_contract = [
    [[20, 40, 80], [20, 40, 80]],
    [[20, 40, 80], [20, 40, 80]],
    [[30, 60, 120], [30, 60, 120]],
    [[30, 60, 120], [30, 60, 120]],
    [[40, 80, 160], [30, 60, 120]]
  ];

  // Overtrick Points
  const overtrick = [
    [[20, 100, 200], [20, 200, 400]],
    [[20, 100, 200], [20, 200, 400]],
    [[30, 100, 200], [30, 200, 400]],
    [[30, 100, 200], [30, 200, 400]],
    [[30, 100, 200], [30, 200, 400]]
  ];

  // Undertrick Points
  const undertricks = [
    [[50, 50, 50, 50], [100, 200, 200, 300], [200, 400, 400, 600]],
    [[100, 100, 100, 100], [200, 300, 300, 300], [400, 600, 600, 600]]
  ];

  // Bonus Points
  const bonus_game = [[50, 50], [300, 500]];
  const bonus_slam = [[500, 750], [1000, 1500]];
  const bonus_double = [0, 50, 100];

  // calculation
  let points = 0;
  if (result >= 0) {
    if (level == 0) points += points_contract[suit][0][double];
    else if (level > 0) {
      points += points_contract[suit][0][double];
      points += level * points_contract[suit][1][double];
    }

    if (points < 100) points += bonus_game[0][vulnerability];
    else points += bonus_game[1][vulnerability];

    if (level >= 5) points += bonus_slam[level - 5][vulnerability];

    points += bonus_double[double];

    if (result > 0) points += result * overtrick[suit][vulnerability][double];
  } else if (result < 0) {
    for (var i = 0; i < -result; i++) {
      let j = i > 3 ? 3 : i;
      points -= undertricks[vulnerability][double][j];
    }
  }
  return declarer % 2 === 0 ? points : -points;
}

// ================================================================
// Export
module.exports = { score };
