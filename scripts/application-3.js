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

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);
