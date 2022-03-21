class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
  }

  returnGuess(){
    return this.guess
  }

  returnCard(){
    return this.card;
  }

  evaluateGuess(guess){
    if(this.guess === this.card.correctAnswer){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(){
    let answer = this.evaluateGuess();
    if(!answer){
      return 'incorrect'
    } else {
      return 'correct'
    }
  }
}

module.exports = Turn;
