const {
  TOTAL_GLOVES_GERMANY,
  TOTAL_GLOVES_UK,
  TOTAL_MASK_GERMANY,
  TOTAL_MASK_UK,
  MASK_PRICE_GERMANY,
  MASK_PRICE_UK,
  GLOVES_PRICE_GERMANY,
  GLOVES_PRICE_UK
} = require('./constants');
//create inventry object from the order.
const getInventory = (order) => {
  let inventoryObj = {
    mask: {
      count: {
        germany: TOTAL_MASK_GERMANY,
        uk: TOTAL_MASK_UK,
      },
      price: {
        germany: MASK_PRICE_GERMANY,
        uk: MASK_PRICE_UK,
      },
      orderCount: order.mask,
      cost: null,
    },
    gloves: {
      count: {
        germany: TOTAL_GLOVES_GERMANY,
        uk: TOTAL_GLOVES_UK,
      },
      price: {
        germany: GLOVES_PRICE_GERMANY,
        uk: GLOVES_PRICE_UK,
      },
      orderCount: order.gloves,
      cost: null,
    },
  };

  return inventoryObj;
};

module.exports = getInventory;