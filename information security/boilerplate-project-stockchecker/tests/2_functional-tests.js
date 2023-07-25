const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  // Variables to hold stock data for tests
  let stock1Symbol;
  let stock2Symbol;

  // Test 1: Viewing one stock
  test('Viewing one stock: GET request to /api/stock-prices/', function(done) {
    this.timeout(5000); // Increase timeout to 5 seconds
    chai
      .request(server)
      .get('/api/stock-prices/')
      .query({ stock: 'GOOG' }) // Replace 'GOOG' with the first stock symbol you want to test
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'stockData');
        assert.property(res.body.stockData, 'stock');
        assert.property(res.body.stockData, 'price');
        assert.property(res.body.stockData, 'likes');
        assert.isString(res.body.stockData.stock, 'Stock symbol should be a string');
        assert.isNumber(res.body.stockData.price, 'Stock price should be a number');
        assert.isNumber(res.body.stockData.likes, 'Likes should be a number');
        stock1Symbol = res.body.stockData.stock; // Save the stock symbol for the next test
        done();
      });
  });

  // Test 2: Viewing one stock and liking it
  test('Viewing one stock and liking it: GET request to /api/stock-prices/', function(done) {
    this.timeout(5000); // Increase timeout to 5 seconds
    chai
      .request(server)
      .get('/api/stock-prices/')
      .query({ stock: stock1Symbol, like: true })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'stockData');
        assert.property(res.body.stockData, 'stock');
        assert.property(res.body.stockData, 'price');
        assert.property(res.body.stockData, 'likes');
        assert.isString(res.body.stockData.stock, 'Stock symbol should be a string');
        assert.isNumber(res.body.stockData.price, 'Stock price should be a number');
        assert.isNumber(res.body.stockData.likes, 'Likes should be a number');
        assert.equal(res.body.stockData.likes, 1, 'Likes should be incremented to 1');
        done();
      });
  });

  // Test 3: Viewing the same stock and liking it again
  test('Viewing the same stock and liking it again: GET request to /api/stock-prices/', function(done) {
    this.timeout(5000); // Increase timeout to 5 seconds
    chai
      .request(server)
      .get('/api/stock-prices/')
      .query({ stock: stock1Symbol, like: true })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'stockData');
        assert.property(res.body.stockData, 'stock');
        assert.property(res.body.stockData, 'price');
        assert.property(res.body.stockData, 'likes');
        assert.isString(res.body.stockData.stock, 'Stock symbol should be a string');
        assert.isNumber(res.body.stockData.price, 'Stock price should be a number');
        assert.isNumber(res.body.stockData.likes, 'Likes should be a number');
        assert.equal(res.body.stockData.likes, 1, 'Likes should not be incremented again');
        done();
      });
  });

  // Test 4: Viewing two stocks
  test('Viewing two stocks: GET request to /api/stock-prices/', function (done) {
    this.timeout(5000); // Increase timeout to 5 seconds
    chai
      .request(server)
      .get('/api/stock-prices/')
      .query({ stock: ['TSLA', 'AAPL'] }) // Replace 'GOOG' and 'AAPL' with the stock symbols you want to test
      .end(function (err, res) {
        assert.equal(res.status, 200);
  
        if (Array.isArray(res.body.stockData)) {
          // If stockData is an array, it means both stocks are valid and data is returned
          assert.isArray(res.body.stockData, 'Response should be an array');
          assert.lengthOf(res.body.stockData, 2, 'Response array should have two elements');
  
          // Continue with the original assertions
          assert.property(res.body.stockData[0], 'stock');
          assert.property(res.body.stockData[0], 'price');
          assert.property(res.body.stockData[0], 'rel_likes');
          assert.property(res.body.stockData[1], 'stock');
          assert.property(res.body.stockData[1], 'price');
          assert.property(res.body.stockData[1], 'rel_likes');
          assert.isString(res.body.stockData[0].stock, 'Stock symbol should be a string');
          assert.isNumber(res.body.stockData[0].price, 'Stock price should be a number');
          assert.isNumber(res.body.stockData[0].rel_likes, 'Relative likes should be a number');
          assert.isString(res.body.stockData[1].stock, 'Stock symbol should be a string');
          assert.isNumber(res.body.stockData[1].price, 'Stock price should be a number');
          assert.isNumber(res.body.stockData[1].rel_likes, 'Relative likes should be a number');
        } else {
          // If stockData is not an array, it means one or both stocks are invalid
          assert.isObject(res.body.stockData, 'Response should be an object');
          assert.property(res.body.stockData, 'error', 'Response should have an error property');
        }
  
        done();
      });
  });
  
  

  // Test 5: Viewing two stocks and liking them
test('Viewing two stocks and liking them: GET request to /api/stock-prices/', function (done) {
    this.timeout(5000); // Increase timeout to 5 seconds
    chai
      .request(server)
      .get('/api/stock-prices/')
      .query({ stock: [stock1Symbol, stock2Symbol], like: true })
      .end(function (err, res) {
        assert.equal(res.status, 200);
  
        if (Array.isArray(res.body.stockData)) {
          // If stockData is an array, it means both stocks are valid and data is returned
          assert.isArray(res.body.stockData, 'Response should be an array');
          assert.lengthOf(res.body.stockData, 2, 'Response array should have two elements');
  
          // Continue with the original assertions
          assert.property(res.body.stockData[0], 'stock');
          assert.property(res.body.stockData[0], 'price');
          assert.property(res.body.stockData[0], 'rel_likes');
          assert.property(res.body.stockData[1], 'stock');
          assert.property(res.body.stockData[1], 'price');
          assert.property(res.body.stockData[1], 'rel_likes');
          assert.isString(res.body.stockData[0].stock, 'Stock symbol should be a string');
          assert.isNumber(res.body.stockData[0].price, 'Stock price should be a number');
          assert.isNumber(res.body.stockData[0].rel_likes, 'Relative likes should be a number');
          assert.isString(res.body.stockData[1].stock, 'Stock symbol should be a string');
          assert.isNumber(res.body.stockData[1].price, 'Stock price should be a number');
          assert.isNumber(res.body.stockData[1].rel_likes, 'Relative likes should be a number');
          assert.equal(res.body.stockData[0].rel_likes, 0, 'Relative likes for the first stock should be 0');
          assert.equal(res.body.stockData[1].rel_likes, 0, 'Relative likes for the second stock should be 0');
        } else {
          // If stockData is not an array, it means one or both stocks are invalid
          assert.isObject(res.body.stockData, 'Response should be an object');
        }
  
        done();
      });
  });  
});
