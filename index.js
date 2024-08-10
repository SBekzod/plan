const moment = require("moment");
const counter = require("../parker/calculate");

const time = moment().format("HH:mm:ss");
console.log("Executed at", time);

const result = counter.add(10, 40);
console.log("result:", result);
