const fs = require('fs') 

class PBNparser {
    constructor() {
        this.name = "PBNparser";
        this.fileString = "";
        this.gamesString = [[]];

        this.pbnVersion = "";
        this.type = ""; // export/import

        this.games = [];
    }

    // Read File
    readFileToGames(fileName) {
        fs.readFile('example.PBN', (err, data) => { 
            if (err) throw err; 

            this.fileString += data.toString();
            this.fileSplit = this.fileString.split("\r\n");
            this.pbnVersion = this.fileSplit[0].slice(2,this.fileSplit[0].length);
            this.type = this.fileSplit[1].slice(2,this.fileSplit[1].length);
            
            let gameCnt = 0;
            for (var i = 3; i < this.fileSplit.length - 1; i++) {
                if (this.fileSplit[i] === "") {
                    this.gamesString.push([]);
                    gameCnt += 1;
                    continue;
                }
                this.gamesString[gameCnt].push(this.fileSplit[i]);
            }
            
            
            console.log(this.pbnVersion)
            console.log(this.type)


            console.log("================")
            console.log(this.fileString.length)
            console.log(this.gamesString)
        }) 
    }

    // Write File - ToDo

}

// Class / Game
class Game {
    constructor(
        event = "#",
        site = "#",
        date = "#",
        board = "#",
        west = "#",
        north = "#",
        east = "#",
        south = "#",
        dealer = "#",
        vulnerable = "#",
        deal = "#",
        declarer = "#",
        contract = "#",
        result = "#",
        hometeam = "#",
        room = "#",
        round = "#",
        score = "#",
        section = "#",
        table = "#",
        visitteam = "#",
        auction = "#",
        play = "#",

    ) {
        this.event = event;
        this.site = site,
        this.date = date,
        this.board = board,
        this.west = west,
        this.north = north,
        this.east = east,
        this.south = south,
        this.dealer = dealer,
        this.vulnerable = vulnerable,
        this.deal = deal,
        this.declarer = declarer,
        this.contract = contract,
        this.result = result,
        this.hometeam = hometeam,
        this.room = room,
        this.round = round,
        this.score = score,
        this.section = section,
        this.table = table,
        this.visitteam = visitteam,
        this.auction = auction,
        this.play = play
    }
}


//let parser = new PBNparser();
//parser.readFileToGames('example.PBN')

