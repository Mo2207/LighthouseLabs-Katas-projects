
// this function is responsible for special seperators other than spaces
export function seperate(input, seperator) {
  let result = '';

  for ( let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result += input[i].replace(' ', seperator); // if character is space replace with seperator
    } else {
      result += input[i]; // otherwise just add the normal character
    }
  }
  return result;
}