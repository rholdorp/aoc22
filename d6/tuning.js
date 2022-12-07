const readFileSync = require("fs").readFileSync;
const input = readFileSync("input", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .trim();

function isUnique(array) {
  return new Set(array).size === array.length;
}

function part1() {
  let slidingWindow = [];
  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);
    if (slidingWindow.length > 4) {
      slidingWindow.shift();
    }
    if (slidingWindow.length === 4 && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

function part2() {
  const windowLength = 14;
  let slidingWindow = [];
  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);
    if (slidingWindow.length > windowLength) {
      slidingWindow.shift();
    }
    if (slidingWindow.length === windowLength && isUnique(slidingWindow)) {
      console.log("test =" + (i + 1));
      break;
    }
  }
}

part1();
part2();
