console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Seafood Alfredo", "Mashed Potato", "Crinkle cut fries dipped in vanilla milkshake", "KitKats", "Sweet Potato Soup", "Corned Beef and Cabbage Soup"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
function list(favoriteFoods) {
  console.log("One of my favorite foods is " + favoriteFoods);
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
console.log("My #1 favorite food is " + favoriteFoods[5]);
console.log("My #2 favorite food is " + favoriteFoods[3]);
console.log("My #3 favorite food is " + favoriteFoods[2]);
console.log("My #4 favorite food is " + favoriteFoods[6]);
console.log("My #5 favorite food is " + favoriteFoods[1]);
console.log("My #6 favorite food is " + favoriteFoods[4]);





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me- " + foodName + " is delicious.");
};


// 4b. Call the function at least 3 times
printFoodRecommendation("Seafood Alfredo");
printFoodRecommendation("Sweet Potato Soup");
printFoodRecommendation("Corned Beef and Cabbage Soup");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
console.log("Foods with the letter a in them:");
for (let food of friendFavorites) {
  if (food.includes("a")){
    console.log(food);
  }
}



// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = []; 
for (let food of friendFavorites) {
  if (food.includes("a")) {
    foodsWithA.push(food);
    }
  }
console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];
for (let food of friendFavorites) {
  if (food.length > 6){
    longFoodNames.push(food);
  }
}
console.log(longFoodNames);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];
for (let food of friendFavorites) {
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}
console.log(shortFoodNames)


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
}
else if (shortFoodNames.length < longFoodNames.length) {
  console.log("There are more long-named foods.");
};

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
function longest() {
  return [...friendFavorites].sort(function (a, b) {
    return b.length - a.length;
  })[0];
}
 
let longestFood = longest();
console.log("The longest food name in the list is " + longestFood + " with " + longestFood.length + " characters.");
//I used what my beloved geeksforgeeks told me, however I am still a little confused on how this part works.


// https://www.w3schools.com/java/java_arrays.asp
// https://www.happycoders.eu/java/initialize-array-java/
// https://www.geeksforgeeks.org/java/java-if-else-statement-with-examples/
// https://www.w3schools.com/jS/js_loop_forof.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.geeksforgeeks.org/javascript/how-to-get-the-longest-string-in-an-array-using-javascript/