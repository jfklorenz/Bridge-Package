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
                            break;
                        case ("Site"):
                            game.site = value;
                            break;
                        case ("Date"):
                            game.date = value;
                            break;
                        case ("Board"):
                            game.board = value;
                            break;
                        case ("North"):
                            game.north = value;
                            break;
                        case ("East"):
                            game.east = value;
                            break;
                        case ("South"):
                            game.south = value;
                            break;
                        case ("West"):
                            game.west = value;
                            break;
                        case ("Deal"):
                            game.deal = value;
                            break;
                        case ("Dealer"):
                            game.dealer = value;
                            break;
                        case ("Vulnerable"):
                            game.vulnerable = value;
                            break;
                        case ("Declarer"):
                            game.declarer = value;
                            break;
                        case ("Contract"):
                            game.contract = value;
                            break;
                        case ("Result"):
                            game.result = value;
                            break;
                        case ("Score"):
                            game.score = value;
                            break;
                        case ("HomeTeam"):
                            game.hometeam = value;
                            break;
                        case ("Room"):
                            game.room = value;
                            break;
                        case ("Round"):
                            game.round = value;
                            break;
                        case ("VisitTeam"):
                            game.visitteam = value;
                            break;
                        case ("Table"):
                            game.table = value;
                            break;
                        case ("Auction"):
                            game.auction = value;
                            break;
                        case ("*"):
                            game.comment = value;
                            break;
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