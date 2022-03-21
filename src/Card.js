class Card{
  constructor(cardNum, question, answers, correctAnswer){
    this.card = cardNum;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
