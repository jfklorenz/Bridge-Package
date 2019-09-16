// ================================================================
// Imports
const fs = require('fs')

// ================================================================
// Parser
async function pbnParser(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => { 
            if (err) return reject(err);
    
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
    
                    switch(key) {
                        case ("Event"):
                            game.event = value;
                        case ("Site"):
                            game.site = value;
                        case ("Date"):
                            game.date = value;
                        case ("Board"):
                            game.board = value;
                        case ("North"):
                            game.north = value;
                        case ("East"):
                            game.east = value;
                        case ("South"):
                            game.south = value;
                        case ("West"):
                            game.west = value;
                        case ("Deal"):
                            game.deal = value;
                        case ("Dealer"):
                            game.dealer = value;
                        case ("Vulnerable"):
                            game.vulnerable = value;
                        case ("Declarer"):
                            game.declarer = value;
                        case ("Contract"):
                            game.contract = value;
                        case ("Result"):
                            game.result = value;
                        case ("Score"):
                            game.score = value;
                        case ("HomeTeam"):
                            game.hometeam = value;
                        case ("Room"):
                            game.room = value;
                        case ("Round"):
                            game.round = value;
                        case ("VisitTeam"):
                            game.visitteam = value;
                        case ("Table"):
                            game.table = value;
                        case ("Auction"):
                            game.auction = value;
                        case ("*"):
                            game.comment = value;
                    }
                }
                games.push(game);
            }
            resolve([games, info]);
        }) 
    });
}

// ================================================================
// Exports
module.exports = {
    pbnParser
}