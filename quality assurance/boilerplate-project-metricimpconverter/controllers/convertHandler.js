function ConvertHandler() {
  this.getNum = function (input) {
    const expression = /^([0-9./]*)([a-zA-Z]*)$/;
    const match = input.match(expression);
  
    if (!match) {
      throw new Error("invalid number");
    }
  
    const numericPart = match[1];
    let unitPart = match[2];
    unitPart = unitPart.toLowerCase();
    let unitArr = ["gal", "l", "mi", "km", "lbs", "kg"];
  
    if (numericPart === "" || numericPart.includes("/")) {
      const operands = numericPart.split("/");
      if (!unitArr.includes(unitPart) && operands.length > 1) {
        throw new Error("invalid number and unit");
      } else if (operands.length > 2) {
        throw new Error("invalid number");
      }
      const evaluatedValue = eval(numericPart || "1");
      if (isNaN(evaluatedValue)) {
        throw new Error("invalid number");
      }
      return evaluatedValue;
    } else {
      const numericValue = parseFloat(numericPart);
      if (isNaN(numericValue)) {
        throw new Error("invalid number");
      }
      return numericValue;
    }
  };
  

  this.getUnit = function (input) {
    const expression = /^([0-9./]*)([a-zA-Z]*)$/;
    let unitArr = ["gal", "l", "mi", "km", "lbs", "kg"];
    let result = input.match(expression)[2];
    result = result.toLowerCase();
    if (!unitArr.includes(result)) {
      throw new Error("invalid unit");
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result = {
      gal: "L",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return result[initUnit];
  };

  this.spellOutUnit = function (unit) {
    let result = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };
    return result[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        break;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
