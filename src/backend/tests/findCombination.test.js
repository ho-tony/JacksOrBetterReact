// const Util = require("../Util");
// const Card = require("../card");
// const consts = require('../constants.js')

// let hand = [];

// beforeEach(() => {
//     hand = [];
//   });

// test('pair of 11 returns jack or better', () => {
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(11, consts.HEARTS))
//     hand.push(new Card(3, consts.SPADES))
//     hand.push(new Card(4, consts.SPADES))
//     hand.push(new Card(9, consts.HEARTS))

//     expect(Util.findBestCombination(hand)).toBe("JACK OR BETTER")

// })

// test('Royal Flush Test', () => {
//     hand.push(new Card(10, consts.HEARTS))
//     hand.push(new Card(11, consts.HEARTS))
//     hand.push(new Card(12, consts.HEARTS))
//     hand.push(new Card(13, consts.HEARTS))
//     hand.push(new Card(1, consts.HEARTS))

//     expect(Util.findBestCombination(hand)).toBe("ROYAL FLUSH")

//     hand = []; 
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(12, consts.DIA))
//     hand.push(new Card(13, consts.DIA))
//     hand.push(new Card(1, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe("ROYAL FLUSH")

// })

// test('Straight Test', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(11, consts.HEARTS))
//     hand.push(new Card(12, consts.SPADES))
//     hand.push(new Card(13, consts.HEARTS))
//     hand.push(new Card(1, consts.HEARTS))
//     expect(Util.findBestCombination(hand)).toBe("STRAIGHT")

// })

// test('Three Kind Test', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(10, consts.HEARTS))
//     hand.push(new Card(10, consts.SPADES))
//     hand.push(new Card(1, consts.HEARTS))
//     hand.push(new Card(13, consts.SPADES))
//     expect(Util.findBestCombination(hand)).toBe(consts.THREEKIND);

// })

// test('Full House Test', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(10, consts.HEARTS))
//     hand.push(new Card(10, consts.SPADES))
//     hand.push(new Card(13, consts.HEARTS))
//     hand.push(new Card(13, consts.SPADES))
//     expect(Util.findBestCombination(hand)).toBe(consts.FHOUSE);

// })

// test('4 Kind Test', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(10, consts.HEARTS))
//     hand.push(new Card(10, consts.SPADES))
//     hand.push(new Card(10, consts.CLUBS))
//     hand.push(new Card(13, consts.SPADES))
//     expect(Util.findBestCombination(hand)).toBe(consts.FHOUSE);

// })


// test('Almost Full House Test, but 3 kind', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(10, consts.HEARTS))
//     hand.push(new Card(10, consts.SPADES))
//     hand.push(new Card(1, consts.HEARTS))
//     hand.push(new Card(13, consts.SPADES))
//     expect(Util.findBestCombination(hand)).toBe(consts.THREEKIND);

// })

// test('Straight Flush Test', () => {
//     hand.push(new Card(8, consts.DIA))
//     hand.push(new Card(9, consts.DIA))
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(12, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe(consts.SFLUSH);
// })

// test('Wrap Around Straight Flush Test', () => {
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(12, consts.DIA))
//     hand.push(new Card(13, consts.DIA))
//     hand.push(new Card(1, consts.DIA))
//     hand.push(new Card(2, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe(consts.SFLUSH);
// })


// test('Wrap Around Straight Test', () => {
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(12, consts.DIA))
//     hand.push(new Card(13, consts.CLUBS))
//     hand.push(new Card(1, consts.DIA))
//     hand.push(new Card(2, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe(consts.STRAIGHT);
// })

// test('Two Pair Test', () => {
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(11, consts.CLUBS))
//     hand.push(new Card(12, consts.DIA))
//     hand.push(new Card(12, consts.SPADES))
//     hand.push(new Card(2, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe(consts.TWOP);
// })

// test('N/A Pair Test', () => {
//     hand.push(new Card(10, consts.DIA))
//     hand.push(new Card(10, consts.CLUBS))
//     hand.push(new Card(11, consts.DIA))
//     hand.push(new Card(12, consts.SPADES))
//     hand.push(new Card(13, consts.DIA))
//     expect(Util.findBestCombination(hand)).toBe("N/A");
// })

