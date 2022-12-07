const readFileSync = require("fs").readFileSync;
const lines = readFileSync("input", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

function part1() {
  let totalSum = 0;

  var dirSum = [0, 0, 0, 0];
  let nesting = 0;
  var regex = /\d+/g;

  const res = lines.map((line) => {
    if (line.indexOf("cd") > -1 && line != "$ cd /") {
      if (line == "$ cd ..") {
        if (dirSum[nesting] <= 100000) {
          console.log("adding =" + dirSum[nesting]);
          totalSum += dirSum[nesting];
          dirSum[nesting - 1] += dirSum[nesting];
        }
        dirSum[nesting] = 0;
        nesting--;
      } else {
        nesting++;
      }
    } else {
      if (Number(line.match(regex)) != 0) {
        dirSum[nesting] += Number(line.match(regex));
        console.log("scanned number = " + Number(line.match(regex)));
        console.log("dirSum = " + dirSum[nesting]);
        console.log("nesting = " + nesting);
      }
    }
    console.log("sum file sizes = " + totalSum);
  });
  // while (nesting >= 0) {
  //   console.log("offloading = " + dirSum[nesting]);
  //   if (dirSum[nesting] <= 100000) {
  //     totalSum += dirSum[nesting];
  //   }
  //   nesting--;
  // }
  // //console.log("dirSum = " + dirSum);
  console.log("sum file sizes = " + totalSum);
}

function part2() {
  console.log("solution for part 2");
}

part1();
part2();

// const res = lines.map((line) => {
//     const [interval1, interval2] = line
//       .split(",")
//       .map((interval) => interval.split("-").map(Number))
//       .sort((a, b) => {
//         const oneSize = a[1] - a[0];
//         const twoSize = b[1] - b[0];
//         return twoSize - oneSize;
//       });

//     const oneFullContainsTwo =
//       interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

//     return oneFullContainsTwo ? 1 : 0;
//   });
