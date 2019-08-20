// ================================================================
function forumDPlus(hand) {
    if(!(typeof(hand) === 'Hand')) throw "400/constructor: input needs to be an hand object.";
    
    let opening = "";

    switch (true) {
        case (hand.hcp < 4):
            opening = "Pass";
            break;
        case (hand.hcp < 10 && hand.spadeCnt >= 6)
        default:
            opening = "No bid available.";
    }

    return opening;
}

// ================================================================
// Console log

let cards = [new Card(0), new Card(2), new Card(18), new Card(13)];
console.log(cards);
console.log("================")
let trick = new Trick(cards, 0, 1);
trick.resolveTrick();
console.log(trick.winner);



// ================================================================
module.exports = Trick
  