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
class LineStream extends stream.Transform {
  constructor(options) {
    super(options);
    this._tmpline = "";
  }

  // ================================
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

  // ================================
  _flush(done) {
    if (this._tmpline.length > 0) {
      this.push(this._tmpline);
    }
    done();
  }
}

// ================================
// 2. PBN Stream
class PbnStream extends stream.Transform {
  constructor(options) {
    super({ objectMode: true, ...options });
    this.state = "Start";
    this._tmpTag = null;
  }

  // ================================
  _transform(line, encoding, done) {
    let tag;
    switch (this.state) {
      // --------------------------------
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
      // --------------------------------
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
      // --------------------------------
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
          this.state = "Comment";
          this._tmpTag.comment = [];
          return done();
        }
        if (this._tmpTag !== null) {
          this._tmpTag.continuation = [line];
          this.state = "Continuation";
          return done();
        }
        return done(new Error("Invalid Line:\n" + line));
      // --------------------------------
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
      // --------------------------------
      case "Comment":
        if (line[0] === "}") {
          this.state = "Ingame";
          return done();
        }
        this._tmpTag.comment.push(line);
        return done();
      // --------------------------------
      case "NewGame":
        this.push(this._tmpTag);
        this.push({ type: "NewGame" });
        this.state = "Ingame";
        return done();
    }
  }

  // ================================
  _flush(done) {
    if (this._tmpTag !== null) {
      this.push(this._tmpTag);
      this.push({ type: "NewGame" });
      this._tmpTag = null;
    }
    done();
  }
}

// ================================
// 3. Game Stream
class GameStream extends stream.Transform {
  constructor(options) {
    super({ objectMode: true, ...options });
    this.state = "Ingame";
    this._tmpGame = {};
  }

  // ================================
  _transform(tag, encoding, done) {
    if (tag.type === "Pbn") {
      this.state = "Info";
    }
    switch (this.state) {
      // --------------------------------
      case "Info":
        this._tmpGame[tag.type] = tag.version;
        if (tag.type === "Format") {
          this.state = "Ingame";
          this.push(this._tmpGame);
          this._tmpGame = {};
        }
        return done();
      // --------------------------------
      case "Ingame":
        if (tag.type === "NewGame") {
          this.state = "NewGame";
          return done();
        }
        this._tmpGame[tag.tag] = tag.value;
        if (tag.continuation !== undefined) {
          if (this._tmpGame.Continuations === undefined) {
            this._tmpGame.Continuations = {};
          }
          this._tmpGame["Continuations"][tag.tag] = tag.continuation;
        }
        if (tag.comment !== undefined) {
          if (this._tmpGame.Comments === undefined) {
            this._tmpGame.Comments = {};
          }
          this._tmpGame["Comments"][tag.tag] = tag.comment;
        }
        return done();
      // --------------------------------
      case "NewGame":
        this.push(this._tmpGame);
        this.state = "Ingame";
        this._tmpGame = {};
        return done();
    }
  }

  // ================================
  _flush(done) {
    if (this._tmpGame !== null) {
      this.push(this._tmpGame);
      this._tmpGame = null;
    }
    done();
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
