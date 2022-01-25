
const camelCase = function(input) {
  input = input.split(' '); // splits the entire string up by spaces
  
  for (let i = 1; i < input.length; i++) { // skips the first word in the array to keep it all lower case
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1); // grabs the first letter of each word in the array and capitalizes it, then uses slice to add the rest of the word behind it in lower case
  } 
  return input.join(''); // returns the array all together joined by no spaces
};

console.log(camelCase("this is a string")); // should return thisIsAString
console.log(camelCase("loopy lighthouse")); // should return loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // should return supercalifragalisticexpialidocious