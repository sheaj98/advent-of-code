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

console.log("largest", Math.max(...totals));
