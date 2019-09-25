var stream = require('stream');
var util = require('util');
var lines = require('lstream');
var pipe = require('multipipe');

let tagLine = /^\[\s*([a-zA-Z0-9_]+)\s*"(.*)"\s*\]$/;
let emptyLine = /^\s*$/;
let crlf = '\r\n';

function PbnStream(opts) {
    if (!(this instanceof PbnStream)) return new PbnStream(opts);
    opts = opts || {};
    opts.objectMode = true;
    stream.Transform.call(this, opts);
    this.tagValues = {};
}
util.inherits(PbnStream, stream.Transform);

function parseDeal(s) {
    let cards = [],
        suits = 'SHDC',
        seats = 'NESW',
        suitIndex = 0,
        seatIndex = 0;

    seatIndex = seats.indexOf(s.charAt(0));
    for (let i = 2; i < s.length; ++i) {
        let c = s.charAt(i);
        if (c === ' ') {
            seatIndex = (seatIndex + 1) % 4;
            suitIndex = 0;
        } else if (c === '.') {
            ++suitIndex;
        } else if (c === '-') {
          // skip empty suit
        }
        else {
            cards.push({
                seat: seats[seatIndex],
                suit: suits[suitIndex],
                rank: c
            });
        }
    }

    return cards;
}

PbnStream.prototype._transform = function(line, encoding, done) {
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
};


PbnStream.prototype._flush = function(done) {
    if (this.comment) {
        this.produce(this.comment);
        this.comment = null;
    }
    this.produce(null);
    done();
};

PbnStream.prototype.produce = function(data) {
    if (!this.ingame && data && data.type === 'tag') {
        this.produce({ type: 'game' });
        this.ingame = true;
    }
    if (this.tag) {
        let tag = this.tag;
        this.tag = null;
        this.produce(tag);
    }

    if (data !== null)
        this.push(data);
};

let pbn = opts => pipe(lines(), new PbnStream(opts));
pbn.convertBRI = opts => pipe(bri(opts), pbn());
pbn.convertDGE = opts => pipe(dge(opts), pbn());
pbn.convertDUP = opts => pipe(dup(opts), pbn());
pbn.autoConvert = opts => autoconvert(opts);

pbn.check = function(chunk) {
    let magic = chunk.toString('ascii', 0, 5);
    return magic === '% PBN';
};

module.exports = pbn;