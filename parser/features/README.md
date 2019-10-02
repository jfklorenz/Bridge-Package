# PBN-Parser / Features
The **features** folder contains the source code. The following streaming features are implemented:

- [x] Stream &rarr; Lines 
- [x] Lines &rarr; PBN Tags 
- [x] PBN Tags &rarr; PBN Format 

---

### Initiating the Stream
To start the *stream* `fs.createReadStream` needs to be called on the respective file. 

```javascript
const filestream = fs.createReadStream(path.resolve(__dirname, "example.PBN"), {
  encoding: "ascii"
});
```

---


### Stream &rarr; Lines
After initiating the *stream* it is piped through a *LineStream*.

It splits the input *stream* into seperate lines and pushes them.

```javascript
filestream
  .pipe(new LineStream({ encoding: "utf8" }))
  .on("data", line => {
    console.log(line);
  });  
```

---

### Lines &rarr; PBN Tags
The seperate lines will now be piped through a *PbnStream*.

It recognizes *Tags* and *Tokens* and generates respective *Javascript* objects and pushes them.

```javascript
filestream
  .pipe(new LineStream({ encoding: "utf8" }))
  .pipe(new PbnStream())
  .on("data", line => {
    console.log(line);
});
```

---

### PBN Tags &rarr; PBN Format

```javascript
filestream
  .pipe(new LineStream({ encoding: "utf8" }))
  .pipe(new PbnStream())
  .pipe(new GameStream())
  .on("data", line => {
    console.log(line);
  });
```

---

### Output Format

```javascript
test
```