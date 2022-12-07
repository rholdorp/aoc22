const readFileSync = require("fs").readFileSync;
const lines = readFileSync("input", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n");

function part1() {
  console.log("input file =", lines);
}

function part2() {
  console.log("solution for part 2");
}

part1();
part2();
