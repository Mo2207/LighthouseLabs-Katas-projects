
// this function searches parking spots based on the coordinates given below (stored in  nested arrays)

const whereCanIPark = function (spots, vehicle) {
  let X;
  let Y = 0;
  
  let parking; // assigns the parking variable according to vehicle
  if (vehicle === 'regular') parking = ['R'];
  if (vehicle === 'small') parking = ['R','S'];
  if (vehicle === 'motorcycle') parking = ['R','S','M'];

  for (let y = 0; y < spots.length; y++) { // iterates through the Y rows, starting at the first

    for (let x = 0; x < spots[y].length; x++) { // iterates through the X columns in each Y row, starting at the first

      if (parking.includes(spots[y][x])) { 
        X = spots[y].indexOf(spots[y][x]); // sets the X coordinate to the column matching the vehicle parking spot
        return [X,Y]; // once X coordinate is set and parking is found it exits loop
      }

    } Y++; // if X coordinate (parking variable) was not found in this row, Y is incremented and the loop continues
  } 

  return false; // once all rows have been searched and X coordinate has not been found you are SOL
};

// calling the function:
console.log(whereCanIPark( // should return [4,0]
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark( // should return false
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark( // should return [3,1]
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))