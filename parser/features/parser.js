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
                    let item = gamesString[gs][g].replace('[', '').replace(']', '').replace(/"/g, '');
                    let key = item.substr(0,item.indexOf(' '));
                    let value = item.substr(item.indexOf(' ')+1);
    
                    switch(key) {
                        // 1 - Event
                        case ("Event"):
                            game.event = value;
                            break;
                        // 2 - Site
                        case ("Site"):
                            game.site = value;
                            break;
                        // 3 - Date
                        case ("Date"):
                            game.date = value;
                            break;
                        // 4 - Board
                        case ("Board"):
                            game.board = value;
                            break;
                        // 5 - West
                        case ("West"):
                            game.west = value;
                            break;
                        // 6 - Nord
                        case ("North"):
                            game.north = value;
                            break;
                        // 7 - East
                        case ("East"):
                            game.east = value;
                            break;
                        // 8 - South
                        case ("South"):
                            game.south = value;
                            break;
                        // 9 - Dealer
                        case ("Dealer"):
                            game.dealer = value;
                            break;
                        // 10 - Vulnerable
                        case ("Vulnerable"):
                            game.vulnerable = value;
                            break;
                        // 11 - Deal
                        case ("Deal"):
                            game.deal = value;
                            break;
                        // 12 - Scoring
                        case ("Score"):
                            game.score = value;
                            break;
                        // 13 - Declarer
                        case ("Declarer"):
                            game.declarer = value;
                            break;
                        // 14 - Contract
                        case ("Contract"):
                            game.contract = value;
                            break;
                        // 15 - Result
                        case ("Result"):
                            game.result = value;
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
// Console.log
//pbnParser('example.PBN').then(console.log)

// ================================================================
// Exports
module.exports = {
    pbnParser
}