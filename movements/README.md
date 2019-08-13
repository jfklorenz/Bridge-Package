# Movements

*Javascript* files for bridge movements.

| Movement | Tests | State |
| ------ | ------ | ------ |
| Board Groups | Wiki | :ballot_box_with_check: |
| Mitchell | Wiki | :ballot_box_with_check: |  
| Mitchell - Crisscross | Wiki | :ballot_box_with_check: |
| Mitchell - Extended Hesitation | All / Only | :ballot_box_with_check: |
| Mitchell - Skip | not twice | :ballot_box_with_check: |
| Mitchell - Two Stanza | Wiki | :ballot_box_with_check: |

---

## Board Groups

**Status:** :ballot_box_with_check:

A *board group* is a *set of boards* that is played during a specific round at a specific table.

### Wiki

The board groups are designated by letters in the preceding table because the specific boards in each group depends upon the number of deals in the game, as shown in the following table. A normal session of an open event would play 25 boards with this movement, while events for less experienced players typically would play fewer boards and a championship event for experts could play more -- but the movement also can run with fewer boards if it's desirable to hold a shorter game for some other reason.

### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Error | groupCnt invalid | :ballot_box_with_check: |
| Error | boardCnt - groupCnt ratio invalid | :ballot_box_with_check: |
| Func | exactly boardCnt amount of boards | :ballot_box_with_check: |
| Func | correct group sizes | :ballot_box_with_check: |
| Case | wikipedia| :ballot_box_with_check: |
| Case | 15 / 5 | :ballot_box_with_check: |
| Case | 25 / 5 | :ballot_box_with_check: |
| Case | 30 / 5 | :ballot_box_with_check: |
| Case | 20 / 5 | :ballot_box_with_check: |
| Case | 10 / 5 | :ballot_box_with_check: |


---

## AWL

**Status:** :ballot_box_with_check:

| Type | Parameter |
| ------ | ------ |

| tableCnt | *odd* |

### Wiki

The American Whist League (AWL) Movement is a variation of the Standard Mitchell Movement in which the East-West pairs move down two tables rather than up one table. The following table shows the AWL Movement for five tables.

Although it is a legal movement, the AWL movement is seldom used in standard Duplicate Bridge games because it offers no advantage whatsoever over a Standard Mitchell Movement. Rather, stripped of the first round, the AWL Movement finds its niche in "Board-a-Match" (BAM) team competition, as discussed below. Note that the numbers of the North-South pair (table) and the East-West pair playing each group of boards in Round 2 and Round 5 are reversed, and the same is true of the numbers of the North-South pair (table) and the East-West pair playing each group of boards in Round 3 and Round 4. In BAM competition, the North-South and East-West pair numbers are the two partnerships of the respective team.

### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Error | pairCnt invalid | :ballot_box_with_check: |
| Error | tableCnt ivnalid | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Case | Wikipedia example | :ballot_box_with_check: |

---

## Mitchell Movement

**Status:** :ballot_box_with_check:

| Type | Parameter |
| ------ | ------ |
| legal tableCnt | *odd* |
| complete | :ballot_box_with_check: |

### Wiki

The Standard Mitchell Movement, also known as Straight Mitchell Movement, has two separate groups of players. One group always sits North-South and remains at the same table through all rounds of play. The other group always sits East-West. At the end of each round, the pairs sitting East-West move up one table, with the pair at the last table going to the first table, and the boards (deals) move down one table, with boards from the first table going to the last table. Thus, the North-South pairs play consecutive groups of boards while the East-West players play alternate groups of boards as the movement progresses. Pairs usually are identified by the number of the table at which they start and their direction of play (for example, Pair 3 North-South or Pair 5 East-West). The North-South and East-West fields usually are scored and ranked separately, producing a winner in each direction, but combining both fields for ranking is an option (see below). The table below shows the East-West pair (EW) and the board group (BG) at each table in a Standard Mitchell Movement for five tables with five rounds of play.

In a complete Mitchell movement, the number of rounds is equal to the number of tables and the number of board groups in play so each North-South pair plays against each East-West pair and all contestants play all of the deals in the session. It's possible to play an incomplete movement consisting of fewer rounds, but the variation known as a Web movement, described below, typically is a better option because it allows all pairs to play all of the deals (boards) in play during the session.

A Straight Mitchell Movement requires an odd number of tables so that the East-West pairs interleave with the boards that they have already played when they reach the midpoint of the movement. With an even number of tables, the East-West pairs would meet boards that they played in the first round at the midpoint of the complete movement so this situation requires a variation of the movement. The most common modifications are a Skip Mitchell if number of tables does not allow a complete movement or the Relay and Bye Stand Mitchell (also called a Relay and Share Mitchell in the United Kingdom) for a complete movement.

When there is an odd number of pairs, the most common practice is to add a phantom pair to complete the final table. Thus, a game with seventeen pairs uses a movement for nine tables with one position vacant. The phantom pair, which may be in either direction, follows the same progression as the missing actual pair. The pairs playing in the opposite direction "sit out" when scheduled to play the phantom pair, so they do not play the respective deals (boards). The Rover Mitchell Movement and Two-Way Rover Mitchell Movement, both described below, in which the odd pair displaces a different pair each round with the displaced pair sitting out, are alternative options in this situation.

### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Error | pairCnt invalid | :ballot_box_with_check: |
| Error | tableCnt ivnalid | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Case | Wikipedia example | :ballot_box_with_check: |

---

### Crisscross Mitchell

**Status:** :ballot_box_with_check:

#### Wiki

The Crisscross Mitchell Movement alters the movement of players and boards in a Standard Mitchell Movement to permit a complete movement without a relay and bye stand (or share and relay) if the number of tables is a multiple of four (4). This movement is used most commonly with eight or twelve tables, but it also can be used with four or sixteen tables.

- The even-numbered East-West pairs and the odd-numbered East-West pairs move in contrary directions, so that pairs moving up trade places ("crisscross") with pairs at the next higher table moving down at the end of each round.
- The boards move in the opposite direction from the East-West pairs leaving each table, thus also crisscrossing with the next higher or lower table, except at the midpoint of the movement when the boards go to the opposite table in the movement (also a crisscross) and reverse direction.

Thus, the odd East-West pairs play the odd board groups in the first half of the movement and the even board groups in the second half of the movement and the even East-West pairs play the even board groups do the reverse.

One noteworthy feature of the Crisscross Mitchell Movement is that it has the same set-up as a Straight Mitchell Movement with one additional table. Thus, the director can add a table to accommodate players who arrive after the movement has been set or, conversely, can retreat to this movement after setting a Straight Mitchell Movement for one additional table if players who are running late fail to show or if a pair scheduled to have the first sit-out decides to withdraw.

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Error | pairCnt invalid | :ballot_box_with_check: |
| Error | tableCnt ivnalid | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Func | playing each pair & boardgroup & round | :ballot_box_with_check: |
| Case | Wikipedia example | :ballot_box_with_check: |

---

### Extended Hesitation Mitchell

**Status:** :ballot_box_with_check:

| Type | Parameter |
| ------ | ------ |
| tableCnt | 3 |
| pairCnt | 6 |
| roundCnt | 5 |

**Info:**

- with bye stand table
- only with 3 (4 with bye stand) tables and 6 pairs
- generated from template

#### Wikipedia

In a game of just three tables, the Hesitation Mitchell Movement that would form the first part of a Hybrid Movement pits each pair against four of the other five pairs in the first four rounds. This reduces the second stage to one round in which each pair plays the fifth group of boards against the pair that it did not play in the first five rounds of the movement. The fifth round is really an extension of the Hesitation Mitchell Movement rather than the parallel Howell movements that normally form the second part of a hybrid movement. The following table shows this Extended Hesitation Mitchell Movement.

The Extended Hesitation Mitchell Movement is functionally equivalent to the Complete Howell Movement for three tables shown above, but it generally runs more smoothly because the rotating pairs and the boards move in a regular manner for the first four rounds. It has the additional advantage that Pair 1 is fully stationary, Pair 2 changes tables only once, and Pair 6 changes tables only twice -- generally acceptable accommodations for players who have some degree of mobility impairment. The imbalance of comparisons and the existence of a "free for all round" are the same as in any Complete Howell Movement for three tables, so there's no "down side" whatsoever to using this movement instead of the Complete Howell movement. The previous discussion pertaining to the "free for all round" in a Complete Howell Movement for three tables is also applicable here -- it is best to provide three copies of the boards in Board Group E for both movements so each table can have its own copy.

#### Tests

**Every case tested:** :ballot_box_with_check:

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Case | Wikipedia example / template | :ballot_box_with_check: |

---

### Relay and Bye Stand Mitchell

**Status:** no

#### Wiki

The Relay and Bye Stand Mitchell, also called a Share and Relay Mitchell in the United Kingdom, modifies the board sequencing of a standard Mitchell movement so that each East-West pair plays the even groups of boards on one side of the movement and odd board groups on the other side of the movement, permitting a complete movement with an even number of tables. To make this happen, two consecutive tables play the same group of boards in each round throughout the session while the opposite group of boards sits out of play on a table or stand between the tables directly opposite the tables that are playing the same deals -- and it is here that regional differences in terminology may be a source of confusion.

#### Tests

---

### Rover Mitchell

**Status:** no

| Type | Parameter |
| ------ | ------ |
| legal tableCnt | *odd* |
| phantom pair | no |
| usage | for a pair who arrives after a movement is set |
| => | rover pair sits out in the first round |
| => | rest sit out in later rounds |

#### Wiki

A Rover Mitchell Movement, also called a Bump Mitchell Movement, is a modification of a Mitchell movement to accommodate an odd number of pairs without a phantom. This movement is most commonly employed to accommodate a pair who arrives after a movement is set, since it does not require addition of another table, or in situations in which there is not space for another table. In its standard form, the roving pair displaces only North-South or East-West pairs and scores in the respective field. The roving pair usually sits out in the first round, and other pairs sit out in subsequent rounds when the roving pair displaces them. The following table illustrates an East-West Rover Mitchell Movement for five tables playing five rounds; the roving pair is East-West Pair 6. Note that East-West Pair 5 is not "bumped" and thus plays all of the boards in the session.

The generation of a Rover Mitchell Movement involves some fairly complex number theory. If the number of full tables is a prime number greater than four, the roving pair can start anywhere and move either up or down two tables in each round, thus displacing and encountering a different East-West pair, a different North-South pair, and a different group of boards in each round. However, the generation of Rover Mitchell Movement is considerably more difficult if the number of tables is not prime because the roving pair typically must move in an irregular manner to avoid both the deals and the pairs that it has encountered or displaced in the preceding rounds.

If another pair arrives after a Rover Mitchell Movement has been set, it's possible to add a "party table" to the Rover Mitchell Movement. The pair that arrives late becomes a stationary pair at the party table, playing the boards that the roving pair otherwise would not play against the roving pair in the first round and the boards that the roving pair is playing against the pair displaced by the roving pair in each subsequent round. The following table shows the Rover Mitchell Movement above with the addition of a party table (in this example, Table 6, with the added pair becoming North-South Pair 6). It's best to duplicate a separate set of boards for the "party table" because the "party table" plays the same deals as each of the other tables in one round, creating an awkward situation with actual sharing of boards.

#### Tests

---
### Scissors Mitchell

**Status:** no

#### Wiki

The Scissors Mitchell Movement is an interesting creature. The movement begins like a Standard Mitchell Movement, but it has two scissors rounds where each board group is split in half. In the first scissors round, which must be in the first half of the movement, each table plays one half of the boards in the board group that it receives, then passes those boards to the next lower table, which also plays them, while retaining but not playing the other half of the boards in the board group that it received initially. At the end of the first scissors round, the boards played twice get passed again and join the boards not played in the previous round at that table to form a new board group. The new board group remains intact until the second scissors round, which is half of the total number of rounds after the first. In the second scissors round, the boards played twice in the first scissors round are set aside and the boards not played in the second scissors round are played twice in the same manner. After the second scissors round, the boards played twice are passed again to reconstitute the original board group. The following table shows a Scissors Mitchell Movement of six tables playing six full rounds, with the halves of the initial board groups designated numerically (that is, the initial board group A consists of halves A1 and A2).

Most Bridge scoring programs expect board groups to be invariant throughout the entire movement, so it may take a bit of creativity to get a program to score this type of movement. The external movement M0612 supplied with the ACBLscore® program distributed by the American Contract Bridge League, for example, implements a Scissors Mitchell Movement for six tables as twelve (half) rounds with both pairs remaining at each table for two consecutive (half) rounds and half of each initial board group assigned to each (half) round so that the halves of each initial board group can move separately.

#### Tests

---

### Skip Mitchell

**Status:** no

| Type | Parameter |
| ------ | ------ |
| legal tableCnt | *even* |
| complete | :ballot_box_with_check: |

#### Wiki

The Skip Mitchell Movement is the simplest Mitchell movement for an even number of tables. In its simplest form, the East-West pairs move up two tables at the midpoint of the (complete) movement, when they otherwise would encounter the deals (boards) that they played in the first round. The boards that they play after the skip to interleave with the boards that they played before the skip with normal movement thereafter, as in the Straight Mitchell Movement. However, the skip limits the number of rounds to one less than the number of tables so the movement cannot be complete. Thus, a Skip Mitchell is normally preferred only when the number of tables makes a complete movement impracticable. The following table shows a Skip Mitchell movement for ten tables playing nine rounds. Note that one more rotation would bring the East-West pairs back to their starting tables.

The Skip Mitchell Movement provides a simple vehicle to accommodate players who arrive after a Standard Mitchell Movement or a Skip Mitchell Movement is set. The director need only place additional board groups on the additional tables and add or remove the skip, depending upon whether the number of tables becomes even or odd.

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | no |
| Error | pairCnt invalid | no |
| Error | tableCnt ivnalid | no |
| Func | playing each pair | no |
| Func | playing each pair | no |
| Func | special cases | no |

---

### Two-Stanza Mitchell

**Status:** :ballot_box_with_check:

Mitchell movement with a break within the session.

| Type | Parameter |
| ------ | ------ |
| legal tableCnt | even, aber tableCnt % 4 != 0 ausser 8 und 12|
| => | 2, 6, 8, 10, 12, 14, 18, 22, 26, ... |
| complete | :ballot_box_with_check: |

#### Wiki

A Two Stanza Mitchell Movement is a movement configured for a break, which could be for lunch, for a presentation of some award or recognition, for election of club officers or transaction of club business requiring discussion and vote of the membership, or for some other purpose, at the midpoint of the session. In this situation, it's best to have all entrants play approximately the first half of the deals before the break, constituting the first stanza, and the remaining deals after the break, constituting the second stanza, so that any discussion of deals that may occur during the break won't affect the play of any deals in the remaining rounds. The following table shows a Two Stanza Mitchell Movement for six tables with a break after the third round. The players and boards move in the normal manner for a Mitchell movement, except that all boards played in the first stanza go out of play and new boards come into play at the break.

The pattern of movement shown in this example will work for any even number of tables that is not a multiple of four, provided that the number of rounds is equal to the number of tables. Another option, for any even number of tables, is to use the American Whist League (AWL) movement, described above, within each stanza with East-West pairs moving just one table, either up or down, at the break. Alternatively, there are specific movement patterns for eight tables and twelve tables.

With eight tables, all East-West pairs move up two tables after each round except at the midpoint, when they move up just one table. Thus, the odd-numbered East-West pairs visit the odd-numbered tables in the first stanza and the even-numbered tables in the second stanza while the even-numbered East-West pairs do the reverse.

With twelve tables, all East-West pairs move normally (that is, up one table after each round) except after Round 3 and Round 9, when they move up four (4) tables. Thus, the East-West pairs skip three tables after Round 3, but return to play at those tables in the last three rounds.

It's also possible to use the Double Web Movement, described below, to accommodate any number of tables. If the number of rounds is a multiple of four, this typically requires that the break be either one round before or one round after the exact midpoint of the movement (that is, after either Round 3 or Round 5 if the movement is eight rounds or after either Round 5 or Round 7 if the movement is twelve rounds).

It's also possible to configure movements with more than two stanzas to accommodate more than one break during a session, if circumstances suggest this.

#### Tests

| Type | Test | Status |
| ------ | ------ | ------ |
| Error | boardCnt invalid | :ballot_box_with_check: |
| Error | pairCnt invalid | :ballot_box_with_check: |
| Error | tableCnt ivnalid | :ballot_box_with_check: |
| Error | breakNr invalid | :ballot_box_with_check: |
| Func | playing each pair & board & round | :ballot_box_with_check: |
| Func | playing each pair & board & round | :ballot_box_with_check: |
| Func | playing each pair & board & round | :ballot_box_with_check: |
| Func | playing each pair & board & round | :ballot_box_with_check: |
| Func | playing each pair & board & round | :ballot_box_with_check: |
| Case | Wikipedia case: pairCnt/tableCnt = 12/6 | :ballot_box_with_check: |


### One Winner Mitchell

**Status:** no

#### Wiki

**Link:** [One Winner](https://en.wikipedia.org/wiki/Duplicate_bridge_movements#%22One_Winner%22_Mitchell_Movements "One Winner")

#### Tests


---

## Web Movement

**Status:** no

### Wiki

**Link:** [Web](https://en.wikipedia.org/wiki/Duplicate_bridge_movements#Web_Movement "Web")

Web movements are normally used in larger games in which a complete Mitchell movement is impracticable. However, they are also useful in situations in which it is desirable to have a break (for lunch, for presentation of awards or transaction of club business, or for any other reason) in the middle of a session. The use of a movement consisting of two stanzas, each of which is the basic Web Movement described aboe, ensures that any discussion of deals that might occur during the break won't compromise the play of those deals after the break. The following table shows a movement for eight tables in which the first five rounds are the first Web Movement and the last three rounds are the second Web Movement. This movement will run very smoothly with two copies of the boards in Board Groups A-E and three copies of the boards in Board Groups F-H, with Table 7 and Table 8 sharing one copy of Board Group G in Round 7.

#### Tests


### Double Web

**Status:** no

### Wiki

**Link:** [Double Web](https://en.wikipedia.org/wiki/Duplicate_bridge_movements#Double_Web_Movements "Double Web")

Web movements are normally used in larger games in which a complete Mitchell movement is impracticable. However, they are also useful in situations in which it is desirable to have a break (for lunch, for presentation of awards or transaction of club business, or for any other reason) in the middle of a session. The use of a movement consisting of two stanzas, each of which is the basic Web Movement described aboe, ensures that any discussion of deals that might occur during the break won't compromise the play of those deals after the break. The following table shows a movement for eight tables in which the first five rounds are the first Web Movement and the last three rounds are the second Web Movement. This movement will run very smoothly with two copies of the boards in Board Groups A-E and three copies of the boards in Board Groups F-H, with Table 7 and Table 8 sharing one copy of Board Group G in Round 7.

### Tests

### Bowman Wweb

**Status:** no

#### Wiki

**Link:** [Bowman Web](https://en.wikipedia.org/wiki/Duplicate_bridge_movements#Bowman_Movement "Bowman Web")

The Bowman Movement is the specific case of the Web Movement (see above) that consists of a web of two tables with one add-on block. The next to last table plays the same group of boards as Table #1 in each round, and the last table plays the board groups in reverse order beginning with the last board group. It's theoretically possible to run this movement with only one set of boards as described in the linked article, but players will not like it -- especially if there's no sit-out, as the last table shares boards with a different table in each round, with a three-way share between Table 1 and the last two tables in the middle round if the number of rounds is odd. It's considerably less intolerable if with a phantom pair seated North-South at the last table, leaving the between Table 1 and the next to last table as the only active share. Still, it is better to use two copies of the boards -- essentially, one copy for the last two tables and the other for the rest of the room, so the last two tables share a group of boards only in the middle round if the number of rounds is odd.

#### Tests

---

## Suggested Movements

**Status:** no

### Tests
