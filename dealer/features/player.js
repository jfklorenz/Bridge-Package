const { shuffle } = require("../features/shuffle.js")
const Hand = require("../features/hand.js");

// ================================================================

class Player {
  constructor(name) {
    this.name = name;
    this.dbv = 0;
    this.hand = new Hand;
    
  }


}


// ================================================================
module.exports = Player
