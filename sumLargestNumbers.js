
const sumLargestNumbers = function(data) { 
  let num = Math.max(...data);
  data.splice(data.indexOf(Math.max(...data)));
  return Math.max(...data) + num;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126