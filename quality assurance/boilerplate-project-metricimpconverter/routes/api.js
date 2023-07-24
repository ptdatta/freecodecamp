"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");
const { init } = require("../server.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    let input = req.query.input;
    let initNum, initUnit;
    let check = false;
    
    try {
      initNum = convertHandler.getNum(input);
      check = true;
    } catch (error) {
      res.send(error.message);
    }
    try {
      initUnit = convertHandler.getUnit(input);
      check = true;
    } catch (error) {
      res.send(error.message);
    }

    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    res.json({
      initNum: parseFloat(initNum),
      initUnit: initUnit === "l" ? "L" : initUnit,
      returnNum: parseFloat(returnNum),
      returnUnit: returnUnit === "l" ? "L" : returnUnit,
      string: toString,
    });
  });
};
