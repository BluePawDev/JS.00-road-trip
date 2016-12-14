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
var totalGen = 19;
var totalMW = 0;
for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if(currentGen % 2 !== 0){
    console.log("Generator #" + currentGen + " is off.");
  } else if (currentGen % 2 === 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }
}
