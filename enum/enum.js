const suits2num = Object.freeze({
    'clubs': 0,
    'diamonds': 1,
    'hearts': 2,
    'spades': 3,
    'notrump': 4
})

const vulnerable2num = Object.freeze({
    'none': 0,
    'north-south': 1,
    'east-west': 2,
    'all': 3 
})

const declarer2num = Object.freeze({
    'north': 0,
    'east': 1,
    'south': 2,
    'west': 3
})