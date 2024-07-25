const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      expect(response).to.have.property('data', 'Successful response from the API');
      done();
    }).catch(err => done(err));
  });
});
