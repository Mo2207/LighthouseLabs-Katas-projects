
// this function is responsible for camelCase, pascalCase and title
// with spacing optional
export function upperCaseMe(input, start = 0, spacing = false) {
  let result = '';

  if (spacing) {
    spacing = ' '; // if spacing true 
  } else {
    spacing = '';  // if spacing false 
  }

  input = input.split(' '); // split all words by spaces and put them into array

  for (let i = start; i < input.length; i++) {
    if (start === 1) result += spacing; // adds space at beginning for camel case only (if spacing true)
    result += input[i].charAt(0).toUpperCase() + input[i].slice(1) + spacing; // spaces added between words if spacing set to true (false by default)
  }
  
  if (start === 0) {
    return result; // skips the first word to keep lower case (if camelcase)
  } return input[0] + result; // otherwise returns all words
}