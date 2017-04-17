/*
  Paste each of these in JS Bin (or repl.it). Make sure auto-run is off. Ask what will be
  printed for each. Then run it.
*/

if (true) {
  console.log("Alpha");
} else {
  console.log("Beta");
}

// Use all the below with the if/else structure from above
false

3 === 3

3 === 4

var x = 12;
x === 12

var x = 12;
x / 2 === 6

var x = 12;
x < 20;

// the below do not use the alpha/beta structure from above
var temperature = 50;
if (temperature <= 32) {
  console.log("It's freezing!");
}

var color = "red";
if (color === "green") {
  console.log("Go");
} else if (color === "yellow") {
  console.log("Goooo!!! ;P");
} else {
  console.log("Stop");
}

var happy = true;
var knowIt = true;
if (happy && knowIt) {
  console.log("Clap");
}

// change knowIt to false

var x = 4;
if (x < 10 || x > 100) {
  console.log("Alpha");
} else {
  console.log("Beta");
}

var city = "Portsmith";
if (city === "Detroit" || city === "Grand Rapids") {
  console.log("GC FTW");
}

var city = "Detroit";
var state = "MI";
if (state === "MI" && (city === "Detroit" || city === "Grand Rapids") ) {
  console.log("GC FTW");
}

var likeOnions = false;
if (!likeOnions) {
  console.log("hold the onions.");
}

var gear = "D";
switch (gear) {
  case "D":
    console.log("Move forward.");
    break;
  case "P":
  case "N":
    console.log("Don't move.");
    break;
  case "R":
    console.log("Move backward.");
    break;
}
