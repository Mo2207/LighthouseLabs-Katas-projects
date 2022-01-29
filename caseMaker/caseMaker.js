import { seperate } from './seperate.js';
import { upperCaseMe } from './upperCaseMe.js';

const makeCase = function(input, casing) {
  if (casing === 'camel') {
    return upperCaseMe(input, 1); // skip the first word, no spaces
  }
  if (casing === 'pascal') {
    return upperCaseMe(input, 0); // start at the first word, no spaces
  }
  if (casing === 'snake') {
    return seperate(input, '_'); // seperate words by _
  }
  if (casing === 'kebab') {
    return seperate(input, "-"); // seperate words by -
  }
  if (casing === 'title') {
    return upperCaseMe(input, 0, true); // capitalize all words, with spaces
  }
  if (casing === 'vowel') {

  }
  if (casing === 'consonant') {

  }
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING
