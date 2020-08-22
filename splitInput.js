const {
  GLOVES,
  MASK
} = require('./constants'); // create order object from command line input
const splitInput = (input) => {
  let order = {
    hasUkPassport: false,
    hasGermanyPassport: false,
  };
  let arr = input.split(":");
  order.country = arr[0];
  if (arr[1].toLowerCase() === GLOVES || arr[1].toLowerCase() === MASK) {
    order[arr[1].toLowerCase()] = arr[2];
    order[arr[3].toLowerCase()] = arr[4];
  } else {
    order.passport = arr[1];
    // regex to validate the passport
    if (arr[1].match(/^[Bb][0-9]{3}[a-zA-Z]{2}[a-zA-Z0-9]{7}$/)) order.hasUkPassport = true;
    else if (arr[1].match(/^[Aa][a-zA-Z]{2}[a-zA-Z0-9]{9}$/)) order.hasGermanyPassport = true;
    // else order.hasGermanyPassport = true;
    order[arr[2].toLowerCase()] = arr[3];
    order[arr[4].toLowerCase()] = arr[5];
  }
  return order;
};

module.exports = splitInput;;