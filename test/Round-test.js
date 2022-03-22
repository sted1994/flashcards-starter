const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function(){

  it('Should have a method that returns current card', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.getCurrentCard()).to.equal(round.deck[0]);
  })

  it('Should increment turns count', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const turn = new Turn();
    const round = new Round(deck);

    round.takeTurn(turn.guess);
    round.takeTurn(turn.guess);
    round.takeTurn(turn.guess);
    expect(round.turns).to.equal(3)
  })

  it('Should add incorrect guesses to incorect guesses array', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn = new Turn('object', round.currentCard);
    round.takeTurn('sea otte');
    expect(round.incorrectGuesses).to.include(round.currentCard.id);
  })

  it('Should not add correct guesses to incorect guesses array', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn = new Turn('object', round.currentCard);
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.not.include(round.currentCard.id);
  })

  it('Should give feedback for correct answer', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn = new Turn('object', round.currentCard);
    expect(round.takeTurn('sea otter')).to.equal('correct');

  })

  it('Should be able to tell you the percentage you got correct', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn = new Turn('object', round.currentCard);
    round.takeTurn('sea otte');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');

    expect(round.calculatePercentageCorrect()).to.equal(((round.incorrectGuesses.length / round.deck.length) * 100));
  })

  it('Should inform you when you complete a round and tell you precentage correct', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    const turn = new Turn('object', round.currentCard);
    round.takeTurn('sea otte');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');

    expect(round.endRound()).to.equal(`** Round over! ** You answered ${((round.incorrectGuesses.length / round.deck.length) * 100)} of the questions correctly!`)
  })

})
