# Scoring / Features
This folder includes all scoring features.

- 1. Score
- 2. Matchpoints
- 3. IMPs
- 4. Victory Points (VP)

---

## 1. Score
The `score()` methods is used to calculate the *Score* of a single *Deal*.
```javascript
/* 
@param {number} Level, 0..6 ~ 1..7
@param {number} Suit, 0..4 ~ Clubs...No-Trump
@param {number} Double, 0..2 ~ No Double, Double, Redouble
@param {number} Declarer, 0..3 ~ North, East, South, West
@param {number} Vulnerable, 0,1 ~ Not Vulnerable, Vulnerable
@param {number} Result, -13,..+6
@returns {number} Score
*/
score(level, suit, double, declarer, vulnerability, result)

// Examples
// 2 Clubs XX Vulnerable -5 by North
score(0, 0, 2, 0, 1, -5) == -2800

// 3 NT Vulnerable = by East
score(2, 4, 0, 1, 1, 0) == -600
```

---

## 2. Matchpoints
There are several methods implemented for calculating all aspects around *Matchpoints*.

#### 2.1. scoresToMatchpoints
The `scoresToMatchpoints()` method is used to calculate all North/South *Matchpoints* for a single *Board*.

```javascript
/* 
@param {list} List of Scores
@returns {list} List of Matchpoints
*/
scoresToMatchpoints([level, suit, double, declarer, vulnerability, result])

// Examples
scoresToMatchpoints([0,0,0,0,0,0]) == 0
scoresToMatchpoints([0,0,0,0,0,0]) == 0
scoresToMatchpoints([0,0,0,0,0,0]) == 0
scoresToMatchpoints([0,0,0,0,0,0]) == 0
```

#### 2.2. matchpointsToPercentages
The `scoresToMatchpoints()` method is used to calculate all *Matchpoint Percentages* for a single *Board*.

```javascript
/* 
@param {list} List of Matchpoints
@returns {number} List of Percentages
*/
matchpointsToPercentages([level, suit, double, declarer, vulnerability, result])

// Examples
matchpointsToPercentages([0,0,0,0,0,0]) == 0
matchpointsToPercentages([0,0,0,0,0,0]) == 0
matchpointsToPercentages([0,0,0,0,0,0]) == 0
matchpointsToPercentages([0,0,0,0,0,0]) == 0
```

#### 2.3. matchpointsReverse
The `matchpointsReverse` method is used to calculate the respective East/West *Matchpoints* for a single *Board*.

```javascript
/* 
@param {list} List of Matchpoints
@returns {list} List of reverse Matchpoints
*/
matchpointsReverse([level, suit, double, declarer, vulnerability, result])

// Examples
matchpointsReverse([0,0,0,0,0,0]) == 0
matchpointsReverse([0,0,0,0,0,0]) == 0
matchpointsReverse([0,0,0,0,0,0]) == 0
matchpointsReverse([0,0,0,0,0,0]) == 0
```

---

## 3. IMPs

#### 3.1. scoreToImps
The `scoreToImps()` method is used to calculate the *IMPs* for a single *Deal*.

```javascript
/* 
@param {number} Score difference
@returns {number} IMPs
*/
scoreToImps([level, suit, double, declarer, vulnerability, result])

// Examples
scoreToImps([0,0,0,0,0,0]) == 0
scoreToImps([0,0,0,0,0,0]) == 0
scoreToImps([0,0,0,0,0,0]) == 0
scoreToImps([0,0,0,0,0,0]) == 0
```

---

## 4. Victory Points

#### 4.1. impsToVictorypoints
The `impsToVictorypoints()` method is used to calculate the *Victory Points* for a single *Deal*.

```javascript
/* 
@param {number} IMP difference
@returns {number} Victory points
*/
impsToVictorypoints(imps)

// Examples
impsToVictorypoints([0,0,0,0,0,0]) == 0
impsToVictorypoints([0,0,0,0,0,0]) == 0
impsToVictorypoints([0,0,0,0,0,0]) == 0
impsToVictorypoints([0,0,0,0,0,0]) == 0
```