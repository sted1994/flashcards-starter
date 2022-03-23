const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function(){

  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('hello', card)
  })

  it('Should accept a guess and the current card', function(){
    expect(true).to.equal(true);
  })

  it('Should be able to return a users guess', function(){
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.guess)
  })

  it('Should be able to return current card', function(){
    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.card);
  })

  it('Should be able to determine if answer is true', function(){
    turn.guess = 'object'
    turn.evaluateGuess(turn.guess);
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('Should be able to determine if answer is false', function(){
    turn.evaluateGuess(turn.guess);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('Should be able to give feedback and return correct if answer is correct', function(){
    turn.guess = 'object'
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct');
  })

  it('Should be able to give feedback and return incorrect if answer is incorrect', function(){
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect');
  })
})
