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
    this.makeCards();
    this.makeDeck();
    this.makeRound();
    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  makeCards(){
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.cards = cards;
  }

  makeDeck(){
    const deck = new Deck(this.cards);
    this.deck = deck;
  }

  makeRound(){
    const round = new Round(this.deck);
    this.round = round;
  }
}

module.exports = Game;
