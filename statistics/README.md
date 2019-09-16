# Statistics

---

## Distribution
| File | Status | Tested |
| ------ | ------ | ------ |
| *distribution.js* | final | [ ] |

You can calculate the *probability* of getting dealt a certain distribution and the respective number of possible hands.
If a distribution is marked as **fix**, the suits are not interchangable meaning the first suit must mean clubs, the second diamonds and so on.
If the **fix** attribute is marked as *false*, the length of a suit means *any* suit.

```javascript
[clubCnt, diamondCnt, heartCnt, spadeCnt] -> Boolean 
function distribution(ListOfSuitLength)

[suitCnt, suitCnt, suitCnt, suitCnt] -> Boolean
function distributionFix(ListofSuitLength)

```

---

## Highcard Points (HCP)
| File | Status | Tested |
| ------ | ------ | ------ |
| *hcp.js* | final | [ ] |

You can calculate the probability of getting dealt a hand within a certain range of *highcard points* (*hcp*) and the respective number of hands.

```javascript
(Integer, Integer) -> probability
function hcpRange(hcpMin, hcpMax = hcpMin)
```

---

## Missing
| File | Status | Tested |
| ------ | ------ | ------ |
| *missing.js* | final | [ ] |

For a certain amount of missing cards you can calculate the probability for each possible distribution of those cards among the two opponents.

Additionally you can also specify an amount of *highcards* among the missing cards and calculate the respective probabilities.

```javascript
function missingCards(cardCnt)
function missingHighcards(cardCnt, highcardCnt)
```

| Parameter | Type |
| ------ | ------ |
| **cardCnt** | Integer from [0, 13] |
| **highcardCnt** | Integer from [0, 13], cardCnt >= highcardCnt |

**Note** the highcardCnt is *not* limited to 4 since it can also be used to mark *important* cards rather than *high* cards.

---

## Math
| File | Status | Tested |
| ------ | ------ | ------ |
| *math.js* | final | [ ] |

The math file contains all mathematical functions needed to calculate the functions above.
We have the binomial coefficient, the factorial function and the possibility to round a certain value and represent its percentage value, i.e. 0.12345 will be 12.35%.

```javascript
function binomial(n, k)
function factorial(n)
function percentageRounded(x)
```

| Parameter | Type |
| ------ | ------ |
| **n** | Integer >= 0 |
| **k** | Integer >=0 and <= n|
| **x** | Any Float |