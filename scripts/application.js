var myNumber = 1;
while (myNumber <= 5) {
  console.log(myNumber);
  myNumber++;
}

var trainsOperational = 10;
var trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train #" + trainNumber + " is running.");
  trainNumber++;
}


var num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
while (monthNumber <= monthsToPrint) {
	numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
  console.log("Train #" + trainNumber + " is running");
}

for(myNum = 5; myNum >=1; myNum--){
  console.log(myNum);
}


var operationalTrains = 8;
var totalTrains = 12;
for(var stoppedTrains = operationalTrains + 1; stoppedTrains <= totalTrains; stoppedTrains++){
  console.log("Train #" + stoppedTrains + " is not running");
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
while (currentGen <= 4) {
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + "MW!");
  currentGen++;
}
for(currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + "MW!");
}
