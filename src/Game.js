const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');
class Game {
  constructor() {
    this.cards;
    this.deck;
    this.round;
  }

  start(){
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.cards = cards;
    const deck = new Deck(cards);
    this.deck = deck;
    const round = new Round(deck);
    this.round = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
