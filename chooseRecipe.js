
const chooseRecipe = function(bakeryA, bakeryB, recipes) {c
  let result = 0;

  for (let i = 0; i < recipes.length; i++) { //iterates through recipes array of objects
    for (let j = 0; j < recipes[i].ingredients.length; j++) { // iterates through objects ingredients
      if (bakeryA.includes(recipes[i].ingredients[j])) result++;
      if (bakeryB.includes(recipes[i].ingredients[j])) result++;
      if (result === 2) return recipes[i].name; // if both bakeryA and bakeryB have a matching ingredient result is incremented and returned when at 2
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));