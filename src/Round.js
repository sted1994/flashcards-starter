const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
      return this.deck[this.turns];
  }

  takeTurn(guess){
    this.currentCard = this.deck[this.turns]
    const currentTurn = new Turn(guess, this.currentCard);
    const checkGuess = currentTurn.evaluateGuess(guess);
    if(!checkGuess){
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentageCorrect(){
    const amountCorrect = this.deck.length - this.incorrectGuesses.length
    const totalCards = this.deck.length
    return  Math.floor((amountCorrect / totalCards)* 100)
  }

  endRound(){
    var percentage = this.calculatePercentageCorrect();
    console.log(`** Round over! ** You answered ${percentage}% of the questions correctly!`)
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`

  }
}

module.exports = Round;
