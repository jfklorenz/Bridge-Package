function deal() {
  var deck = new Array();
  var hand = new Array();
  var s = 0;
  var h = 0;
  var d = 0;
  var c = 0;
  var hcp = 0;
  var typ = "";
  var fp = 0;
  var spades = "";
  var hearts = "";
  var diamonds = "";
  var clubs = "";
  var bid = "Pass";

  var dict = {
    0: "2", 1: "3", 2: "4", 3: "5", 4: "6", 5: "7", 6: "8", 7: "9", 8: "10",
    9: "B", 10: "D", 11: "K", 12: "A"
  };

  var i;
  for (i = 0; i < 52; i++) {
    deck[i] = i;
  }

  deck = shuffle(deck);

  var j;
  for (j = 0; j < 13; j++) {
    hand[j] = deck[j];
  }

  hand.sort(function(a, b){return b-a});

  var k;
  for (k = 0; k < 13; k++) {
    if (hand[k] > 38) {
      spades = spades + dict[hand[k] % 13] + " ";
      s = s + 1;
    } else if (hand[k] > 25) {
      hearts = hearts + dict[hand[k] % 13] + " ";
      h = h + 1;
    } else if (hand[k] > 12) {
      diamonds = diamonds + dict[hand[k] % 13] + " ";
      d = d + 1;
    } else {
      clubs = clubs + dict[hand[k] % 13] + " ";
      c = c + 1;
    }

    if (hand[k] % 13 == 12) {
      hcp = hcp + 4
    } else if (hand[k] % 13 == 11) {
      hcp = hcp + 3
    } else if (hand[k] % 13 == 10) {
      hcp = hcp + 2
    } else if (hand[k] % 13 == 9) {
      hcp = hcp + 1
    }
  }


  var suits_sort = [s, h, d, c]
  var suits = [s, h, d, c]
  suits_sort.sort(function(a, b){return b-a})

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
  } else if (hcp >= 20 && hcp <= 22 && typ == "Balanciert"){
    bid = "2NT (20-22)"
  } else if (hcp < 11 && hcp > 5 && suits[0] == 6 && suits_sort[0] == 6 && suits_sort[1] < 5) {
    bid = "2&spades;"
  } else if (hcp < 11 && hcp > 5 && suits[1] == 6 && suits_sort[0] == 6 && suits_sort[1] < 5) {
    bid = "2<font color='red'>&#9829;</font>"
  } else if (hcp > 23) {
    bid = "2<font color='red'>&#9830;</font>"
  } else if (hcp > 19) {
    bid = "2&#9827;"
  } else if (hcp >= 15 && hcp < 17 && typ == "Balanciert") {
    bid = "1NT (15-17)"
  } else if (hcp < 11 && hcp > 5 && suits[0] == 7) {
    bid = "3&spades;"
  } else if (hcp < 11 && hcp > 5 && suits[1] == 7) {
    bid = "3<font color='red'>&#9829;</font>"
  } else if (hcp < 11 && hcp > 5 && suits[2] == 7) {
    bid = "3<font color='red'>&#9830;</font>"
  } else if (hcp < 11 && hcp > 5 && suits[3] == 7) {
    bid = "3&#9827;"
  } else if (hcp > 10 && hcp < 20 && suits[0] > 4 && suits[0] == suits_sort[0]) {
    bid = "1&spades;"
  } else if (hcp > 10 && hcp < 20 && suits[1] > 4 && suits[1] == suits_sort[0]) {
    bid = "1<font color='red'>&#9829;</font>"
  } else if (hcp > 10 && hcp < 20 && (suits[2] == suits_sort[0] || (suits[2] > suits[3] && suits[0] < 5 && suits[1] < 5))) {
    bid = "1<font color='red'>&#9830;</font>"
  } else if (hcp > 10 && hcp < 20 && (suits[3] == suits_sort[0] || (suits[3] >= suits[2] && suits[0] < 5 && suits[1] < 5))) {
    bid = "1&#9827;"
  } else {
    bid = "Besondere Eröffnung"
  }

  for (k = 0; k < 4; k++) {
    if (suits[k] == 0) {
      fp = fp + 3;
    } else if (suits[k] == 1) {
      fp = fp + 2;
    } else if (suits[k] == 2) {
      fp = fp + 1;
    }
  }

  spa = "&spades;" + " : " + spades + "<br>"
  hea = "<font color='red'>" + "&#9829;" + "</font>" + " : " + hearts + "<br>"
  dia = "<font color='red'>" + "&#9830;" + "</font>" + " : " + diamonds + "<br>"
  clu = "&#9827;" + " : " + clubs

  res = "<div class='deal'>" + spa + hea + dia + clu + "</div><hr>"

  res = res + "<table class='myTable'><tr id='deal-tr'><td id='deal-td-1'>"
  res = res + "Verteilung:"
  res = res + "</td><td id='deal-td-2'>"
  res = res + s + " / " + h + " / " + d + " / " + c
  res = res + "</td></tr><tr id='deal-tr'><td id='deal-td-1'>"
  res = res + "Figurenpunkte:"
  res = res + "</td><td id='deal-td-2'>"
  res = res + hcp
  res = res + "</td></tr><tr id='deal-tr'><td id='deal-td-1'>"
  res = res + "Längenpunkte:"
  res = res + "</td><td id='deal-td-2'>"
  res = res + fp
  res = res + "</td></tr><tr id='deal-tr'><td id='deal-td-1'>"
  res = res + "Handtyp:"
  res = res + "</td><td id='deal-td-2'>"
  res = res + typ
  res = res + "</td></tr><tr id='deal-tr'><td id='deal-td-1'>"
  res = res + "Forum D Plus:"
  res = res + "</td><td id='deal-td-2'>"
  res = res + bid
  res = res + "</td></tr></table>"


  var result = document.getElementById("id_deal");
  result.innerHTML = res;


};
