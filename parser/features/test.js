// ================================
// Imports
const stream = require("stream");
const fs = require("fs");
const path = require("path");

// ================================
// Constants
let tagLine = /^\[\s*([a-zA-Z0-9_]+)\s*"(.*)"\s*\]$/;
let emptyLine = /^\s*$/;
let crlf = "\r\n";

// ================================
//
class LineStream extends stream.Transform {
  constructor(options) {
    super(options);
    this._tmpline = "";
  }

  _transform(chunk, encoding, done) {
    let actualChunk = this._tmpline + chunk;
    let lines = actualChunk.split(/\r\n|\r|\n/);
    if (lines.length === 1) {
      this._tmpline = actualChunk;
      return done();
    }
    this._tmpline = lines.pop();

    lines.map(l => (l.length === 0 ? "\n" : l)).forEach(l => this.push(l));
    done();
  }

  _flush(done) {
    if (this._tmpline.length > 0) {
      this.push(this._tmpline);
    }
    done();
  }
}

class PbnStream extends stream.Transform {
  constructor(options) {
    super({ objectMode: true, ...options });
    this.state = "Start";
    this._tmpTag = null;
  }

  _transform(line, encoding, done) {
    let tag;
    switch (this.state) {
      case "Start":
        const version = line.match(/^%\s+PBN\s+(\d)\.(\d)/);
        if (version !== null) {
          this.state = "Format";
          this.push({
            type: "Pbn",
            version: { major: version[1], minor: version[2] }
          });
          done();
        } else {
          done(new Error("Not a .PBN file"));
        }
        break;
      case "Format":
        const format = line.match(/^%\s*(IMPORT|EXPORT)/);
        if (format !== null) {
          this.state = "Ingame";
          this.push({ type: "Format", version: format[1] });
          done();
        } else {
          done(new Error("Not a valid format"));
        }
        break;
      case "Ingame":
        if ("[{%".includes(line[0]) && this._tmpTag !== null)
          this.push(this._tmpTag);
        if (line[0] === "%") return done();
        tag = line.match(/^\[\s*([a-zA-Z0-9_]+)\s*"(.*)"\s*\]$/);
        if (tag !== null) {
          this._tmpTag = {
            type: "Tag",
            tag: tag[1],
            value: tag[2]
          };
          return done();
        }
        if (line[0] === "{") {
          this.state = "Comment/Tag";
          return done();
        }
        if (this._tmpTag !== null) {
          this._tmpTag.continuation = [line];
          this.state = "Continuation";
          return done();
        }
        return done(new Error("Invalid Line:\n" + line));
      case "Continuation":
        tag = line.match(/^\[\s*([a-zA-Z0-9_]+)\s*"(.*)"\s*\]$/);
        if (tag !== null) {
          this.push(this._tmpTag);
          this._tmpTag = {
            type: "Tag",
            tag: tag[1],
            value: tag[2]
          };
          this.state = "Ingame";
          return done();
        }
        if (line === "\n") {
          this.state = "NewGame";
        } else {
          this._tmpTag.continuation.push(line);
        }
        return done();
      case "NewGame":
        this.push(this._tmpTag);
        this._tmpTag = null;
        this.push({ type: "NewGame" });
        this.state = "Ingame";
        return done();
    }
  }

  _flush() {
    if (this._tmpTag !== null) {
      this.push(this._tmpTag);
      this._tmpTag = null;
    }
  }
}

class GameStream extends stream.Transform {
  constructor(options) {
    super({ objectMode: true, ...options });
    this._tmpGame = {};
  }

  _transform(tag, encoding, done) {
    switch (tag.type) {
      case "Pbn":
        this._tmpGame.pbn = tag.version;
        return done();
      case "Format":
        this._tmpGame.format = tag.version;
        this.push(this._tmpGame);
        this._tmpGame = {};
        return done();
      case "NewGame":
        this.push(this._tmpGame);
        this._tmpGame = {};
        return done();
      case "Tag":
        this._tmpGame[tag.tag] = tag.value;
        return done();
    }
    return done();
  }
}

// ================================
// Console.log
const filestream = fs.createReadStream(path.resolve(__dirname, "example.PBN"), {
  encoding: "ascii"
});

//filestream.pipe(lineStream).on("data", console.log)
filestream
  .pipe(new LineStream({ encoding: "utf8" }))
  .pipe(new PbnStream())
  .pipe(new GameStream())
  .on("data", line => {
    console.log(line);
  });

// ================================
// Exports
module.exports = {
  LineStream
};
