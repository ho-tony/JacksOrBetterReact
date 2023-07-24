import { RFLUSH, 
 SFLUSH, 
 FOURKIND, 
 FHOUSE, 
 FLUSH, 
 STRAIGHT,
 THREEKIND,
 TWOP,
 JACKBETTER 
} from "./constants";

export function findBestCombination (originalHand) {
    let hand = [...originalHand];
    if (isRoyalFlush(hand)) {
        return RFLUSH;
    }
    else if (isStraightFlush(hand)) {
        return SFLUSH;
    }
    else if (isFourKind(hand)) {
        return FOURKIND;
    } 
    else if (isFullHouse(hand)) {
        return FHOUSE;
    } 
    else if (isFlush(hand)) {
        return FLUSH;
    }
    else if (isStraight(hand)) {
        return STRAIGHT; 
    }
    else if (isThreeKind(hand)) {
        return THREEKIND
    } 
    else if (isTwoPair(hand)) {
        return TWOP;
    }
    else if (isJackOrBetter(hand)) {
        return JACKBETTER;
    }
    return "N/A";

}

function isRoyalFlush (hand) {

    hand.sort((a,b) => a.val - b.val)
    
    return (hand[0].val == 1 && hand[1].val == 10 && isStraight(hand) && isFlush(hand))
}

function isJackOrBetter (hand) {
    let set = new Set();
    for (let i = 0; i < 5; i++) {
        if ((hand[i].val == 1 || hand[i].val >= 11) && set.has(hand[i].val)) return true;
        set.add(hand[i].val)
    }
    return false; 
}

function isTwoPair (hand) {
    let set = new Set();
    for (let i = 0; i < 5; i++) {
        set.add(hand[i].val);
    }
    return set.size <= 3;  
}

function isThreeKind (hand) {
    let map = new Map()
    for (let i = 0; i < 5; i++) {
        let numSeen = map.get(hand[i].val);
        if (!numSeen) numSeen = 0;
        if (numSeen + 1 == 3) return true
        map.set(hand[i].val, numSeen + 1);   
    }

    return false; 
}

function isStraight (hand) {
    for (let i = 0; i < 5; i++) {
        let numSeq = 1;
        let nextIdx = i;
        while (numSeq < 5) {
            
            nextIdx++;
            if (nextIdx == 5) nextIdx = 0;
            let prev = (nextIdx != 0) ? nextIdx - 1 : 4;
            let nextNumber = hand[prev].val + 1;
            if (nextNumber == 14) nextNumber = 1;
            if (hand[nextIdx].val != nextNumber) break;
            numSeq++;
        }
        if (numSeq == 5) return true;
    }
    return false;
}

function isFlush (hand) {

    let suit = hand[0].suit;
    for (let i = 1; i < 5; i++) {
        if (hand[i].suit != suit) return false;
    }
    return true;
}

function isFullHouse (hand) {

    let map = new Map();

    let hasThreeKind = false; 
    for (let i = 0; i < 5; i++) {
        let numCards = map.get(hand[i].val)
        if (!numCards) numCards = 0;
        if (++numCards == 3) hasThreeKind = true;
        map.set(hand[i].val, numCards);
        
    }

    return map.size == 2 && hasThreeKind;
}

function isFourKind (hand) {
    let map = new Map();
    for (let i = 0; i < 5; i++) {
        let numCards = map.get(hand[i]);
        if (!numCards) numCards = 0; 
        if (++numCards == 4) return true;
        map.set(hand[i].val, numCards);


    }
    return false; 
}

function isStraightFlush (hand) {
    return isFlush(hand) && isStraight(hand);
}

export function getDefaultCoinMapValues () {
    const coinMap = new Map();

    coinMap.set(RFLUSH, 4000);
    coinMap.set(SFLUSH, 250);
    coinMap.set(FOURKIND, 125); 
    coinMap.set(FHOUSE, 45);
    coinMap.set(FLUSH, 30);
    coinMap.set(STRAIGHT, 20)
    coinMap.set(THREEKIND, 15)
    coinMap.set(TWOP, 10)
    coinMap.set(JACKBETTER, 5);
    coinMap.set("N/A", 0)

    let allValMap = new Map();
    let names = Array.from(coinMap.keys());
    for (let res of names) {
      allValMap.set(res, []);
      for (let i = 1; i <= 5; i++) {
        allValMap.get(res).push((coinMap.get(res) / 5) * i);
      }
    }
    const royalFlushVals = [250, 500, 750, 1000, 4000];
    allValMap.set(RFLUSH, royalFlushVals);
    
    return allValMap;
}




