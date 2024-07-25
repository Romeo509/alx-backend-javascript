const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Cart page', function() {
    const baseOptions = {
        url: 'http://localhost:7865',
        method: 'GET'
    };

    it('should return correct status code and message when :id is a number', function(done) {
        const options = { ...baseOptions, url: `${baseOptions.url}/cart/12` };
        
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body).to.contain('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 status code when :id is NOT a number', function(done) {
        const options = { ...baseOptions, url: `${baseOptions.url}/cart/hello` };
        
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            expect(body).to.contain('Not Found');
            done();
        });
    });
});
