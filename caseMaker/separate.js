
// this function is responsible for special seperators other than spaces
export function separate(input, separator) {
  for ( let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      input = input.replace(input[i], separator); // if character is space replace with separator
    } 
  }
  return input;
}