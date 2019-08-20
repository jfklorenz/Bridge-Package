const Hand = require("../features/hand.js");
const Deck = require("../features/deck.js");

// ================================================================
function forumDPlus(hand) {
    //if(!(typeof(hand) === 'Hand')) throw "400/constructor: input needs to be an hand object.";
    
    let opening = "";
    let balanced = false;
    if (hand.spadesCnt <= 4 && hand.heartsCnt <= 4 && hand.diamondsCnt <= 5 && hand.clubsCnt <= 5) {
        if (hand.distribution.sort().reverse()[0] + hand.distribution.sort().reverse()[1] <= 8) {
            balanced = true;
        }
    }


    switch (true) {
        case (hand.hcp <= 4):
            opening = "Pass";
            break;
        case (hand.hcp <= 10 && hand.spadesCnt >= 6):
            opening = "2 Spades";
            break;
        case (hand.hcp <= 10 && hand.heartsCnt >= 6):
            opening = "2 Hearts";
            break;
        case (hand.hcp <= 10 && hand.spadesCnt >= 7):
            opening = "3 Spades";
            break;
        case (hand.hcp <= 10 && hand.heartsCnt >= 7):
            opening = "3 Hearts";
            break;
        case (hand.hcp <= 10 && hand.diamondsCnt >= 7):
            opening = "3 Diamonds";
            break;
        case (hand.hcp <= 10 && hand.clubsCnt >= 7):
            opening = "3 Clubs";
            break;
        case (hand.hcp >= 11 && hand.hcp <= 20 && hand.spadesCnt >= 5):
            opening = "1 Spades";
            break;
        case (hand.hcp >= 11 && hand.hcp <= 20 && hand.heartsCnt >= 5):
            opening = "1 Hearts";
            break;
        case (hand.hcp >= 15 && hand.hcp <= 17 && balanced):
            opening = "1NT";
            break;
        case (hand.hcp >= 20 && hand.hcp <= 22 && balanced):
                opening = "2NT";
            break;
        case (hand.hcp >= 20 && hand.hcp <= 23 && !(balanced)):
            opening = "2 Clubs";
            break;
        case (hand.hcp >= 24):
                opening = "2 Diamonds";
            break;
        default:
            opening = "No bid available.";
    }

    return opening;
}

// ================================================================
// Console log

let deck = new Deck();
deck.shuffle();
let hand = new Hand();
deck.deal(13, hand);


console.log(hand.hcp);
console.log(forumDPlus(hand));
console.log(hand.distribution);
console.log("============");
console.table(hand.all);




// ================================================================
module.exports = {
    forumDPlus
}
  