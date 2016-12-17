// WHILE loop to log all numbers 1 through 5 in accending order
// var myNumber = 1;
// while (myNumber <= 5) {
//   console.log(myNumber);
//   myNumber++;
// }

// WHILE loop to log operational trains 1 through 10 in accending order
// var trainsOperational = 10;
// var trainNumber = 1;
// while (trainNumber <= trainsOperational) {
//   console.log("Train #" + trainNumber + " is running.");
//   trainNumber++;
// }

// WHILE loop to log numbers 10 through 1 in decending order
// var num = 10;
// while (num >= 1) {
//   console.log(num);
//   num--;
// }


// WHILE loop to log increase in number of sheep/month when sheep count increases four fold each month
// var numSheep = 4;
// var monthNumber = 1;
// var monthsToPrint = 12;
// while (monthNumber <= monthsToPrint) {
// 	numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
//   monthNumber++;
// }

// FOR loop to log operational trains 1 through 10 in accending order
// var trainsOperational = 10;
// var trainNumber = 1;
// for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
//   console.log("Train #" + trainNumber + " is running");
// }

// FOR loop to log all numbers 1 through 5 in decending order
// for(myNum = 5; myNum >=1; myNum--){
//   console.log(myNum);
// }

// FOR loop to log non-operational trains in accending order 9 through 12
// var operationalTrains = 8;
// var totalTrains = 12;
// for(var stoppedTrains = operationalTrains + 1; stoppedTrains <= totalTrains; stoppedTrains++){
//   console.log("Train #" + stoppedTrains + " is not running");
// }

// WHILE and FOR loops to log individual geneerator power and total power
// var currentGen = 1;
// var totalGen = 19;
// var totalMW = 0;
// while (currentGen <= 4) {
//   totalMW += 62;
//   console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + "MW!");
//   currentGen++;
// }
// for(currentGen = 5; currentGen <= totalGen; currentGen++) {
//   totalMW += 124;
//   console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + "MW!");
// }

// logs all even numbers in decending order from 10 to 2
// var num = 10;
// while (num > 0) {
//   if(num % 2 === 0){
//     console.log(num);
//   }
//   num--;
// }

// IF...ELSE using Boolean Flags in Conditionals
// var parkIsOpen = true;
// if (parkIsOpen === true) {
//   console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
// } else {
//   console.log("Sorry, the Badlands are particularly bad today. We're closed!");
// }

// ELSE...IF: when two conditions just aren't enough
// IF -> ELSE IF -> ELSE
// NOTE: if ANY of the conditionals are met while working through the the block the remaining portion of the block will be entirely skipped
// var numSheep = 4;
// var monthsToPrint = 12;
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//   if(numSheep > 10000) {
//     numSheep = numSheep/2;
//     console.log("Removing " + numSheep + " sheep from the population.");
//   }
//     numSheep *= 4;
//     console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
//   }

//Complex Conditionals using && ||
// var numSheep = 4;
// var monthsToPrint = 12;
//
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//
//   if (monthNumber % 4 === 0) {
//     var reduction = numSheep * 0.75;
//     console.log("Removing " + reduction + " sheep from the population.");
//     numSheep -= reduction;
//   }
//
//   else if (numSheep > 10000) {
//     var reduction = numSheep * 0.5;
//     console.log("Removing " + reduction + " sheep from the population.");
//     numSheep -= reduction;
//   }
//
//   numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }

// FOR loop w/ IF...ELSEIF and && || Conditionals
// var totalGen = 19;
// var totalMW = 0;
// for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
//   if(currentGen % 2 !== 0){
//     console.log("Generator #" + currentGen + " is off.");
//   } else if (currentGen % 2 === 0 && currentGen <= 4) {
//     totalMW += 62;
//     console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
//   } else {
//     totalMW += 124;
//     console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
//   }
// }
// ALERT(), CONFIRM(), PROMPT()
// confirm() "Cancel" returns FALSE
// confirm() "OK" returns TRUE
// prompt() can store responses in a var
// Example: var userName = prompt("What is your user name?")
// If "Cancel" is selected on prompt() it will return null
// typeof userName would return "object" if "Cancel" is selected because null is a generic JS object

// // prompt() Prompts for the user name
// var userName = prompt("What is your user name?");
// // If "Cancel" is selected will result in null and return "object"
// // If string is entered and "OK" selected will return "string"
// confirm("Are you sure your user name is " + userName + "?");
// // If "Cancel" is selected will return a "FALSE" value
// // If "OK" is selected will return a "TRUE" value
// if(confirm(true)){
//   console.log(userName);
// } else {
//   console.log("Confirm canceled");
// }


// typeof Method
// Used to identify the "typeof" value inside a var or expression
// Useful in checking a var's contents
//    typeof true --> returns "boolean"
//    typeof "That's not a valid entry" --> returns "string"
//    typeof 42 --> returns "number"
//    typeof undefined --> returns "undefined"
//    typeof null --> returns "object"

// CONFIRMATION LOOP
// var gotName = false;
// while(gotName === false){
//   var userName = prompt("What is your user name?");
//   if(confirm("Are you sure your user name is " + userName + "?")){
//     alert("What's up " + userName + "?");
//     gotName = true;
//   }
// }

// Confirmation Loop Practice
// 1
// var userAge = prompt("What's your age, user?");
// var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

// 2
// var userAge = prompt("What's your age, user?");
// var ageIsCorrect = false;
// while(ageIsCorrect === false){
//   if(confirm("You entered  " + userAge + ". Is this correct?")){
//     alert("Great! Your age is logged as " + userAge + ".");
//     ageIsCorrect = true;
//   }
// }

//FUNCTIONS
// What's a function for?
// Give input to function --> function manipulates input --> outputs result
// A function solves problems--step-by-step--that we need to do repeatedly
// Example: summing two cubes
// Syntax of the "summing two cubes" (non-function)
// The "long way"...
// var a = 4;
// var b = 9;
// var aCubed = a * a * a;
// var bCubed = b * b * b;
// var sum = aCubed + bCubed;
// console.log(sum);
// Wrapping code in a function allows us to reuse it without having to rewrite code
// // Syntax for basic function structure
// function sumOfCubes(a, b){
//   var aCubed = a * a * a;
//   var bCubed = b * b * b;
//   var sum = aCubed + bCubed;
//   return sum;
// }
//
// Calling the function
// sumOfCubes(4, 9);

//or
// console.log(sumOfCubes(4,9));

// or
// var mySum = sumOfCubes(5,6);
// alert(mySum);

// Writing Efficient Functions
// Being concise helps conserve memory and limit storage operations
// This is the same function written more efficiently below by elminating three vars
// function sumOfCubes(a, b){
//   return a * a * a + b * b * b;
// }

// We can also pass expressions as the parameters of a funciton
// JS will evaluate and simplify the expression(s) before calling the funciton
// Example: sumOfCubes(1 + 2, 3 + 5); results in sumOfCubes(3, 8);

// We can also use vars as parameters
// Example:
// var x = 3;
// sumOfCubes(x * 2, x * 4); results in sumOfCubes(6, 12);

// Practice
// function multiplyTrio(a, b, c){
//   return a * b * c;
// }
// console.log(multiplyTrio(1,2,3));

// Return larger of two values
// function maxOf2(a,b){
//   if(a > b){
//     return a;
//   } else if (b > a) {
//     return b;
//   } else {
//     return "a and b are equal";
//   }
// }
// console.log(maxOf2(3,3));

// Refactoring for Efficiency and Legibility
// From this...
// function mystery(x, y) {
//   var a = 4 * x * y;
//   var b = 3 * y + 5;
//   var c = a + b;
//   return c;
// }

// To this...
// function mystery(x, y) {
//   return (4 * x * y) + (3 * y + 5);
// }

// More Comples Functions
// Function that counts the "E's" from a user-entered phrase

// countE();
//
// function countE(){
//   var phrase = prompt("Which phrase would you like to examine?");
//   if(typeof(phrase) !== "string"){
//     alert("That's not a valid entry!");
//     return false;
//   } else {
//     var eCount = 0;
//     for(var index = 0; index < phrase.length; index++){
//       if(phrase.charAt(index) === "e" || phrase.charAt(index) === "E")
//       eCount++;
//       }
//     alert("There are " + eCount + " e's in the phrase \"" + phrase + "\".");
//     return true;
//     }
//   }

// Function Practice
// The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day.
// Build a function called feedPerRanger that takes in:
//   The current population of sheep.
//   The number of Park Rangers available during the day.
// The function should alert the amount of feed that each Park Ranger should be responsible for on that day. The output should match the following format: "Each Park Ranger should load <number> lbs of feed today."

// feedPerRanger(1200,  10);
// function feedPerRanger(numSheep, numRgrs) {
//   var lbsFood = (numSheep * 2) / numRgrs;
//   alert("Each Park Ranger should load " + lbsFood + " lbs of feed today.");
// }



// Technicians have decided they want more control of which generators are on and off.
// They’ve asked you to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.
// Build a function named changePowerTotal that takes in four parameters:
//   The total power generated (a number)
//   The generator ID for the current generator (a number)
//   The generator status (a string that says "on" or "off")
//   The amount of power produced by the current generator (a number)
// Your function should:
//   If the current generator is set to "on", then add to the total power generated.
//   Or if the current generator is set to "off", then remove from the total power generated.
//   return the total power generated.
//   alert the technician in the following formats:
// For switching on: "Generator #2 is now on, adding 62 MW, for a total of 62 MW!""
// For switching off: "Generator #2 is now off, removing 62 MW, for a total of 0 MW!""
// Note: You do not need to call the function. Build the function declaration without invoking it.

function changePowerTotal(totalMW, currentGenID, currentGenStatus, currentGenMW){
  if(currentGenStatus === "on"){
    totalMW += currentGenMW;
    alert("Generator #" + currentGenID + " is now on, adding " + currentGenMW + " MW, for a total of " + totalMW + " MW !");
  } else if (currentGenStatus === "off") {
    totalMW -= currentGenMW;
    alert("Generator #" + currentGenID + " is now off, removing " + currentGenMW + " MW, for a total of " + totalMW + " MW!");
  }
  return totalMW;
}
