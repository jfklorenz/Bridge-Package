# Dealer

This folder contains all *Javascript* files needed to deal and analyze a bridge hand.

| File | Content | State |
| ------ | ------ | ------ |
| Card | *Class* representing a single playing *Card* | :ballot_box_with_check: |
| Deck | *Class* representing a *Deck* of 52 *Cards* | :ballot_box_with_check: |
| Hand | *Class* representing a *Hand* of *Cards* | :ballot_box_with_check: |
| Player | *Class* representing a *player* within a game | |
| Shuffle | A *helper* function for shuffling a *Deck* of *Cards* | :ballot_box_with_check: |

---

## Card
A *class* representing a single playing *Card*.

| Function | Return | Explaination |
| ------ | ------ | ------ |
| get distribution | [spadesCnt, heartsCnt, diamondsCnt, clubsCnt]  | calculates the distribution |

| get hcp() | Integer | calculates the high card points of the hand |
| get controls() | Integer | calculates the control points of the hand |
| get distPoints() | Integer | calucaltes the distribution points of the hand |



### Tests

| Type | Test | State |
| ------ | ------ | ------ |
| Error | ID invalid | :ballot_box_with_check: |
| Func | correct rank | :ballot_box_with_check: |
| Func | correct suit | :ballot_box_with_check: |
| Func | correct represetation | :ballot_box_with_check: |
| Func | correct hcp | :ballot_box_with_check: |
| Func | correct controls | :ballot_box_with_check: |
| Case | 2 of clubs | :ballot_box_with_check: |
| Case | 3 of clubs | :ballot_box_with_check: |


---

## Deck
A *class* representing a *Deck* of playing cards.

### Tests

| Type | Test | State |
| ------ | ------ | ------ |

---

## Hand
A *class* representing a *Hand* of playing cards.

### Tests

| Type | Test | State |
| ------ | ------ | ------ |

---


## Player
A *class* representing a *Player* of a card game.

### Tests

| Type | Test | State |
| ------ | ------ | ------ |

---

## Shuffle
A simple shuffle method based on the Fisher-Yates (aka Knuth) shuffle.
