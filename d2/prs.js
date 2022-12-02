const fs = require("fs");

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString().split("\n");

let arr = readFileLines("input");

// console.log("input arr =" + arr);
let score = 0;
arr.forEach((element) => {
  switch (element) {
    case "A X":
      score += 4;
      break;
    case "A Y":
      score += 8;
      break;
    case "A Z":
      score += 3;
      break;
    case "B X":
      score += 1;
      break;
    case "B Y":
      score += 5;
      break;
    case "B Z":
      score += 9;
      break;
    case "C X":
      score += 7;
      break;
    case "C Y":
      score += 2;
      break;
    case "C Z":
      score += 6;
      break;
    default:
      break;
  }
});

console.log("The winning score = " + score);
