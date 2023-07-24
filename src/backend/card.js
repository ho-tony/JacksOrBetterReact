export default class Card {
    constructor(val, suit) {
        this.val = val;
        this.suit = suit;
        this.img = `${val}_of_${suit.toLowerCase()}.png`
    }
}



