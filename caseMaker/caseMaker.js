import { separate } from './separate.js';
import { upperCaseMe } from './upperCaseMe.js';
import { vowelConsonant } from './vowelConsonant.js';

const makeCase = function(input, casing) {
  let result = '';
  if (casing.includes('camel')) {
    result += upperCaseMe(input, 1); // skip the first word, no spaces
  }
  if (casing.includes('pascal')) {
    result += upperCaseMe(input, 0); // start at the first word, no spaces
  }
  if (casing.includes('snake')) {
    result += separate(input, '_'); // separate words by _
  }
  if (casing.includes('kebab')) {
    result += separate(input, "-"); // separate words by -
  }
  if (casing.includes('title')) {
    result += upperCaseMe(input, 0, true); // capitalize all words, with spaces
  }
  if (casing.includes('vowel')) {
    result += vowelConsonant(input, 'vowel'); // capitalize all vowels
  }
  if (casing.includes('consonant')) {
    result += vowelConsonant(input, 'consonant'); // capitalize all consonants
  }
  if (casing.includes('upper')) {
    if (result !== '') {
      result = result.toUpperCase(); // if result has already been modified, keep its value but
    } else {                         // capitalize it
      result += input.toUpperCase(); // otherwise just return the input capitalized
    }
  }
  if (casing.includes('lower')) {
    if (result !== '') {
      result = result.toLowerCase(); // if result has already been modified, keep its value but
    } else {                         // lowercase it
      result += input.toLowerCase(); // otherwise just return the input lowercased
    }
  }
  return result;
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING
