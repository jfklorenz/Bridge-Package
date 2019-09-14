const { score } = require("../../scoring/features/score.js");

class Deal {

    constructor(level, suit, double, declarer, vulnerability, result) {
        this.level = level; // [1,7]
        this.suit = suit; // [0,4]
        this.double = double; // [0,2]
        this.declarer = declarer; // [0,3]
        this.vulnerability = vulnerability; // [0,1]
        this.result = result; // [-13, 6]
    }

    get score() {
        return score(this.level, this.suit, this.double, this.declarer, this.vulnerability, this.result);
    }
}

let test = new Deal(2,4,0,0,0, 0)
console.log(test.score)