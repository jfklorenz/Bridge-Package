# Scoring / Tests
This folder includes the tests for all scoring methods.

**Tests for:**
- 0. Error
- 1. Functionality
- 2. Cases

---

## Score
`level, suit, double, declarer, vulnerability, result -> Score`

#### Tests

- 0.1. Error - level invalid
- 0.2. Error - suit invalid
- 0.3. Error - double invalid
- 0.4. Error - declarer invalid
- 0.5. Error - vulnerability invalid
- 0.6. Error - result invalid
- 1.1. Func - Gamebonus
- 1.2. Func - Slambonus
- 1.3. Func - Double / Redouble
- 1.4. Func - Vulnerability
- 1.5. Func - Declarer / Result
- 2.0. Case - Extreme Results
- 2.1. Case - all results: 1 club
- 2.2. Case - all results: 1 diamond"
---

## Matchpoints
Different methods for calculating *matchpoints* are implemented and tested.

### scoresToMatchpoints
`List of Scores -> List of Matchpoints`

#### Tests

- 1.1. Func - Empty list
- 1.2. Func - Single item in list
- 2.1. Case - [-90,170,-90,-100,-90,150]
- 2.2. Case - [150, 120, 120, 430, 400, 400]
- 2.3. Case - [170, 170, 170, 170, 150, 150]
- 2.4. Case - [200, -170, -450, -150, -170, -170, 50, -170, -100]
- 2.5. Case - [-110, -170, -120, -200, 200, 0, 0, -300, 100]

### matchpointsToPercentages
`List of Matchpoints -> List of Percentages`

#### Tests

- 1.1. Func - Empty list
- 1.2. Func - Single item in list
- 2.1. Case - [0,2,4]
- 2.2. Case - [1,1,4,7,7]
- 2.3. Case - [7,7,7,7,1,1]

### matchpointsReverse
`List of Matchpoints -> List of reverse Matchpoints`

#### Tests
- 1.1. Func - Empty list
- 1.2. Func - Single item in list
- 2.1. Case - [-90,170,-90,-100,-90,150]
- 2.2. Case - [150, 120, 120, 430, 400, 400]
- 2.3. Case - [170, 170, 170, 170, 150, 150]
- 2.4. Case - [200, -170, -450, -150, -170, -170, 50, -170, -100]
- 2.5. Case - [-110, -170, -120, -200, 200, 0, 0, -300, 100]
- 2.6. Case - [0,2,4,6,8]
- 2.7. Case - [1,1,4,7,7]

---

## IMPs
`ScoreDifference -> IMPs` has been tested for every value from -10.000 to 10.000.

#### Tests
- 0.1. Error - score difference invalid
- 0.2. Error - score difference invalid range
- 1.1. Func - Positive & negative Scoredifference
- 2.0. Case - Score difference = +/- [0,10]
- 2.1. Case - Score difference = +/- [30,40]
- 2.2. Case - Score difference = +/- [50,80]
- 2.3. Case - Score difference = +/- [90,120]
- 2.4. Case - Score difference = +/- [130,160]
- 2.5. Case - Score difference = +/- [170,210]
- 2.6. Case - Score difference = +/- [220,260]
- 2.7. Case - Score difference = +/- [270,310]
- 2.8. Case - Score difference = +/- [320,360]
- 2.9. Case - Score difference = +/- [370,420]
- 2.10. Case - Score difference = +/- [430,490]
- 2.11. Case - Score difference = +/- [500,590]
- 2.12. Case - Score difference = +/- [600,740]
- 2.13. Case - Score difference = +/- [750,890]
- 2.14. Case - Score difference = +/- [900,1090]
- 2.15. Case - Score difference = +/- [1100,1290]
- 2.16. Case - Score difference = +/- [1300,1490]
- 2.17. Case - Score difference = +/- [1500,1740]
- 2.18. Case - Score difference = +/- [1750,1990]
- 2.19. Case - Score difference = +/- [2000,2240]
- 2.20. Case - Score difference = +/- [2250,2490]
- 2.21. Case - Score difference = +/- [2500,2990]
- 2.22. Case - Score difference = +/- [3000,3490]
- 2.23. Case - Score difference = +/- [3500,3990]
- 2.24. Case - Score difference = +/- [4000,9990]
- 2.25. Case - Score difference wrong

---

## Victory Points
`IMPs -> Victory Points` is calculated but compared to the official formula table from the World Bridge Federation (WBF).
Further validation testing is therefor pointless.

#### Tests
- 0.1. Error - IMPs invalid
- 0.2. Error - boardCnt invalid
- 0.3. Error - boardCnt invalid range
- 2.1. Case - IMPS: 16, Boards: 32
- 2.2. Case - IMPs: 47, Boards: 32