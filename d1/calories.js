const fs = require("fs");

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString().split("\n");

let arr = readFileLines("input");

const arrOfNum = arr.map((str) => {
  return Number(str);
});

var sumValue = 0;
var totalsArr = [];

arrOfNum.forEach((element) => {
  if (element != "") {
    sumValue += element;
  } else {
    totalsArr.push(sumValue);
    sumValue = 0;
  }
});
totalsArr.sort(function (a, b) {
  return a - b;
});
var length = totalsArr.length;

console.log(
  "Elf with most calories carries: " + totalsArr[length - 1] + " calories."
);
