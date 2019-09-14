# Dealer

This folder contains all *Javascript* files needed to play a virtual game of Bridge.

---

## Card
A *class* representing a single playing *Card*.

```javascript
class Card(id)
```

| Attribute | Value |
| ------ | ------ |
| id | Integer from [0, 51] |
| rank |   |
| suit |   |
| repr_rank |   |
| repr_suit |   |
| repr_card |   |
| inspect |   |


### Tests

| Type | Test | State |
| ------ | ------ | ------ |
| Error | ID invalid | [ ] |
| Func | correct rank | [ ] |
| Func | correct suit | [ ] |
| Func | correct represetation | [ ] |
| Func | correct hcp | [ ] |
| Func | correct controls | [ ] |
| Case | 2 of clubs | [ ] |
| Case | 3 of clubs | [ ] |


---

## Hand
A *class* representing a *hand* of playing cards.

```javascript
class Hand
```

| Attribute | Value |
| ------ | ------ |
| cards | List of *Cards* |
| distribution | List with the amount of cards of each suit, i.e. [clubsCnt, diamondsCnt, heartsCnt, spadesCnt]  |
| clubsCnt | Amount of *clubs* cards |
| diamondsCnt | Amount of *diamond* cards |
| heartsCnt | Amount of *heart* cards |
| spadesCnt | Amount of *spade* cards |
| clubs | *List* of all *club* cards |
| diamonds | *List* of all *diamond* cards |
| hearts | *List* of all *heart* cards |
| spades | *List* of all *spade* cards |
| all | *List* of *List* of cards of all suits |
| fullHand | *true* if the hand is full (i.e. 13 cards), *false* otherwise |

| Method | Input | Output |
| ------ | ------ | ------ |
| draw | *List* of *Cards* | None / Adds these cards to the hand |

### Tests

| Type | Test | State |
| ------ | ------ | ------ |


---

## Player
A *class* representing a *Player* of a card game.

```javascript
class Player
```
| Attribute | Value |
| ------ | ------ |
| dbv | id / dbv-number |
| name | Name of the player |
| hand | Hand of the player |

### Tests

| Type | Test | State |
| ------ | ------ | ------ |

---

## Shuffle
A simple shuffle method based on the Fisher-Yates (aka Knuth) shuffle.
