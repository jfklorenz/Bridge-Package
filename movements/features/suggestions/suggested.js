class Suggestion {
  constructor(movement, type, tableNr, roundNr, boardNr, pairNr) {
    this.movement = movement,   // Name
    this.type = type,           // pairs, teams
    this.tableNr = tableNr,     //
    this.roundNr = roundNr,
    this.boardNr = boardNr,
    this.pairNr = pairNr,
  }
}

class Suggestions {
  constructor(suggestions = []) {
    this.suggestions = suggestions;
  };

  addSuggestion(movement, tables, boardsRound, rounds, roundsPlayed, boards, boardsPlayed) {
    this.suggestions.push(new Suggestion(movement, tables, boardsRound, rounds, roundsPlayed, boards, boardsPlayed));
  };

  suggestionBy(attribute, value) {
    let suggestions = this.suggestions.filter((x) => x[attribute] === value);
    return suggestions
  };
}

let sugs = new Suggestions();

sugs.addSuggestion('Mitchell', 'Pairs',
      {
        1: false,
        2: false,
        3: true,
        4: false,
      },
      {

      },
      
    )
