
const squareCode = function(message) {
  message = message.replace(/ /g, ''); // removes every space in the message

  let columns = Math.ceil(Math.sqrt(message.length)); // calculates number of columns 
  let rows = Math.ceil(message.length / columns); // calculates number of rows

  let pattern = [];
  let result = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      
      if (!pattern[i]) {
        pattern[i] = [message[0]]; // adds the first element of message to a new array in pattern
      } else {
        pattern[i].push(message[0]); // adds the first element of message to the existing array in pattern
      }

      if (!message.substring(1)) { // if undefined, message is now empty so break
        break;
      } else {
        message = message.substring(1) // removes the first element of message so pattern doesn't add it again on the next iteration
      }
    }
  }

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (!pattern[j][i]) break;
      result += pattern[j][i]; // builds the final result by taking an element of each array in pattern
    } result += ' '; // also adding a space between each completed word
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));