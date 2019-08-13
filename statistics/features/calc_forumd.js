function calc_forumd() {
    var res = "<h2>Hand Analyse</h2><hr>";

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
    var suits = [0,0,0,0];
    var suits_sort = [0,0,0,0];

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


    var type = "";
    var bid = "";


    // Handtyp
    if ((suits_sort[0] == 4 && suits_sort[3] >= 2) || ((suits_sort[0] == 5 && suits[0] < 5 && suits[1] < 5) && (suits_sort[3] >= 2))) {
      typ = "Balanciert"
    } else if (suits_sort[0] > 4 && suits_sort[1] < 4 || suits_sort[0] - suits_sort[1] >= 3) {
      typ = "1-Färber"
    } else if (suits_sort[0] >= 5 && suits_sort[1] >= 4) {
      typ = "2-Färber"
    } else if (suits_sort[0] <= 5 && suits_sort[1] == 4 && suits_sort[2] == 4){
      typ = "3-Färber"
    } else {
      typ = "Freak Hand"
    }

    // Forum D Plus
    if (hcp < 6 || (hcp < 12 && suits_sort[0] < 6)) {
      bid = "Pass"
    } else if (hcp >= 20 && hcp <= 22 && typ == "Balanciert") {
      bid = "2NT (20-22)";
      com = com + "<p>Diese Hand kann in nahezu jedem System mit 2NT eröffnet werden, solange dies kein künstliches Gebot für die <a href='/html/begriffe/Unterfarben.php'>Unterfarben</a> ist.</p>";
    } else if (hcp < 11 && hcp > 5 && suits[0] == 6 && suits_sort[0] == 6 && suits_sort[1] < 5) {
      bid = "2&spades;"
      if (hcp >= 9) {
        com = com + "<p>Diese Hand entspricht einem starken <a href='/html/konventionen/WeakTwo.php'>Weak-Two</a> in Pik und kann mit 2&spades; oder 2<font color='red'>&#9830;</font> <a href='/html/konventionen/Multi.php'>Multi</a> eröffnet werden.</p>";
      } else {
        com = com + "<p>Diese Hand entspricht einem schwachen <a href='/html/konventionen/WeakTwo.php'>Weak-Two</a> in Pik und kann mit 2&spades; oder 2<font color='red'>&#9830;</font> <a href='/html/konventionen/Multi.php'>Multi</a> eröffnet werden.</p>";
      }
    } else if (hcp < 11 && hcp > 5 && suits[1] == 6 && suits_sort[0] == 6 && suits_sort[1] < 5) {
      bid = "2<font color='red'>&#9829;</font>";
      if (hcp >= 9) {
        com = com + "<p>Diese Hand entspricht einem starken <a href='/html/konventionen/WeakTwo.php'>Weak-Two</a> in Coeur und kann mit 2<font color='red'>&#9829;</font> oder 2<font color='red'>&#9830;</font> <a href='/html/konventionen/Multi.php'>Multi</a> eröffnet werden.</p>";
      } else {
        com = com + "<p>Diese Hand entspricht einem schwachen <a href='/html/konventionen/WeakTwo.php'>Weak-Two</a> in Coeur und kann mit 2<font color='red'>&#9829;</font> oder 2<font color='red'>&#9830;</font> <a href='/html/konventionen/Multi.php'>Multi</a> eröffnet werden.</p>";
      }
    } else if (hcp >= 24) {
      bid = "2<font color='red'>&#9830;</font>";
      if (hcp >= 32) {
        com = com + "<p>Diese Hand ist unglaublich stark. Sie beinhaltet im Endeffekt bereits alleine genug Figurenpunkte für einen <a href='/html/begriffe/Schlemm.php'>Schlemm</a>.</p>"
      } else if (hcp >= 28) {
        com = com + "<p>Diese Hand ist selbst für eine sehr starke Hand außergewöhnlich. Sie benötigt nicht mehr als ein oder zwei Bilder in Partners Hand für einen <a href='/html/begriffe/Schlemm.php'>Schlemm</a>.</p>"
      } else {
        com = com + "<p>Eine sehr starke, <a href='/html/begriffe/Vollspiel.php'>Vollspiel</a> forcierende Hand (game forcing). Sie sollte mit der stärkstmöglichen Eröffnung des gespielten Systems eröffnet werden. Dies entspricht in vielen Fällen einer 2&#9827; oder <font color='red'>&#9830;</font></p> Eröffnung.";
      }

    } else if (hcp > 19) {
      bid = "2&#9827;";
      com = com + "<p>Eine starke, semi forcierende Hand, die in den meisten Fällen mit 2&#9827; eröffnet wird.</p>";
    } else if (hcp >= 15 && hcp < 17 && typ == "Balanciert") {
      bid = "1NT (15-17)";
      com = com + "<p>Eine starke, ausgeglichene Hand. Alle Systeme, die eine starke 1NT Eröffnung spielen, könnten eine solche mit dieser Hand in Erwägung ziehen.</p>"
    } else if (hcp < 11 && hcp > 5 && suits[0] == 7) {
      bid = "3&spades;";
      com = com + "<p>Ein Sperrgebot in Pik.</p>"
    } else if (hcp < 11 && hcp > 5 && suits[1] == 7) {
      bid = "3<font color='red'>&#9829;</font>"
      com = com + "<p>Ein Sperrgebot in Coeur.</p>"
    } else if (hcp < 11 && hcp > 5 && suits[2] == 7) {
      bid = "3<font color='red'>&#9830;</font>"
      com = com + "<p>Ein Sperrgebot in Karo.</p>"
    } else if (hcp < 11 && hcp > 5 && suits[3] == 7) {
      bid = "3&#9827;"
      com = com + "<p>Ein Sperrgebot in Treff.</p>"
    } else if (hcp > 10 && hcp < 20 && suits[0] > 4 && suits[0] == suits_sort[0]) {
      bid = "1&spades;";
    } else if (hcp > 10 && hcp < 20 && suits[1] > 4 && suits[1] == suits_sort[0]) {
      bid = "1<font color='red'>&#9829;</font>"
    } else if (hcp > 10 && hcp < 20 && (suits[2] == suits_sort[0] || (suits[2] > suits[3] && suits[0] < 5 && suits[1] < 5))) {
      bid = "1<font color='red'>&#9830;</font>"
    } else if (hcp > 10 && hcp < 20 && (suits[3] == suits_sort[0] || (suits[3] >= suits[2] && suits[0] < 5 && suits[1] < 5))) {
      bid = "1&#9827;"
    } else {
      bid = "Besondere Eröffnung"
    }


    var lp = 0;
    for (k = 0; k < 4; k++) {
      if (suits[k] == 0) {
        lp = lp + 3;
      } else if (suits[k] == 1) {
        lp = lp + 2;
      } else if (suits[k] == 2) {
        lp = lp + 1;
      }
    }


    if (hcp >= 37) {
      com = "Wie Sie sehen ist es nicht möglich, mehr als als 37 Figurenpunkte in einer Hand zu haben."
    } else if (hcp == 0) {
      if (spades.includes("10") || hearts.includes("10") || diamonds.includes("10") || clubs.includes("10")) {
        com = "Ein semi-Yarborough. Die Hand hat zwar 0 Figurenpunkte, aber zumindest noch eine 10."
      } else {
        com = "Ein echter Yarborough. Die Hand hat 0 Figurenpunkte und nicht einmal eine 10."
      }
    } else if (hcp < 5) {
      com = "Eine Hand mit weniger als 5 Figurenpunkten sollte nur in Ausnahmefällen eröffnet werden."
    }


    res = "<table class='myTable suits'><tr><th>&spades;</th><td>";
    res = res + spades;
    res = res + "</td></tr><tr><th><font color='red'>&#9829;</font></th><td>";
    res = res + hearts;
    res = res + "</td></tr><tr><th><font color='red'>&#9830;</font></th><td>";
    res = res + diamonds;
    res = res + "</td></tr><tr><th>&#9827;</th><td>";
    res = res + clubs;
    res = res + "</td></tr></table><hr>";

    res = res + "<table class='myTable forumd info'><tr><th>";
    res = res + "Verteilung:";
    res = res + "</th><td>";
    res = res + suits[0] + " / " + suits[1] + " / " + suits[2] + " / " + suits[3];
    res = res + "</td></tr><tr><th>";
    res = res + "Figurenpunkte:";
    res = res + "</th><td>";
    res = res + hcp;
    res = res + "</td></tr><tr><th>";
    res = res + "Längenpunkte:";
    res = res + "</th><td>";
    res = res + lp;
    res = res + "</td></tr><t'><th>";
    res = res + "Handtyp:";
    res = res + "</th><td>";
    res = res + typ;
    res = res + "</td></tr><tr><th>";
    res = res + "Forum D Plus:";
    res = res + "</th><td>";
    res = res + bid;
    res = res + "</td></tr></table>";

    res = res + "<hr>";
    res = res + "<h3>Anmerkungen</h3>";
    res = res + com;
    res = res + "<p>";

    res = res + "</p>";

    var result = document.getElementById("forumd-res");
    result.innerHTML = res;


}
