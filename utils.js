const {
  GERMANY,
  UK,
  OUT_OF_STOCK
} = require('./constants');

// formulas to get minimum price
const calculate = (
  item,
  preferedCountry,
  transportCost,
  exportFromUk = false
) => {
  let otherCountry = preferedCountry === GERMANY ? UK : GERMANY;
  // if order count is more then available stock in a country.
  if (item.count[preferedCountry] < item.orderCount) {
    item.cost =
      item.count[preferedCountry] * item.price[preferedCountry] +
      (item.orderCount - item.count[preferedCountry]) *
      item.price[otherCountry] +
      Math.ceil((item.orderCount - item.count[preferedCountry]) / 10) *
      transportCost;

    item.count[otherCountry] =
      item.count[otherCountry] -
      (item.orderCount - item.count[preferedCountry]);

    item.count[preferedCountry] = 0;
  }
  // if item is purchesed frm the ordered country.
  else if (!exportFromUk) {
    item.cost = item.orderCount * item.price[preferedCountry];
    item.count[preferedCountry] -= item.orderCount;
  }
  // if item needs to be exported from UK.
  else {
    item.cost =
      (item.orderCount - (item.orderCount % 10)) * item.price[preferedCountry] +
      Math.floor(item.orderCount / 10) * transportCost +
      (item.orderCount % 10) * item.price[otherCountry];

    item.count[preferedCountry] -= item.orderCount - (item.orderCount % 10);

    item.count[otherCountry] =
      item.count[otherCountry] - (item.orderCount % 10);
  }
};

// print output in desired format
const printOutput = (inventoryObj) => {
  const totalPrice =
    inventoryObj.mask.cost === null ?
    OUT_OF_STOCK :
    inventoryObj.mask.cost + inventoryObj.gloves.cost;
  let output = `${totalPrice}:${inventoryObj.mask.count[UK]}:${inventoryObj.mask.count[GERMANY]} : ${inventoryObj.gloves.count[UK]}:${inventoryObj.gloves.count[GERMANY]}`;
  console.log(output);
};

module.exports = {
  calculate,
  printOutput
};