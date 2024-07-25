// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 for 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 for -1.4 and 1.4', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 for 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 for 1.5 and 1.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 for 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error for 1.4 and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2 for 4.4 and 2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2);
    });
  });
});
