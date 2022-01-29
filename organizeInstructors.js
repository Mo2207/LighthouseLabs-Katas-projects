
const organizeInstructors = function(instructors) {
  let result = {};

  for (let i = 0; i < instructors.length; i++) {
    if (!result.hasOwnProperty(instructors[i].course)) { /* if result doesn't already have this property, add it and set it to the first name */
      result[instructors[i].course] = [instructors[i].name];
    } else {
      result[instructors[i].course].push(instructors[i].name); // add the rest of the names to the array
    }
  }
  return result;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }