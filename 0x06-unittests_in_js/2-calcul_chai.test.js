// 2-calcul_chai.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 for 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 for -1.4 and 1.4', function() {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 for 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 for 1.5 and 1.5', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 for 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error for 1.4 and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2 for 4.4 and 2', function() {
      expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
    });
  });
});
