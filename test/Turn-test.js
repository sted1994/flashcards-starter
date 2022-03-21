const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function(){

  it('Should accept a guess and the current card', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('hello', card)
    expect(true).to.equal(true);
  })

  it('Should be able to return a users guess', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('object', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal(turn.guess)
  })

  it('Should be able to return current card', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(turn.card);
  })

  it('Should be able to determine if answer is true', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('object', card);

    turn.evaluateGuess(turn.guess);

    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('Should be able to determine if answer is false', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('help', card);

    turn.evaluateGuess(turn.guess);

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('Should be able to give feedback and return correct if answer is correct', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('object', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('correct');
  })

  it('Should be able to give feedback and return incorrect if answer is incorrect', function(){
    var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    var turn = new Turn('whelp', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect');
  })
})
