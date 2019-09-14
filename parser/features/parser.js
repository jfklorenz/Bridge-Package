const fs = require('fs')

//
// Parser
function pbnParser(fileName) {
    fs.readFile(fileName, (err, data) => { 
        if (err) throw err; 

        let fileString = data.toString();
        let fileSplit = fileString.split("\r\n");
        let gameCnt = 0;
        let gamesString = [[]];
        for (var i = 3; i < fileSplit.length - 1; i++) {
            if (fileSplit[i] === "") {
                gamesString.push([]);
                gameCnt += 1;
                continue;
            }
            gamesString[gameCnt].push(fileSplit[i]);
        }

        let info = {
            pbnVersion: fileSplit[0].slice(2,fileSplit[0].length),
            type: fileSplit[1].slice(2,fileSplit[1].length),
            fileCnt: gamesString.length
        }

        let games = [];
        // All Games
        for (var gs = 0; gs < gamesString.length; gs++) {
            let game = {};
            // For Each Game
            for (var g = 0; g < gamesString[gs].length; g++) {
                let item = gamesString[gs][g]
                let key = item.substr(0,item.indexOf(' ')).slice(1);
                let value = item.substr(item.indexOf(' ')+1).slice(1, item.substr(item.indexOf(' ')+1).length - 2);

                if (key === "Event") {
                    game.event = value;
                } else if (key === "Site") {
                    game.site = value;
                } else if (key === "Date") {
                    game.date = value;
                } else if (key === "Board") {
                    game.board = value;
                } else if (key === "Deal") {
                    game.deal = value;
                } else if (key === "Dealer") {
                    game.dealer = value;
                } else if (key === "North") {
                    game.north = value;
                } else if (key === "East") {
                    game.east = value;
                } else if (key === "South") {
                    game.south = value;
                } else if (key === "West") {
                    game.west = value;
                } else if (key === "Vulnerable") {
                    game.vulnerable = value;
                } else if (key === "Declarer") {
                    game.declarer = value;
                } else if (key === "Contract") {
                    game.contract = value;
                } else if (key === "Result") {
                    game.result = value;
                } else if (key === "Score") {
                    game.score = value;
                }


                let vulerable = "";
                let declarer = "";
                let contract = "";
                let result = "";
                let hometeam = "";
                let room = "";
                let round = "";
                let score = "";
                let visitteam = "";
                let table = "";
                let auction = "";
                let comment = "";
            }
            games.push(game);
        }
        console.log([games, info]);
        return [games, info];
    }) 

}

pbnParser('example.PBN');

module.exports = {
    pbnParser
}