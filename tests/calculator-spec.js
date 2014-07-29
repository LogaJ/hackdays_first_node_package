var Calculator = require('../src/calculator');

describe('Calculator', function(){
  describe('#add', function(){
    it('can add two numbers', function(){

      expect(Calculator.add(1,2)).to.equal(3);
      expect(Calculator.add(5,4)).to.equal(9);
    });
  });

  describe('#subtract', function(){
    it('subtracts two numbers', function(){

      expect(Calculator.subtract(2,1)).to.equal(1);
      expect(Calculator.subtract(10,4)).to.equal(6);
    });
  });
});
