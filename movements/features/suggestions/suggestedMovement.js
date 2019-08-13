class Suggestion {
  constructor(movement, tables, boardsRound, rounds, roundsPlayed, boards, boardsPlayed) {
    this.movement = movement;
    this.tables = tables;
    this.boardsRound = boardsRound;
    this.rounds = rounds;
    this.roundsPlayed = roundsPlayed
    this.boards = boards;
    this.boardsPlayed = boardsPlayed
  }
}

class Suggestions {
  constructor(suggestions = []) {
    this.suggestions = suggestions;
  };

  addSuggestion(movement, tables, boardsRound, rounds, roundsPlayed, boards, boardsPlayed) {
    this.suggestions.push(new Suggestion(movement, tables, boardsRound, rounds, roundsPlayed, boards, boardsPlayed))
  };

  suggestionBy(attribute, value) {
    let suggestions = this.suggestions.filter((x) => x[attribute] === value)
    return suggestions
  };
}

let sugs = new Suggestions();

// 4 Tables
sugs.addSuggestion("4-table Howell", 4, 3, 7, 7, 21, 21);
sugs.addSuggestion("4-table Howell", 4, 4, 7, 7, 28, 28);
// 5 Tables
sugs.addSuggestion("5-table Howell", 5, 3, 9, 9, 27, 27);
sugs.addSuggestion("5-table Mitchell", 5, 5, 5, 5, 25, 25);
// 6 Tables
sugs.addSuggestion("6-table Howell", 6, 2, 11, 11, 22, 22);
sugs.addSuggestion("6-table 3/4 Howell", 6, 3, 9, 9, 27, 27);
sugs.addSuggestion("6-table share and relay Mitchell", 6, 4, 6, 6, 24, 24);
sugs.addSuggestion("6-table double hesitation", 6, 3, 8, 8, 24, 24);
// 7 Tables
sugs.addSuggestion("7-table Howell", 7, 2, 13, 13, 26, 26);
sugs.addSuggestion("7-table Mitchell", 7, 4, 7, 7, 28, 28);
// 8 tables
sugs.addSuggestion("8-table share and relay Mitchell", 8, 3, 8, 8, 24, 24);
sugs.addSuggestion("8-table skip Mitchell", 8, 3, 7, 7, 24, 21);
sugs.addSuggestion("8-table hesitation Mitchell", 8, 3, 9, 9, 27, 27);
// 9 tables
sugs.addSuggestion("9-table Mitchell", 9, 3, 9, 9, 27, 27);
sugs.addSuggestion("9-table Mitchell", 9, 3, 9, 8, 27, 24);
// 10 tables
sugs.addSuggestion("10-table skip Mitchell", 10, 3, 9, 9, 30, 27);
sugs.addSuggestion("10-table skip Mitchell", 10, 3, 9, 8, 30, 24);
// 11 tables
sugs.addSuggestion("11-table Mitchell", 11, 2, 11, 11, 22, 22);
sugs.addSuggestion("11-table Mitchell", 11, 3, 11, 9, 33, 27);
sugs.addSuggestion("11-table Mitchell", 11, 3, 11, 8, 33, 24);
sugs.addSuggestion("11-table hesitation Mitchell", 11, 2, 12, 12, 24, 24);
// 12 tables
sugs.addSuggestion("12-table share and relay Mitchell", 12, 2, 12, 12, 24, 24);
sugs.addSuggestion("12-table skip Mitchell", 12, 2, 11, 11, 24, 22);
sugs.addSuggestion("12-table skip Mitchell", 12, 3, 11, 8, 36, 24);
sugs.addSuggestion("12-table skip hesitation Mitchell", 12, 2, 13, 13, 26, 26);
sugs.addSuggestion("12-table skip hesitation Mitchell", 12, 2, 13, 12, 26, 24);
