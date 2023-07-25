"use strict";
const Stock = require("../model/stockModel.js");
const axios = require("axios");

module.exports = function (app) {
  // https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/GOOL/quote

  app.route("/api/stock-prices").get(async function (req, res) {
    const { stock, like } = req.query;
    const ip = req.ip;
    if (Array.isArray(stock)) {
      const response1 = await axios.get(
        `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock[0]}/quote`
      );
      const response2 = await axios.get(
        `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock[1]}/quote`
      );
      let _stock1 = await Stock.findOne({ symbol: stock[0] });
      if (!_stock1) {
        _stock1 = await Stock.create({
          symbol: stock[0],
          likes: 0,
          ips: [],
        });
      }
      if (like == "true" && !_stock1.ips.includes(ip)) {
        _stock1.likes++;
        _stock1.ips.push(ip);
        await _stock1.save();
      }
      let _stock2 = await Stock.findOne({ symbol: stock[1] });
      if (!_stock2) {
        _stock2 = await Stock.create({
          symbol: stock[1],
          likes: 0,
          ips: [],
        });
      }
      if (like == "true" && !_stock2.ips.includes(ip)) {
        _stock2.likes++;
        _stock2.ips.push(ip);
        await _stock2.save();
      }
      let data1, data2;
      if (!response1) {
        data1 = { rel_likes: _stock1.likes - _stock2.likes };
      } else {
        data1 = {
          stock: _stock1.symbol,
          price: response1.data.latestPrice,
          rel_likes: _stock1.likes - _stock2.likes,
        };
      }
      if (!response2) {
        data2 = { rel_likes: _stock2.likes - _stock1.likes };
      } else {
        data2 = {
          stock: _stock2.symbol,
          price: response2.data.latestPrice,
          rel_likes: _stock2.likes - _stock1.likes,
        };
      }
      if (_stock1 && _stock2) {
        res.json({ stockData: [data1, data2] });
      }else {
        res.json({ error: "invalid stock" });
      }
    } else {
      const response = await axios.get(
        `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote`
      );
      if (!response) {
        res.json({ stockData: { likes: like == "true" ? 1 : 0 } });
      }
      let _stock = await Stock.findOne({ symbol: stock });
      if (!_stock) {
        _stock = await Stock.create({
          symbol: stock,
          likes: 0,
          ips: [],
        });
      }
      if (like == "true" && !_stock.ips.includes(ip)) {
        _stock.likes++;
        _stock.ips.push(ip);
        await _stock.save();
      }
      if (_stock) {
        res.json({
          stockData: {
            stock: _stock.symbol,
            price: response.data.latestPrice,
            likes: _stock.likes,
          },
        });
      } else {
        res.json({ error: "invalid stock" });
      }
    }
  });
};

// {"stockData":{"stock":"GOOG","price":121.88,"likes":1800}}
