const splitInput = require('./splitInput');
const getInventory = require('./getInventory');
const calculatePrice = require('./calculatePrice');
const {
	printOutput
} = require('./utils');

// get input from command line
let input = process.argv[2];
if (input) {
	try {
		const order = splitInput(input);
		let inventoryObj = getInventory(order);
		calculatePrice(order, inventoryObj);
		printOutput(inventoryObj);
	} catch (e) {
		console.log("Input format is not correct");
	}
} else {
	console.log("please provide command line input");
}