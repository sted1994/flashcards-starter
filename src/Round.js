const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.getCurrentCard();
    this.incorrectGuesses = [];
  }

  getCurrentCard(){
      this.currentCard = this.deck[this.turns]
      return this.deck[this.turns];
  }

  takeTurn(guess){
    const currentTurn = new Turn(guess, this.currentCard);
    const checkguess = currentTurn.evaluateGuess(guess);
    if(!checkguess){
      this.incorrectGuesses.push(this.deck[this.turns].id);

    }
    this.getCurrentCard();
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentageCorrect(){
    return ((this.incorrectGuesses.length / this.deck.length) * 100)
  }

  endRound(){
    var percentage = this.calculatePercentageCorrect();
    console.log(`** Round over! ** You answered ${percentage} of the questions correctly!`)
    return `** Round over! ** You answered ${percentage} of the questions correctly!`

  }
}

module.exports = Round;
