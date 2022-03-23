const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function(){

  let card1;
  let card2;
  let card3;
  let cards;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards = [card1, card2, card3];
    deck = new Deck(cards)
  })

  it('Should start with an array of cards', function(){
    expect(deck.cards).to.be.a('array');
  })

  it('Should know how many cards in the deck (cards array)', function(){
    expect(deck.countCards()).to.equal(deck.cards.length)
  })
})
