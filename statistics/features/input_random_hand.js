function input_random_hand(a, b, c, d) {
  var inp1 = document.getElementById(a);
  var inp2 = document.getElementById(b);
  var inp3 = document.getElementById(c);
  var inp4 = document.getElementById(d);

  var deck = new Array();
  var hand = new Array();
  var spades = "";
  var hearts = "";
  var diamonds = "";
  var clubs = "";

  var dict = {
    0: "2", 1: "3", 2: "4", 3: "5", 4: "6", 5: "7", 6: "8", 7: "9", 8: "10",
    9: "B", 10: "D", 11: "K", 12: "A"
  };

  for (i = 0; i < 52; i++) {
    deck[i] = i;
  }

  deck = shuffle(deck);

  var j;
  for (j = 0; j < 13; j++) {
    hand[j] = deck[j];
  }

  hand.sort(function(a, b){return b-a});

  for (k = 0; k < 13; k++) {
    if (hand[k] > 38) {
      spades = spades + dict[hand[k] % 13] + " ";
    } else if (hand[k] > 25) {
      hearts = hearts + dict[hand[k] % 13] + " ";
    } else if (hand[k] > 12) {
      diamonds = diamonds + dict[hand[k] % 13] + " ";
    } else {
      clubs = clubs + dict[hand[k] % 13] + " ";
    }
  }


  inp1.value = spades;
  inp2.value = hearts;
  inp3.value = diamonds;
  inp4.value = clubs;
}
