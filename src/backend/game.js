import Card from "./card";
import { SPADES, CLUBS, HEARTS, DIA } from "./constants";

// //assets : https://github.com/hayeah/playing-cards-assets


export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

export function createDeck() {
  let deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push(new Card(i, SPADES));
    deck.push(new Card(i, CLUBS));
    deck.push(new Card(i, HEARTS));
    deck.push(new Card(i, DIA));
  }
  return deck;
};
