// ================================
// Imports
var stream = require('stream');

// ================================
// Constants
let tagLine = /^\[\s*([a-zA-Z0-9_]+)\s*"(.*)"\s*\]$/;
let emptyLine = /^\s*$/;
let crlf = '\r\n';

// ================================
// 
function* parsePbn(file) {


    


}



class PbnStream extends stream.Transform {
    constructor(opts) {
        super(opts);
        this.opts = opts || {};
        this.opts.objectMode = true;
        this.tagValues = {};
    }

    _transform(line, _, done) {
        if (this.comment) {
            if (line[0] === '}') {
                this.produce(this.comment);
                this.comment = undefined;
            }
            else {
                this.comment.text += line + crlf;
            }
        }
        else if (line[0] === '[') {
            let tag = line.match(tagLine);
            if (!tag)
                return done(new Error('Invalid PBN for tagpair: ' + line));
            this.produce(null);
            let name = tag[1],
                value = tag[2];
            if (value === '#') {
                value = this.tagValues[name] || '';
            } else if (value.startsWith('##')) {
                value = this.tagValues[name] || value.slice(2);
            }
            this.tag = {
                type: 'tag',
                name: name,
                value: value
            };
            this.tagValues[this.tag.name] = this.tag.value;
    
            if (name === 'Deal')
                this.tag.cards = parseDeal(value);
            else if (name === 'Note') {
                let note = value.match(/(\d+)\:(.*)/);
                this.tag.number = parseInt(note[1], 10);
                this.tag.text = note[2];
            } else if (name === 'Contract') {
                if (value === 'Pass') {
                    this.tag.level = 0;
                    this.tag.risk = '';
                } else if (value !== '' && value !== '?') {
                    let contract = value.match(/^(\d)([SHDCN]|NT)(X{0,2})$/);
                    if (!contract || contract.length < 3)
                        return done(new Error('Invalid contract: ' + line));
                    this.tag.level = parseInt(contract[1], 10);
                    this.tag.denomination = contract[2] === 'N' ? 'NT' : contract[2];
                    this.tag.risk = contract[3] || '';
                }
            }
        }
        else if (line[0] === ';') {
            this.produce({
                type: 'comment',
                text: line.slice(1).trim()
            });
        }
        else if (line[0] === '%') {
            this.produce({
                type: 'directive',
                text: line.slice(1).trim()
            });
        }
        else if (emptyLine.test(line)) {
            this.produce(null);
            this.ingame = false;
        }
        else if (line[0] === '{') {
            this.comment = {
                type: 'comment',
                text: ''
            };
            let rest = line.slice(1).trim();
            if (rest[rest.length - 1] === '}') {
                this.comment.text = rest.slice(0, -1).trim();
                this.produce(this.comment);
                this.comment = undefined;
            }
        }
        else if (this.tag) {
            this.tag.section = this.tag.section || [];
            this.tag.tokens = this.tag.tokens || [];
            this.tag.section.push(line);
            Array.prototype.push.apply(this.tag.tokens, line.match(/\S+/g));
        }
        else {
            return done(new Error('Invalid PBN: ' + line));
        }
        done();
    } 
}

// ================================
// Console.log

// ================================
// Exports
module.exports = {
    PbnStream
}