const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');

describe('Game', function(){

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let turn;
  let newRound;
  let newGame;
  let prototypeQuestions;

  beforeEach(() => {
  const prototypeQuestions = data.prototypeData;
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  cards = [card1, card2, card3];
  deck = new Deck(cards);
  round = new Round(deck);
  turn = new Turn();
  newGame = new Game()
  newGame.makeCards();
  newGame.makeDeck();
  newGame.makeRound();
  })


  it('Should create an instance of card', function(){
    expect(newGame.cards[0]).to.be.an.instanceof(Card)
  })

  it('Should create an instance of deck', function(){
    expect(newGame.deck).to.be.an.instanceof(Deck)
  })

  it('Should create an instance of round', function(){
    expect(newGame.round).to.be.an.instanceof(Round)
  })
})
