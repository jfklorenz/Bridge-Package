# Scoring

*Javascript* files for bridge scoring.

For a detailed description of every scoring please read the *LaTeX scoring* manual.

## Tests
Testsctructure:

| Type | Content
| ------ | ------ |
| Error | Error or invalid input cases |
| Func | Functionality of the method |
| Case | An explicit experimental case |

---

## IMPs

**State:** Final

- Input: Score difference
- Output: Resulting IMPs

**Info:**

- Negative Input produces a mirrored output.
- All possible cases manually included.

### Tests

**Every case tested:** :ballot_box_with_check:

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | score difference invalid | :ballot_box_with_check: |
| Func | SD -> IMPs => -SD -> -IMPS | :ballot_box_with_check: |
| Case | Every possible Score within [-10.000, 10.000] |

---

## Matchpoints

**State:** Working but more tests needed

### scoreToMatchpoints

Scores -> Matchpoints

- Input: List of Scores
- Output: List of Matchpoints

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Func | Empty list | :ballot_box_with_check: |
| Func | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |

### matchpointsToPercentages

Matchpoints -> Percentages

- Input: List of Matchpoints
- Output: List of Percentages

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Func | Empty list | :ballot_box_with_check: |
| Func | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |

### matchpointsReverse
Matchpoints -> Matchpoints other direction

- Input: List of Matchpoints
- Output: List of Matchpoints

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Func | Empty list | :ballot_box_with_check: |
| Func | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |
| Case | Random case | :ballot_box_with_check: |

---

## Score

**State:** Final, could test every score

Generating every bridge score.

| Input | Range | Representing |
| ------ | ------ |
| Level | Integer [0,6] | [1, 7]  |
| Suit | Integer [0,4] | clubs, diamonds, hearts, spades, no-trump |
| Double | Integer [0, 2] | no double, double, redouble |
| Vulnerability | Integer [0, 1] | not vulnerable, vulnerable |
| Declarer | Integer [0, 3] | North, East, South, West |
| Result | Integer [-13, 6] | [-13, 6] |

- Output: [-7600, +3160] (when declaring!)

### Tests

**Every case tested:** not yet

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | Suit invalid | :ballot_box_with_check: |
| Error | Level invalid | :ballot_box_with_check: |
| Error | Double invalid | :ballot_box_with_check: |
| Error | Declarer invalid | :ballot_box_with_check: |
| Error | Vulnerability invalid | :ballot_box_with_check: |
| Error | Result invalid | :ballot_box_with_check: |
| Func | Gamebonus | :ballot_box_with_check: |
| Func | Slambonus | :ballot_box_with_check: |
| Func | Double / Redouble | :ballot_box_with_check: |
| Func | Vulnerability | :ballot_box_with_check: |
| Func | Declarer / Result | :ballot_box_with_check: |
| Case | Extreme Results | :ballot_box_with_check: |
| Case | 1 club | :ballot_box_with_check: |
| Case | 1 diamond | :ballot_box_with_check: |

---

## Victory Points

-- Input: Amount of IMPs, boardCnt
-- Output: [VP team 1, VP team 2]

**Info:**

- The sum of the VP of both teams has to equal 20.
- Negative Input produces a mirrored output.
- All possible cases manually included.
- Supplied by the *World Bridge Federation* (WBF)

### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | IMPs not valid | :ballot_box_with_check: |
| Error | boardCnt not valid | :ballot_box_with_check: |
| Case | IMPS/Boards: 16/32 | :ballot_box_with_check: |
| Case | IMPS/Boards: 47/32 | :ballot_box_with_check: |
