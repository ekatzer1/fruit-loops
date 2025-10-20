// Fruit Loops
// The following lists are parallel lists
// Use them to develop code mentioned in the comments below

var fruits = [
    "apple",
    "banana",
    "grapes",
    "orange",
    "dragonfruit",
    "kiwi",
    "starfruit"
];

var calories = [
    95,
    105,
    35,
    69,
    61,
    42,
    28
];

var carbohydrates = [
    25,
    27,
    9,
    18,
    15,
    10,
    6.1
];

var sugars = [
    19,
    14,
    7.6,
    12,
    9,
    6.2,
    3.6
];

var fat = [
    0.3,
    0.4,
    0.1,
    0.2,
    0.5,
    0.4,
    0.3
];

var protein = [
    0.5,
    0.4,
    0.4,
    1.3,
    1.1,
    0.8,
    1
];

function printAllLists() {
    console.log("fruits:");
    console.log(fruits);
    console.log("calories:");
    console.log(calories);
    console.log("sugars:");
    console.log(sugars);
    console.log("carbohydrates:");
    console.log(carbohydrates);
    console.log("fat:");
    console.log(fat);
    console.log("protein:");
    console.log(protein);
}

printAllLists();

//----------- Q1 -----------//
// Print a list of all fruits that have at least 50 calories
//for (___) {
//
//}

//----------- Q2 -----------//
// Print all fruits with a name greater than 7 letters
//for (___) {
//
//}

//----------- Q3 -----------//
// Print all fruits with less than 12 g of sugar
//for (___) {
//
//}

//----------- Q4 -----------//
// Print all fruits with more than 1 g of protein
//for (___) {
//
//}

//----------- Q5 -----------//
// Print all fruits with 80 or more calories and 20 g or more of carbs
//for (___) {
//
//}

//----------- Q6 -----------//
// Write a function that can add new fruits to ALL lists
function addFruit(name, amountCalories, amountSugars, amountCarbohydrates, amountFat, amountProtein) {

}

//----------- Q7 -----------//
// Write a function that can add new fruits to ALL lists
// Add some new fruits to the lists
// Use https://www.nutritionix.com/ for data
//addFruit(___);
//addFruit(___);
//addFruit(___);

console.log("\nI added some fruits\nNow the lists are:");
printAllLists();

//----------- Q8 -----------//
// Write a function that can delete a fruit from ALL the lists by name

function deleteFruit(name) {

}

//----------- Q9 -----------//
// Delete some of the original fruits
deleteFruit("apple");
deleteFruit("starfruit");
deleteFruit("orange");

console.log("\nI deleted some fruits\nNow the lists are:");
printAllLists();

//----------- Q10 -----------//
// Write a function that prints out the stats
// of a fruit nicely
function fruitStats(name) {

}

console.log("\nHere are some fruit stats:");
fruitStats("dragonfruit");
fruitStats("kiwi");
fruitStats("grapes");