//JAVASCRIPT ROADTRIP: PART 3
//Function Expressions (a.k.a. "Functions on the Fly")
//Building functions within code exeution rather than at program load time

//Declared Functions
//Builds in memory immediately when the program loads
//Example:
// function diffOfSquares(a, b){
//   return a * a - b * b;
// }

//This loads only when this line of code is reached within the program
// var diff = function diffOfSquares(a, b){
//   return a * a - b * b;
// };
//called by using the var "diff", not diffOfSquares! (e.g. diff(9, 5);)

//Anonymous Function
//Esentially the same as above without using the "diffOfSquares" name in declaring the funciton because it has been assigned to a var
// var diff = function (a, b){
//   return a * a - b * b;
// };

// var diff = function (a, b){
//   return a * a - b * b;
// };
// diff(9,5);
// console.log(diff);


// function forestFright() {
//   var toAlert = "";
//   for (var i = 0; i < 5; i++) {
//     toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
//   }
//   alert(toAlert);
// }
//
// var people = 10;
// var rain = 2;
// var sharks = 5;
//
// var fearGenerated = function(numPeeps, rainInInches, numSharks) {
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
//   alert(totalFear);
//   return totalFear;
// };
// fearGenerated(people, rain, sharks);
// alert(fearGenerated);

//fearGenerated(3,4,7);

// var fear = fearGenerated(numPeeps, rainInInches, numSharks);
//
// var fearMessage = function() {
//   if (fear < 200) {
//     return confirm("Fear Level: LOW\nStill wanna ride?");
//   } else if (fear >= 200 && fear <= 300) {
//     return confirm("Fear Level: MEDIUM\nThink you'll make it?");
//   }
// };
//
// function confirmRide(confirmToGo) {
//   return confirmToGo();
// }
//
// var startRide = confirmRide(fearMessage);

// Function Expression with Arrays and map()
// var numbers = [12, 4, 3, 9, 8, 6, 10, 1];
// var results = numbers.map(function (arrayCell){
//   return arrayCell * 2;
// }
// );
// console.log(results);



// They want to take the passengers array and convert those subarrays into strings that contain the first and last name for each passenger.
// 1. Create a modifiedNames variable to store our new data.
// 2. Assign passengers.map() to the modifiedNames variable. This will allow us to pass in a function to be used on every element in the array.
// 3. Pass an anonymous function to map().
// 4. The anonymous function should take in arrayCell as a parameter and use that to return a string with the first and last name for a passenger. In other words, if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string.


// var modifiedNames = [ "Thomas Meeks",
//                       "Gregg Pollack",
//                       "Christine Wong",
//                       "Dan McGaw" ];
//
// modifiedNames.map(function(name) {
//   alert("Yo, " + name + "!");
// });



// The folks over at Poplar Puzzlers need an array of functions for one of their puzzles. They’ve requested your help in making the array, which they would like to be called puzzlers. The cells of the array should each contain a function, and these functions–well, what they return–are listed here in order. Each function has one parameter. Note input below represents the parameter, and you will need to convert the math formulas to JavaScript:
//
// 1. Returns 3 * input - 8
// 2. Returns (input + 2)3
// 3. Returns input2 - 9
// 4. Returns input % 4
// Use your knowledge of arrays and anonymous function expressions to build this array of functions.
//
// Note: Use parentheses with your return statements if you’re having trouble with the order of operations.

// Make sure all the functions you’ve built contain a function keyword, accept an input, and are properly closed with correct syntax and semicolons.
// You’ll need to establish an array called puzzlers and either build all the functions in the initial declaration, or add four functions into the array sequentially.
var puzzlers = [
  function(a) { return 3 * a - 8; },
  function(a) { return (a + 2) * (a + 2) * (a + 2); },
  function(a) { return a * a - 9; },
  function(a) { return a % 4; }
];
