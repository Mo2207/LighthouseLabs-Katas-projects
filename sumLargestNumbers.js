
const sumLargestNumbers = function(data) { 
  let num = Math.max(...data); // the largest number is assigned to num
  data.splice(data.indexOf(Math.max(...data))); // the largest number is removed from the array
  return Math.max(...data) + num; // the second largest number is then added to num and returned
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126