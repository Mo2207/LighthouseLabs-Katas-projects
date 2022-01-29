
// this function is responsible for special seperators other than spaces
export function seperate(input, seperator) {
  for ( let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      input = input.replace(input[i], seperator); // if character is space replace with seperator
    } 
  }
  return input;
}