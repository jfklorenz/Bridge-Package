# 1. CardSet
The `class CardSet` is a template for a set of (Bridge) playing cards.

A set of playing cards can be used to represent either a hand or a deck of cards.

---

## 2. Cards

#### 2.0 Shuffle
Shuffeling the cards within a set is implemented with the Knuth-Morris Algorithm.
```javascript
/*
Shuffles the CardSet
*/
CardSet.shuffle()
```

#### 2.1. Add Card
```javascript
/*
Adds a Card to the CardSet.
@param {Card}
*/
CardSet.addCard(Card)
```

#### 2.2. Add Cards
```javascript
/*
Adds multiple Cards to the CardSet.
@param {List of Cards}
*/
CardSet.addCards([Card,Card,...])
```

#### 2.3. Remove Card
```javascript
/*
Removes a Cards from the CardSet.
@param {Card}
*/
CardSet.removeCard(Card)
```

#### 2.4. Remove Cards
```javascript
/*
Removes multiple Cards from the CardSet.
@param {List of Cards}
*/
CardSet.removeCards([Card,Card,...])
```

---

## 3. Suits

#### 3.0. Suit
```javascript
/*
Gives all Cards of a given suit.
@param {number || string} Integer or String representation of the suit
@returns {List of Cards}
*/
CardSet.suit(suit)
```

#### 3.1. - 3.4. Single Suits
```javascript
/*
Gives all Cards of a given suit.
@param {number || string} Integer or String representation of the suit
@returns {List of Cards}
*/
CardSet.clubs
CardSet.diamonds
CardSet.hearts
CardSet.spades
```

#### 3.5. - 3.8. Single Suit Length
```javascript
/*
Gives the length of a given suit, equivalent to suit.length.
@param {number || string} Integer or String representation of the suit
@returns {number} Amount of cards in the suit
*/
CardSet.club
CardSet.diamond
CardSet.heart
CardSet.spade
```

---

## 4. Distributions

#### 4.1. Distribution
```javascript
/*
Gives the distribution of the CardSet.
@returns {List of number} List with length of all suits
*/
CardSet.distribution
```

#### 4.2. Shortest Suit
```javascript
/*
Gives the length of the shortest suit of the CardSet.
@returns {number} length of shortest suit
*/
CardSet.shortestSuit
```

#### 4.3. Longest Suit
```javascript
/*
Gives the length of the longest suit of the CardSet.
@returns {number} length of longest suit
*/
CardSet.longestSuit
```

#### 4.4. Handsize
```javascript
/*
Gives the size of the CardSet.
@returns {number} size of CardSet
*/
CardSet.handsize
```

#### 4.5. is Full Hand
```javascript
/*
Checks if CardSet is a full Hand, i.e. 13 Cards.
@returns {boolean}
*/
CardSet.isFull
```

#### 4.6. is Empty Hand
```javascript
/*
Checks if CardSet is empty.
@returns {boolean}
*/
CardSet.isEmpty
```

#### 4.7. is Deck
```javascript
/*
Checks if CardSet is a full deck of Cards, i.e. 52 Cards.
@returns {boolean}
*/
CardSet.isDeck
```

#### 4.8. is Valid
```javascript
/*
Checks if CardSet is valid, i.e. has no duplicates.
@returns {boolean}
*/
CardSet.isValid
```

---

## 5. Bridge Related

#### 5.1. Highcard Points (HCP)
```javascript
/*
Gives the amount of highcard points (hcp) of the CardSet.
@returns {number} amount of highcard points
*/
CardSet.hcp
```

#### 5.2. Control Points
```javascript
/*
Gives the amount of controls the CardSet.
@returns {number} amount of control points
*/
CardSet.controls
```

#### 5.3. Distribution Points
```javascript
/*
Gives the amount of distribution points the CardSet.
@returns {number} amount of distribution points
*/
CardSet.distributionPoints
```

#### 5.4. Handtype
```javascript
/*
Gives the Handtype of a CardSet.
@returns {string} handtype
*/
CardSet.handtype

// Examples
const handtypes = ["Balanced", "1-Suiter", "2-Suiter", "3-Suiter"]
```