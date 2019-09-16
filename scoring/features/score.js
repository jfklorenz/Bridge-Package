// ================================================================
// Scoring
function score(level, suit, double, declarer, vulnerability, result) {

  // Exceptions
  if (!(level === 0 || level === 1 || level === 2 || level === 3 || level === 4 || level === 5 || level === 6)) throw "level ivnalid";
  if (!(suit === 0 || suit === 1 || suit === 2 || suit === 3 || suit === 4)) throw "suit invalid";
  if (!(double === 0 || double === 1 || double === 2)) throw "double invalid";
  if (!(declarer === 0 || declarer === 1 || declarer === 2 || declarer === 3)) throw "declarer invalid";
  if (!(vulnerability === 0 || vulnerability === 1)) throw "vulnerability invalid";
  if (!(result === -13 || result === -12 || result === -11 || result === -10 || result === -9 || result === -8 || result === -7 || result === -6 || result === -5 || result === -4 || result === -3 || result === -2 || result === -1 || result === 0 || result === 1 || result === 2 || result === 3 || result === 4 || result === 5 || result === 6)) throw "result invalid";

  // Contract Points
  const points_contract = [
        [[20, 40, 80], [20, 40, 80]],
        [[20, 40, 80], [20, 40, 80]],
        [[30, 60, 120], [30, 60, 120]],
        [[30, 60, 120], [30, 60, 120]],
        [[40, 80, 160], [30, 60, 120]],
  ]

  // Overtrick Points
  const overtrick = [
       [[20, 100, 200], [20, 200, 400]],
       [[20, 100, 200], [20, 200, 400]],
       [[30, 100, 200], [30, 200, 400]],
       [[30, 100, 200], [30, 200, 400]],
       [[30, 100, 200], [30, 200, 400]],
  ]

  // Undertrick Points
  const undertricks = [
        [[50, 50, 50, 50], [100, 200, 200, 300], [200, 400, 400, 600]],
        [[100, 100, 100, 100], [200, 300, 300, 300], [400, 600, 600, 600]]
    ]

  // Bonus Points
  const bonus_game = [[50, 50], [300, 500]]
  const bonus_slam = [[500, 750], [1000,1500]]
  const bonus_double = [0, 50, 100]

  // calculation
  let points = 0
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
      
      if (result > 0) points += result*overtrick[suit][vulnerability][double];
      else if (result < 0) {
        for (var i = 0; i < -result; i++) {
            let j = i;
            if (i > 3) j = 3;
            points -= undertricks[vulnerability][double][j];
        }
      }
  if (declarer == 0 || declarer == 1) return points;
  else if (declarer == 2 || declarer == 3) return -points;
}

// ================================================================
// Export
module.exports = { score }
