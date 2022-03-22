const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function(){

  it('Should start with an array where cards will be added', function(){
    let deck = new Deck();

    expect(deck.cards).to.be.a('array');
  })

  it('Should know how many cards in the deck (cards array)', function(){
    var deck = new Deck();

    expect(deck.countCards()).to.equal(deck.cards.length)
  })
})
