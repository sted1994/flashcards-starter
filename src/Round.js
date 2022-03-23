const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.returnCurrentCard();
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
      this.currentCard = this.deck[this.turns]
      return this.deck[this.turns];
  }

  takeTurn(guess){
    const currentTurn = new Turn(guess, this.currentCard);
    const checkguess = currentTurn.evaluateGuess(guess);
    if(!checkguess){
      this.incorrectGuesses.push(this.deck[this.turns].id);

    }
    this.returnCurrentCard();
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentageCorrect(){
    return ((this.incorrectGuesses.length / this.deck.length) * 100)
  }

  endRound(){
    var percentage = this.calculatePercentageCorrect();
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`

  }
}

module.exports = Round;
