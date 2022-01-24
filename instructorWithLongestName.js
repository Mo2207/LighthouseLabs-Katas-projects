
const instructorWithLongestName = function(instructors) {
  let current = 0;
  let result;

  for (let i = 0; i < instructors.length; i++) {
    if (current < instructors[i].name.length) {
      current = instructors[i].name.length;
      result = instructors[i];
    };
  } return result;
};

console.log(instructorWithLongestName([ // {name: "Jeremiah", course: "Web"}
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([ // {name: "Domascus", course: "Web"}
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));