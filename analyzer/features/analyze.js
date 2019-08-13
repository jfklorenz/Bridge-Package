
// ================================================================
function keycards(hand, suit, version) {
  let keycards = 0;
  let queen = false;
  for (var i = 0; i < hand.cards.length; i++) {
    if (hand.cards[i].rank === 12 || (hand.cards[i] === 11 && hand.cards[i].suit === suit)) {
      keycards += 1;
    }
    if (hand.cards[i].rank === 10 && hand.cards[i].suit === suit) {
      queen = true;
    }
  }

  // 14 30
  if (version === 0) {
    if (keycards === 0 || keycards === 3) {
      return 1;
    } else if (keycards === 1 || keycards === 4) {
      return 0;
    } else if (keycards === 2) {
      if (queen) {
        return 4;
      } else {
        return 3;
      }
    }
  }

  // 03 14
  if (version === 1) {
    if (keycards === 0 || keycards === 3) {
      return 0;
    } else if (keycards === 1 || keycards === 4) {
      return 1;
    } else if (keycards === 2) {
      if (queen) {
        return 4;
      } else {
        return 3;
      }
    }
  }
  return bid;
}


module.exports = {
  keycards
}












// ================================================================
