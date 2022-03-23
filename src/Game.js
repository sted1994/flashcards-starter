const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');
class Game {
  constructor() {
  }

  start(){
    let newDeck = [];
    prototypeQuestions.forEach((card) => {
      newDeck.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    })
    const deck = new Deck(newDeck)
    const newRound = new Round(deck)
    this.printMessage(deck, newRound)
    this.printQuestion(newRound)
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
