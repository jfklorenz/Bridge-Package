const { shuffle } = require("../features/shuffle.js")
const Hand = require("../features/hand.js");

// ================================================================

class Player(name) {
  constructor() {
    this.name = name;
    this.hand = null;
  }


}


// ================================================================
module.exports = Player
