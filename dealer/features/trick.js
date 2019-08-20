const Card = require("../features/card.js");

function getMaxRank(cards) {
    return cards.reduce((max, p) => p.rank > max ? p.rank : max, cards[0]);
}

// ================================================================
class Trick {
    constructor(cards, dealer, suitTrump) {
        this.cards = cards;

        this.suitTrump = suitTrump;
        this.dealer = dealer; // 0 = north, 1 = east, ...
        this.winner = -1;
    }

    get suitTrick() {
        return this.cards[this.dealer].suit;
    }

    
    resolveTrick() {
        
        // In suit contracts, remove non trump cards from being chosen as the winner.
        let newPlayed = [];
        for (var i = 0; i < this.cards.length; i++) {

            
            if (this.cards[i].suit === this.suitTrump) {
                newPlayed.push(this.cards[i]);
            }
        }

        if (!(newPlayed.length === 0)) {
            let winner = getMaxRank(newPlayed);
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i] === winner) {
                    this.winner = i;
                    return
                }
            }
        }

        
        // Remove cards not trump or not 
    }
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
  