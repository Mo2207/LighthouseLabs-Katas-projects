
const numberOfVowels = function(data) {
  let vowels = ['a','e','i','o','u'];
  let result = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) result += 1;
  } return result;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5