const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
  // Test for converting a valid input such as 10L
  test('Convert a valid input such as 10L', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '10L' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'initNum');
        assert.property(res.body, 'initUnit');
        assert.property(res.body, 'returnNum');
        assert.property(res.body, 'returnUnit');
        assert.property(res.body, 'string');
        done();
      });
  });

  // Test for converting an invalid input such as 32g
  test('Convert an invalid input such as 32g', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '32g' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        if ('error' in res.body) {
          assert.equal(res.body.error, 'invalid unit');
        } 
        done();
      });
  });

  // Test for converting an invalid number such as 3/7.2/4kg
  test('Convert an invalid number such as 3/7.2/4kg', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '3/7.2/4kg' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        if ('error' in res.body) {
          assert.equal(res.body.error, 'invalid number');
        }
        done();
      });
  });

  // Test for converting an invalid number and unit such as 3/7.2/4kilomegagram
  test('Convert an invalid number and unit such as 3/7.2/4kilomegagram', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '3/7.2/4kilomegagram' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        if ( 'error' in res.body) {
          assert.equal(res.body.error, 'invalid number and unit');
        }
        done();
      });
  });

  // Test for converting with no number such as kg
  test('Convert with no number such as kg', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'kg' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'initNum');
        assert.property(res.body, 'initUnit');
        assert.property(res.body, 'returnNum');
        assert.property(res.body, 'returnUnit');
        assert.property(res.body, 'string');
        done();
      });
  });
});
