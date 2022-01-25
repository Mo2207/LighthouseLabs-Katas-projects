
const repeatNumbers = function(data) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    result += ` ${(data[i][0].toString()).repeat(data[i][1])},`;
  } return result.slice(0,-1).trim();
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292