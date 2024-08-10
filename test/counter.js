const counter = {};

counter.add = (a, b) => {
  console.log("executed => add");
  return a + b;
};

counter.minus = (a, b) => {
  console.log("executed => minus");
  return a - b;
};

counter.multiply = (a, b) => {
  console.log("executed => multiply");
  return a * b;
};

module.exports = counter;
