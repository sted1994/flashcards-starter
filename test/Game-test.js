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
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  cards = [card1, card2, card3];
  deck = new Deck(cards);
  round = new Round(deck);
  turn = new Turn();
  newGame = new Game(round)
  prototypeQuestions = data.prototypeData;
  })


  // it('should keep track of rounds', function(){
  //   newGame.currentRound.takeTurn();
  //   expect(newGame.currentRound.turns).to.equal(1);
  // })
  //
  it('Should create cards', function(){
    newGame.start();
    // expect(newGame.currentRound.deck.length).to.equal(prototypeQuestions.length)
  })



})
