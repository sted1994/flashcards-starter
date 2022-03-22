const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
  }

  getCurrentCard(){
      this.currentCard = this.deck[this.turns]
      return this.deck[this.turns];
  }

  takeTurn(guess){
    const currentTurn = new Turn(guess, this.deck[this.turns]);
    const checkguess = currentTurn.evaluateGuess(guess);
    if(!checkguess){
      this.incorrectGuesses.push(this.deck[this.turns].id);

    }
    this.getCurrentCard();
    this.turns++;
    return currentTurn.giveFeedback();
    // return currentTurn;
  }
}

module.exports = Round;
