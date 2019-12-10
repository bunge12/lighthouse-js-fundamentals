const temperature = 25;

if (temperature <0) {
  console.log("Make sure you poick a scarf!"); 
} else if (temperature <15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you'ree ready to go outside!");

const isCitizen = true;
const age = 30;
if (isCitizen && age > 18) {
  console.log("you are eligible to vote");
}

if (temperature <-40 || temperature >40) {
  console.log("Maybe going outside is not a good idea");
}

const raining = false;
if (!raining) {
  console.log("Leave your umbrella home");
}