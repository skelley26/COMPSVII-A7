console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Seafood Alfredo", "Mashed Potato", "Crinkle cut fries dipped in vanilla milkshake", "KitKats", "Sweet Potato Soup", "Corned Beef and Cabbage Soup"];
// created array with 6 favorite foods of mine

// 2. Loop through the list and print: "One of my favorite foods is ______."
function list(favoriteFoods) {
  console.log("One of my favorite foods is " + favoriteFoods);
}
list(favoriteFoods);
//prints the list of favorite foods

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
//prints one-by-one my ranked list of favorite foods




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me- " + foodName + " is delicious.");
};
//putting foodName so that below can fill in the blanks. so anything within the parentheses will be plugged in.


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
// for(let...of) used to iterate through the list, then food.includes looks for the letter a in the list above and....



// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = []; 
for (let food of friendFavorites) {
  if (food.includes("a")) {
    foodsWithA.push(food);
    }
  }
console.log(foodsWithA);
//...Stores the result of that search in foodsWithA. I use push() here to move this new list into the empty array.


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];
for (let food of friendFavorites) {
  if (food.length > 6){
    longFoodNames.push(food);
  }
}
console.log(longFoodNames);
// Once again, using push to move it all to longFoodNames. I used food.length >6 to find those with characters higher than 6. I think that it counts spaces though, no idea how to fix that.

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];
for (let food of friendFavorites) {
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}
console.log(shortFoodNames)
// Same thing. Only difference is that food.length needed more than just < 6 because you wanted 6 or shorter. so I used <= as a less than or equal to.

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
}
else if (shortFoodNames.length < longFoodNames.length) {
  console.log("There are more long-named foods.");
};
//loop that prints if one array list is longer than the other... you get it.

 

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
function longest() {
  return [...friendFavorites].sort(function (a, b) {
    return b.length - a.length;
  })[0];
}
//for some reason this part beat me up and stole my lunch money. I looked through geeks for geeks, w3schools and the resources, and finally found that array.sort() should be [...friendFavorites].sort because it copies what we already had in another array:
// https://www.w3schools.com/howto/howto_js_spread_operator.asp


let longestFood = longest();
console.log("The longest food name in the list is " + longestFood + " with " + longestFood.length + " characters.");
//no longer confused. locked in and girlbossed it out.



// Websites that saved my life:
// https://www.w3schools.com/java/java_arrays.asp
// https://www.happycoders.eu/java/initialize-array-java/
// https://www.geeksforgeeks.org/java/java-if-else-statement-with-examples/
// https://www.w3schools.com/jS/js_loop_forof.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.geeksforgeeks.org/javascript/how-to-get-the-longest-string-in-an-array-using-javascript/