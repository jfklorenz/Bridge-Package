const Hand = require("../features/hand.js");
const Deck = require("../features/deck.js");

// ================================================================
function keycardBlackwood(hand, suit, version = 0) {
    if (!(hand.cards.length === 13)) throw "Error: Not enough cards.";

    let keycards = 0;
    let queen = false;
    let bid = "";

    for (var i = 0; i < hand.cards.length; i++) {
        if (hand.cards[i].rank === 12) {
            keycards += 1;
        } else if (hand.cards[i].rank === 11 && hand.cards[i].suit === suit) {
            keycards += 1;
        } else if (hand.cards[i].rank === 10 && hand.cards[i].suit === suit) {
            queen = true;
        }
    }

    if (version === 0) {
        // 1430
        if (keycards === 1 || keycards === 4) {
            bid = "5 Clubs";
        } else if (keycards === 0 || keycards === 3) {
            bid = "5 Diamonds";
        } else if (keycards === 2) {
            if (queen) {
                bid = "5 Spades";
            } else {
                bid = "5 Hearts";
            }
        }
    } else if (version === 1) {
        // 0314
        if (keycards === 1 || keycards === 4) {
            bid = "5 Diamonds";
        } else if (keycards === 0 || keycards === 3) {
            bid = "5 Clubs";
        } else if (keycards === 2) {
            if (queen) {
                bid = "5 Spades";
            } else {
                bid = "5 Hearts";
            }
        }
    }

    return bid;
}

// ================================================================
// Console log

let deck = new Deck();
deck.shuffle();
let hand = new Hand();
deck.deal(13, hand);


console.log(keycardBlackwood(hand, 0));
console.log("============");
console.table(hand.all);




// ================================================================
module.exports = {
    keycardBlackwood,
}
  