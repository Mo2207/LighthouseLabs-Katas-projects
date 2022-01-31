
const squareCode = function(message) {
  message = message.replace(/ /g, '');

  let columns = Math.ceil(Math.sqrt(message.length));
  let rows = Math.ceil(message.length / columns);

  let pattern = [];
  let result = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      
      if (!pattern[i]) {
        pattern[i] = [message[0]];
      } else {
        pattern[i].push(message[0]);
      }

      if (!message.substring(1)) {
        break;
      } else {
        message = message.substring(1)
      }
    }
  }
  // console.log(pattern)
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (!pattern[j][i]) break;
      result += pattern[j][i];
    } result += ' ';
  }
  return result;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));