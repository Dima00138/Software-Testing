const chai = require('chai');
const expect = chai.expect;

const Calculator = require('../calc');

const calc = new Calculator();

describe('Calculator', function() {
  describe('add', function() {
    it('should add two numbers correctly', function() {
      expect(calc.add(1, 2)).to.equal(3);
    });
  });


  describe('subtract', function() {
    it('should subtract two numbers correctly', function() {
      expect(calc.subtract(5, 3)).to.equal(2);
    });
  });

  describe('multiply', function() {
    it('should multiply two numbers correctly', function() {
      expect(calc.multiply(2, 3)).to.equal(6);
    });
  });

  describe('divide', function() {
    it('should divide two numbers correctly', function() {
      expect(calc.divide(6, 3)).to.equal(2);
    });

    it('should return an error when dividing by zero', function() {
      expect(calc.divide(5, 0)).to.equal('Error: Division by zero is not allowed');
    });
  });
});
