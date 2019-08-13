function calc_keycard() {
    var res = "<h2>Assfrage / Keycards</h2><hr>";

    /* User Input */
    var spades = document.getElementById("hand_S").value;
    var hearts = document.getElementById("hand_H").value;
    var diamonds = document.getElementById("hand_D").value;
    var clubs = document.getElementById("hand_C").value;
    var lst_suit = [spades, hearts, diamonds, clubs, ""];
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
    var suits = [0,0,0,0];
    var suits_sort = [0,0,0,0];

    var cm = "<font color='green'><i class='fas fa-check'></i></font>";
    var xm = "<font color='red'><i class='fas fa-times'></i></font>";

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
      suits[i] = lst_suit[i].length;
      suits_sort[i] = lst_suit[i].length;
    };

    suits_sort.sort(function(a, b){return b-a})

    /* CHECK: Input Length */
    var check_len = 0;
    for (i = 0; i < 4; i++) {
      check_len = check_len + suits[i];
    };




    /* CALCULATION */
    var keycard = document.getElementById("id-keycard").value;
    var suit = document.getElementById("keycard-sel-suit").value;
    var queen = false;
    var aces = 0;

    var keycards = 0;
    for (i = 0; i < 4; i++) {
      if (lst_suit[i].includes("A")) {
        keycards = keycards + 1
        aces = aces + 1
      }
    }

    if (lst_suit[suit].includes("K")) {
      keycards = keycards + 1;
    }


    if  (suit < 4) {
      if (lst_suit[suit].includes("Q")) {
        queen = true;
      }
    }

    var dame = "";
    if (queen) {
      dame = "Ja";
    } else {
      dame = "Nein";
    }

    var bid = "";

    if (keycard == 1) {
      if (keycards == 0 || keycards == 3) {
        bid = "5&#9827;";
      } else if (keycards == 1 || keycards == 4) {
        bid = "5<font color='red'>&#9830;</font>";
      } else if (keycards == 2) {
        if (queen) {
          bid = "5&spades;";
        } else {
          bid = "5<font color='red'>&#9829;</font>";
        }
      }
    } else if (keycard == 2) {
      if (keycards == 1 || keycards == 4) {
        bid = "5&#9827;";
      } else if (keycards == 0 || keycards == 3) {
        bid = "5<font color='red'>&#9830;</font>";
      } else if (keycards == 2) {
        if (queen) {
          bid = "5&spades;";
        } else {
          bid = "5<font color='red'>&#9829;</font>";
        }
      }
    }

    res = res + "<table class='myTable keycards'><tr><th>Asse:</th><td>";
    res = res + aces;
    res = res + "</td></tr><tr><th>Keycards:</th><td>";
    res = res + keycards;
    res = res + "</td></tr><tr><th>Trumpf-Dame:</th><td>";
    res = res + dame;
    res = res + "</td></tr><tr><th>Gebot:</th><td>";
    res = res + bid;
    res = res + "</td></tr></table>"

    var result = document.getElementById("keycard-res");
    result.innerHTML = res;


}
