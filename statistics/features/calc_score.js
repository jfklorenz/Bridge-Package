function calc_score() {

  var result = document.getElementById("score-res");
  var points = 0;

  var level_html = document.getElementById("score-sel-level");
  var level = level_html.options[level_html.selectedIndex].value;

  var suit_html = document.getElementById("score-sel-suit");
  var suit = suit_html.options[suit_html.selectedIndex].value;

  var double_html = document.getElementById("score-sel-double");
  var double = double_html.options[double_html.selectedIndex].value;

  var vul_html = document.getElementById("score-sel-vul");
  var vul = vul_html.options[vul_html.selectedIndex].value;

  var pme_html = document.getElementById("score-sel-pme");
  var pme = pme_html.options[pme_html.selectedIndex].value;

  var score_html = document.getElementById("score-sel-score");
  var score = score_html.options[score_html.selectedIndex].value;

  var range = score;

  score = score * pme;

  var points_contract = [
      [[20, 40, 80], [20, 40, 80]],
      [[20, 40, 80], [20, 40, 80]],
      [[30, 60, 120], [30, 60, 120]],
      [[30, 60, 120], [30, 60, 120]],
      [[40, 80, 160], [30, 60, 120]]

    ];

  var overtrick = [
      [[20, 100, 200], [20, 200, 400]],
      [[20, 100, 200], [20, 200, 400]],
      [[30, 100, 200], [30, 200, 400]],
      [[30, 100, 200], [30, 200, 400]],
      [[30, 100, 200], [30, 200, 400]]
    ];

  var undertricks = [
      [[50, 50, 50, 50], [100, 200, 200, 300], [200, 400, 400, 600]],
      [[100, 100, 100, 100], [200, 300, 300, 300], [400, 600, 600, 600]]
    ];

  var bonus_game = [[50, 50], [300, 500]];
  var bonus_slam = [[500, 750], [1000, 1500]];
  var bonus_double = [0, 50, 100];

  /* CALCULATION */
  /*  CALC: WIN */


  if (score >= 0) {
    if (level == 1) {
      points = points + points_contract[suit][0][double];
    } else if (level > 1) {
      points = points + points_contract[suit][0][double]
      points = points + (level - 1) * points_contract[suit][1][double]
    }

    if (points < 100) {
      points = points + bonus_game[0][vul];
    } else {
      points = points + bonus_game[1][vul];
    }
    if (level >= 6) {
      points = points + bonus_slam[level - 6][vul];
    }
    points = points + bonus_double[double];
    if (score > 0) {
      points = points + score*overtrick[suit][vul][double];
    }
  } else if (score < 0) {
    score = -score;
    for (i=0; i < score; i++) {
      if (i > 4) {
        i = 4;
      }
      points = points - undertricks[vul][double][i]
    }
  }

  var res = "<p class='center'>Kontrakt : ";


  if (level == 0) {
    res = "<font color='green'>Pass</font> : 0";
  } else {
    res = res + level;
    if (suit == 0) {
      res = res + "&#9827;";
    } else if (suit == 1) {
      res = res + "<font color='red'>&#9830;</font>";
    } else if (suit == 2) {
      res = res + "<font color='red'>&#9829;</font>";
    } else if (suit == 3) {
      res = res + "&spades;";
    } else if (suit == 4) {
      res = res + "NT";
    }
    res = res + " ";
    if (double == 1) {
      res = res + "<font color='red'>X</font> ";
    } else if (double == 2) {
      res = res + "<font color='blue'>XX</font> ";
    }
    res = res + " ";
    if (score == 0 || pme == 0) {
      res = res + "=";
    } else if (pme > 0) {
      res = res + "+" + score;
    } else if (pme < 0) {
      res = res + "-" + score;
    }
    res = res + "<br><p class='center'>";
    if (vul == 0) {
      res = res + "<font color='green'>Nicht in Gefahr</font>";
    } else if (vul == 1) {
      res = res + "<font color='red'>In Gefahr</font>";
    }
    res = res + "</p>";
    res = res + "</p><hr><p class='center'>Score : " + points;

  }
  res = res + "</p>";


  if (range + level > 7) {
    res = "<p class='center'>Dieser Kontrakt ist möglich.</p>";
    res = res + "<p class='center'>Die Anzahl der Stiche kann nicht größer als 13 sein."
  }

  result.innerHTML = res;

}
