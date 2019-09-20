# 1. Card
The `class Card` is a template for (Bridge) playing cards.

There are several ways to initialize a card, the main method being:

```javascript
const card = new Card(rank, suit)

// Examples
const club4 = new Card(2,0)
const spadeA = new Card(12,3)
const diamond8 = new Card(6,1)
```

---

## 2. Base Attributes & Representation
Each card has the *attributes* `rank` and `suit`, which define the card and are therefor mandetory.


#### 2.1. Rank
```javascript
/*
Rank of a card
@param {number} [0,1,2,3,4,5,6,7,8,9,10,11,12]
*/
Card.rank
```

#### 2.2. Suit
```javascript
/*
Suit of a card
@param {number} 0: Clubs, 1: Diamonds, 2: Hearts, 3: Spades
*/
Card.suit
```

The following **methods** can be used to generate a specific output.

#### 2.3. toString
```javascript
/*
Calls toStringLocale with locale = "en".
@returns {string} String representation of the Card
*/
Card.toString()

// Examples
const club7 = new Card(5,0)
club7.toString() == "7 of Clubs"
```

#### 2.4. toStringLocale
```javascript
/*
Gives a (human readable) String representation of the Card.
@param {string} locale
@returns {string} String representation of the Card
*/
Card.toStringLocale(locale = "en")

// Examples
const heartQ = new Card(10,2)
heartQ.toStringLocale("en") == "Queen of Hearts"
const heartQ = new Card(10,2)
heartQ.toStringLocale("de") == "Coeur Dame"
```

Finally there are *class intern* methods to transform the chosen language.

#### 2.5. _rankToInteger
```javascript
/*
Converts the String representation of a rank into a locale Number.
@param {string} rank 
@param {string} locale, default = "en"
@returns {number} rank of respetive locale
*/
Card._rankToInteger(rank, locale = "en")

// Examples
Card._rankToInteger("A") == 12
Card._rankToInteger("Q") == 10
Card._rankToInteger("D", "de") == 10
```
#### 2.6. _rankToString
```javascript
/*
Converts the Number representation of a rank into a locale String.
@param {number} rank 
@param {string} locale, default = "en"
@returns {string} rank of respetive locale
*/
Card._rankToString()

// Examples
Card._rankToString(8) == "T"
Card._rankToString(10) == "Q"
Card._rankToString(10, "de") == "D"
Card._rankToString(0) == "2"
```

#### 2.7. _suitToInteger
```javascript
/*
Converts the String representation of a suit into a locale Number.
@param {string} suit 
@param {string} locale, default = "en"
@returns {number} suit of respetive locale
*/
Card._suitToInteger(suit, locale = "en")

// Examples
Card._suitToInteger("Spades") == 3
Card._suitToInteger("Clubs") == 0
Card._suitToInteger("Karo", "de") == 1
```

#### 2.8. _suitToString
```javascript
/*
Converts the Number representation of a suit into a locale String.
@param {number} suit 
@param {string} locale, default = "en"
@returns {string} suit of respetive locale
*/
Card._suitToString(suit, locale = "en")

// Examples
Card._suitToString(0) == "Clubs"
Card._suitToString(2) == "Hearts"
Card._suitToString(2, "de") == "Coeur"
```

---

## 3. Card Generation
The following methods can be used to generate a single *Card*.

#### 3.1. fromLocale
```javascript
/*
Generates a Card from a locale String representation.
@param {string} rank
@param {string} suit
@param {string} locale
return {Card} the respective Card
*/
Card.fromLocale(rank, suit, locale = "en")

// Examples
const club4 = Card.fromLocale("4", "Clubs")
const diamond8 = Card.fromLocale("8", "Diamonds", "en")
const spadeQ = Card.fromLocale("Dame", "Pik", "en")
```

#### 3.2. fromEN
```javascript
/*
Calls fromLocale with locale = "en".
@param {string} rank
@param {string} suit
@return {Card} the respective Card
*/
Card.fromEN(rank, suit)

// Examples
const club7 = Card.fromEN("7", "Clubs")
const heartK = Card.fromEN("K", "Hearts")
```


#### 3.3. fromENS
```javascript
/*
Calls fromLocale with locale = "ens".
@param {string} ranksuit
@return {Card} the respective Card
*/
Card.fromENS(ranksuit)

// Examples
const spade4 = Card.fromENS("4s")
const diamondA = Card.fromENS("Ad")
```

#### 3.4. fromDE
```javascript
/*
Calls fromLocale with locale = "de".
@param {string} rank
@param {string} suit
@return {Card} the respective Card
*/
Card.fromDE(rank, suit)

// Examples
const spade6 = Card.fromDE("6", "Pik")
const clubJ = Card.fromDE("Bube", "Treff")
```

#### 3.5. fromDES
```javascript
/*
Calls fromLocale with locale = "des".
@param {string} ranksuit
@return {Card} the respective Card
*/
Card.fromDES(ranksuit)

// Examples
const heart7 = Card.fromDES("c7")
const heart7 = Card.fromDES("c7")
```

---

## 4. Checker

#### 4.0. equals
```javascript
/*
Equality check for a card with another
@param {Card} A playing card
@returns {boolean} true if equal, false otherwise
*/
Card.equals(Card)

// Examples
const card1 = new Card(0,0)     // 2 of Clubs
const card2 = new Card(12,3)    // Ace of Spades
const card3 = new Card(0,0)     // 2 of Clubs

card1.equals(card2) == false
card1.equals(card3) == true
card3.equals(card1) == true
```

#### 4.1. isValidRank
```javascript
/*
Valid ranks: [0,1,2,3,4,5,6,7,8,9,10,11,12]
@param anything
@returns {boolean} true if valid, false otherwise
*/
static isValidRank(rank)

// Examples
Card.isValidRank(8) == true
Card.isValidRank("Z") == false
Card.isValidRank(27) == false
```

#### 4.2. isValidSuit
```javascript
/*
Valid suits: [0,1,2,3]
@param anything
@returns {boolean} true if valid, false otherwise
*/
static isValidSuit(rank)

// Examples
Card.isValidSuit(2) == true
Card.isValidSuit(4) == false
Card.isValidSuit("Hearts") == false
```

---

## 5. Bridge Related

#### 5.1. Highcard Points (HCP)
```javascript
/*
Highcard points of a card
A / K / Q / J / Rest
@returns {number} 4 / 3 / 2 / 1 / 0
*/
Card.hcp
```

#### 5.2. Control Points
```javascript
/*
Control points of a card
A / K / Rest
@returns {number} 2 / 1 / 0
*/
Card.controls
```