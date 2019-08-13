function calc_nt() {

  var result = document.getElementById("res_nt");
  var res = "<h2>1NT - Check</h2><hr>";

  /* User Input */
  var spades = document.getElementById("hand_S").value;
  var hearts = document.getElementById("hand_H").value;
  var diamonds = document.getElementById("hand_D").value;
  var clubs = document.getElementById("hand_C").value;
  var lst_suit = [spades, hearts, diamonds, clubs];
  var lst_len = [0, 0, 0, 0];
  var lst_hcp_f = [0, 0, 0, 0];
  var hcp_f = 0;
  var lst_hcp_z = [0, 0, 0, 0];
  var hcp_z = 0;
  var lst_hcp = [0, 0, 0, 0];
  var hcp = 0;
  var lst_tip = ["", "", "", ""];
  var lst_nt = [false, false, false, false];
  var lst_nt_s = ["", "", "", ""];
  var com = "";


  cm = "<font color='green'><i class='fas fa-check'></i></font>";
  xm = "<font color='red'><i class='fas fa-times'></i></font>";

  /* CHECK: INPUT */

    /* REPLACE: EMPTY */
    for (i = 0; i < 4; i++) {
      lst_suit[i] = lst_suit[i].replace(/ /g, "");
    };

    /* REPLACE: 10 -> T */
    for (i = 0; i < 4; i++) {
      if (lst_suit[i].includes("10")) {
        lst_suit[i] = lst_suit[i].replace("10", "T");
      }
    };

    /* CHECK: Correct Chars */
    var check_char = true;
    var lst_char = ["A", "a", "K", "k", "Q", "q", "J", "j", "D", "d", "B", "b", "1", "0", "T", "9", "8", "7", "6", "5", "4", "3", "2", "X", "x"];

    for (i = 0; i < 4; i++) {
        for (j = 0; j < lst_suit[i].length; j++) {
            if (lst_char.includes(lst_suit[i].charAt(j))) {

            } else {
              check_char = false;
            }
        }
    };

    /* TRANSFORM: Input */
    for (i = 0; i < 4; i++) {
      lst_suit[i] = lst_suit[i].toUpperCase();
    };

    for (i = 0; i < 4; i++) {
      lst_suit[i] = lst_suit[i].replace("D", "Q");
      lst_suit[i] = lst_suit[i].replace("B", "J");
    };

    for (i = 0; i < 4; i++) {
      lst_len[i] = lst_suit[i].length;
    };



    /* CHECK: Input Length */
    var check_len = 0;
    for (i = 0; i < 4; i++) {
      check_len = check_len + lst_len[i];
    };

    /* CHECK: Distribution */
    var check_dist = false;
    var d = lst_len.toString();
    if (d == "4,3,3,3" || d == "3,4,3,3" || d == "3,3,4,3" || d == "3,3,3,4" ||
        d == "4,4,3,2" || d == "4,4,2,3" || d == "4,3,4,2" || d == "4,2,4,3" ||
        d == "4,3,2,4" || d == "4,2,3,4" || d == "3,4,4,2" || d == "2,4,4,3" ||
        d == "3,4,2,4" || d == "2,4,3,4" || d == "3,2,4,4" || d == "2,3,4,4" ||
        d == "3,3,5,2" || d == "3,2,5,3" || d == "2,3,5,3" || d == "3,3,2,5" ||
        d == "3,2,3,5" || d == "2,3,3,5") {
          check_dist = true;
      } else {
        check_dist = false
      }


    /* CALCULATION */
    /* HIGH CARD POINTS */
    dict_hcp = {"A": 4, "K": 3, "Q": 2, "J": 1, "T":0, "9": 0, "8": 0, "7": 0,
                "6": 0, "5": 0, "4": 0, "3": 0, "2": 0};

    for (i = 0; i < 4; i++) {
        for (j = 0; j < lst_suit[i].length; j++) {
            lst_hcp_f[i] = lst_hcp_f[i] + dict_hcp[lst_suit[i].charAt(j)];
        }
    };



    /* CALC: Final */
    for (i = 0; i < 4; i++) {
      hcp_f = hcp_f + lst_hcp_f[i];
    };

    for (i = 0; i < 4; i++) {
      hcp_z = hcp_z + lst_hcp_z[i];
    };

    for (i = 0; i < 4; i++) {
      lst_hcp[i] = lst_hcp_f[i] + lst_hcp_z[i];
    };

    for (i = 0; i < 4; i++) {
      hcp = hcp + lst_hcp[i];
    };







    if (hcp >= 13 && hcp <= 15 && check_dist) {
      lst_nt[0] = true;
    }
    if (hcp >= 14 && hcp <= 16 && check_dist) {
      lst_nt[1] = true;
    }
    if (hcp >= 15 && hcp <= 17 && check_dist) {
      lst_nt[2] = true;
    }
    if (hcp >= 16 && hcp <= 18 && check_dist) {
      lst_nt[3] = true;
    }

    for (i = 0; i < 4; i++) {
      if (lst_nt[i]) {
        lst_nt_s[i] = cm;
      } else {
        lst_nt_s[i] = xm;
      }
    };

    var reason_1 = "";
    var reason_2 = "";

    if (check_dist == false && hcp < 13) {
      reason_1 = "Für eine 1NT Eröffnung benötigen Sie eine ausgeglichene Verteilung.";
      reason_2 = "Des Weiteren besitzt diese Hand nicht genug Punkte für eine 1NT Eröffnung.";
    } else if (check_dist == false && hcp > 18) {
      reason_1 = "Für eine 1NT Eröffnung benötigen Sie eine ausgeglichene Verteilung.";
      reason_2 = "Des Weiteren ist diese Hand auch so zu stark für eine 1NT Eröffnung. Man sollte eher überlegen, diese Hand mit einem Stärkegebot wie 2&#9827; zu eröffnen.";
    } else if (check_dist == false) {
      reason_1 = "Für eine 1NT Eröffnung benötigen Sie eine ausgeglichene Verteilung.";
      reason_2 = "";
    } else if (check_dist == true) {
      if (hcp < 13) {
        reason_1 = "Diese Hand ist definitiv zu schwach, um sie mit 1NT eröffnen zu können.";
      } else if (hcp < 14) {
        reason_1 = "Diese Hand eignet sich gerade noch, um sie als 1NT mit 13-15 Punkten zu eröffnen.";
        reason_2 = "Für alle anderen 1NT Eröffnungen ist diese Hand zu schwach.";
      } else if (hcp >= 14 && hcp < 15) {
        reason_1 = "Diese Hand kann man als 1NT mit 13-15 oder 14-16 Punkten eröffnen.";
        reason_2 = " Für alle anderen 1NT Eröffnungen ist diese Hand zu schwach.";
      } else if (hcp >= 15 && hcp < 16) {
        reason_1 = "Diese Hand kann man als 1NT mit 14-16 oder 15-17 Punkten eröffnen.";
        reason_2 = "Für alle anderen 1NT Eröffnungen ist diese Hand entweder zu stark oder schwach.";
      } else if (hcp == 16) {
        reason_1 = "DieseHand kann man als 1NT mit 14-16, 15-17 oder 16-18 Punkten eröffnen.";
        reason_2 = "Für alle anderen 1NT Eröffnungen ist diese Hand zu stark.";
      } else if (hcp > 16 && hcp <= 17) {
        reason_1 = "Diese Hand kann man als 1NT mit 15-17 oder 16-18 Punkten eröffnen.";
        reason_2 = "Für alle anderen 1NT Eröffnungen ist diese Hand zu stark.";
      } else if (hcp > 17 && hcp <= 18) {
        reason_1 = "Diese Hand eigent sich gerade noch, um sie als 1NT mit 16-18 Punkten zu eröffnen.";
        reason_2 = "Für alle anderen 1NT Eröffnungen ist diese Hand zu stark. ";
      } else if (hcp > 18) {
        reason_1 = "Diese Hand ist eindeutig zu stark, um sie mit 1NT zu eröffnen.";
      }
    }

    /* OUTPUT */
    res = res + "<table class='myTable'><tr> <th>13-15</th> <th>14-16</th> <th>15-17</th> <th>16-18</th></tr>";
    res = res + "<tr><td style='text-align:center'>" + lst_nt_s[0] + "</td> <td style='text-align:center'>" + lst_nt_s[1] + "</td> <td style='text-align:center'>" + lst_nt_s[2] + "</td> <td style='text-align:center'>" + lst_nt_s[3] + "</td> </tr></table>";
    res = res + "<br>";
    res = res + "<p>" + reason_1 + "</p>";
    res = res + "<p>" + reason_2 + "</p>";
    res = res + "<hr>";
    res = res + "<h3>Punkte</h3>";
    res = res + "<ul>";
    res = res + "<li>FP ~ Figurenpunkte</li>";
    res = res + "<li>ZP ~ Zusatzpunkte</li>";
    res = res + "<li>GP ~ Gesamtpunkte</li>";
    res = res + "</ul>"

    res = res + "<table class='myTable'><tr><th></th> <th>FP</th> <th>ZP</th> <th>GP</th></tr>";

    res = res + "<tr>";
    res = res + "<td>&spades;</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_f[0] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_z[0] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp[0] + "</td>";
    res = res + "</tr>";

    res = res + "<tr>";
    res = res + "<td><font color='red'>&#9829;</font></td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_f[1] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_z[1] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp[1] + "</td>";
    res = res + "</tr>";

    res = res + "<tr>";
    res = res + "<td><font color='red'>&#9830;</font></td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_f[2] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_z[2] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp[2] + "</td>";
    res = res + "</tr>";

    res = res + "<tr>";
    res = res + "<td>&#9827;</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_f[3] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp_z[3] + "</td>";
    res = res + "<td style='text-align:center'>" + lst_hcp[3] + "</td>";
    res = res + "</tr>";

    res = res + "<tr>";
    res = res + "<td>&#8721;</td>";
    res = res + "<td style='text-align:center'>" + hcp_f + "</td>";
    res = res + "<td style='text-align:center'>" + hcp_z + "</td>";
    res = res + "<td style='text-align:center;background-color:#00b300'>" + hcp + "</td>";
    res = res + "</tr>";

    res = res + "</table>";

    res = res + "<hr>";
    res = res + "<h3>Anmerkungen</h3>";
    res = res + "<hr>";
    res = res + com;





  result.innerHTML = res;
};
