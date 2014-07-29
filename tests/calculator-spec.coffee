Calculator = require '../src/calculator'

describe 'Calculator', ->
  describe '#add', ->
    it 'can add two numbers', ->

      expect(Calculator.add 1,2).to.equal 3
      expect(Calculator.add 5,4).to.equal 9
    

  describe '#subtract', ->
    it 'subtracts two numbers', ->

      expect(Calculator.subtract 2,1).to.equal 1
      expect(Calculator.subtract 10,4).to.equal 6
