const readFileSync = require("fs").readFileSync;
//const lines = readFileSync("input", { encoding: "utf-8" })
const lines = readFileSync("tst_input", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((line) => [...line].map(Number));

function part1() {
  // let vertCnt = 0;
  // let horCnt = 0;
  // let cnt = 0;
  // var visiMap = [];
  // lines.map((line) => {
  //   const lnght = line.length;
  //   for (horCnt = 0; horCnt < lnght; horCnt++) {
  //     visiMap.push([]);
  //     visiMap[vertCnt].push(cnt);
  //     cnt++;
  //   }
  //   vertCnt++;
  // });

  var visiMap = lines.map(function (line) {
    return line.slice();
  });
  console.table("visiMap = " + visiMap);
  console.log("visiMap = " + visiMap[2][1]);
}

function part2() {
  console.log("solution for part 2");
}

part1();
part2();
