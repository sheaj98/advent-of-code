export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("input", lines);

const totals: number[] = [];
let elfTotal = 0;

lines.forEach((line) => {
  if (line === "") {
    totals.push(elfTotal);
    elfTotal = 0;
  } else {
    elfTotal += parseInt(line);
  }
});

totals.sort((a, b) => b - a);
const largest = totals[0];
const secondLargest = totals[1];
const thirdLargest = totals[2];

console.log("largest", largest);
console.log("secondLargest", secondLargest);
console.log("thirdLargest", thirdLargest);

console.log("total", largest + secondLargest + thirdLargest);
