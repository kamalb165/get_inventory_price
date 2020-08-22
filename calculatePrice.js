const {
  TOTAL_GLOVES_GERMANY,
  TOTAL_GLOVES_UK,
  TOTAL_MASK_GERMANY,
  TOTAL_MASK_UK,
  DISCOUNT_TRANSPORT_COST,
  TRANSPORT_COST,
  GERMANY,
  UK,
  GLOVES,
  MASK
} = require('./constants');
const {
  calculate
} = require("./utils");

// logic to get minimum price for specific order.
const calculatePrice = (order, inventoryObj) => {
  if (
    order.gloves > TOTAL_GLOVES_GERMANY + TOTAL_GLOVES_UK ||
    order.mask > TOTAL_MASK_GERMANY + TOTAL_MASK_UK
  ) {} else if (order.country.toLowerCase() === GERMANY) {
    if (order.hasUkPassport) {
      calculate(inventoryObj[MASK], UK, DISCOUNT_TRANSPORT_COST, true);
      calculate(inventoryObj[GLOVES], UK, DISCOUNT_TRANSPORT_COST, true);
    } else {
      calculate(inventoryObj[MASK], GERMANY, TRANSPORT_COST);
      calculate(inventoryObj[GLOVES], UK, TRANSPORT_COST, true);
    }
  } else {
    let tranportCost = order.hasGermanyPassport ?
      DISCOUNT_TRANSPORT_COST :
      TRANSPORT_COST;
    mask_cost = calculate(inventoryObj[MASK], UK, tranportCost);
    glove_cost = calculate(inventoryObj[GLOVES], UK, tranportCost);
  }
};

module.exports = calculatePrice;