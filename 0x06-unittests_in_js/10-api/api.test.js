const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

const baseUrl = "http://localhost:7865";

// Index page tests
describe("Index page", function() {
    const options = {
        url: `${baseUrl}/`,
        method: "GET"
    };

    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });

    it("check correct content length", function(done) {
        request(options, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

// Available payments endpoint tests
describe("Available payments endpoint", function() {
    const options = {
        url: `${baseUrl}/available_payments`,
        method: "GET"
    };

    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.equal(JSON.stringify({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            }));
            done();
        });
    });
});

// Login endpoint tests
describe("Login endpoint", function() {
    const options = {
        url: `${baseUrl}/login`,
        method: "POST",
        json: true,
        body: {
            userName: "Betty"
        }
    };

    it("check correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("check correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.equal("Welcome Betty");
            done();
        });
    });
});
