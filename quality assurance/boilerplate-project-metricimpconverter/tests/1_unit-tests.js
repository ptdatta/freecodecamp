const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");
const e = require("cors");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number input", (done) => {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    test("Decimal Input", (done) => {
      let input = "3.2L";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });
    test("Fractional Input", (done) => {
      let input = "3/2L";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });
    test("Fractional Input w/ Decimal", (done) => {
      let input = "3.2/2L";
      assert.equal(convertHandler.getNum(input), 1.6);
      done();
    });
    test("Invalid Input (double fraction)", (done) => {
      let input = "3/2/2L";
      assert.throws(() => {
        convertHandler.getNum(input);
      }, "invalid number");
      done();
    });
    test("Invalid Input and Unit", (done) => {
      let input = "3/2/2kilogram";
      assert.throws(() => {
        convertHandler.getNum(input);
      }, "invalid number and unit");
      done();
    });
    test("No Numerical Input", (done) => {
      let input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = ["gal","l", "mi", "km", "lbs", "kg"];
      input.forEach((ele) => {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      let input2 = ["GAL","L", "MI", "KM", "LBS", "KG"];
      input2.forEach((ele) => {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });
    test("Unknown Unit Input", (done) => {
      let input = "32mm";
      assert.throws(() => {
        convertHandler.getUnit(input);
      }, "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", () => {
    test("Gal to L", (done) => {
      let input = [5, "gal"];
      let expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("L to Gal", (done) => {
      let input = [5, "l"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Mi to Km", (done) => {
      let input = [5, "mi"];
      let expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Km to Mi", (done) => {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Lbs to Kg", (done) => {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
    test("Kg to Lbs", (done) => {
      let input = [5, "kg"];
      let expected = 11.0231;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });

  suite("Function convertHandler.getString(initNum, initUnit, returnNum, returnUnit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      let input = [
        [5, "gal", 18.9271, "l"],
        [5, "l", 1.32086, "gal"],
        [5, "mi", 8.0467, "km"],
        [5, "km", 3.10686, "mi"],
        [5, "lbs", 2.26796, "kg"],
        [5, "kg", 11.0231, "lbs"],
      ];
      let expect = [
        "5 gallons converts to 18.9271 liters",
        "5 liters converts to 1.32086 gallons",
        "5 miles converts to 8.0467 kilometers",
        "5 kilometers converts to 3.10686 miles",
        "5 pounds converts to 2.26796 kilograms",
        "5 kilograms converts to 11.0231 pounds",
      ];
      input.forEach((ele, i) => {
        assert.equal(
          convertHandler.getString(ele[0], ele[1], ele[2], ele[3]),
          expect[i]
        );
      });
      done();
    });
  });
});
