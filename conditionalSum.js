
const conditionalSum = function(values, condition) {
  let result = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) result += values[i];
    } return result;
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) result += values[i];
    } return result;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0