export const x = "";

// A -> Rock
// B -> Paper
// C -> Scissors

// X -> Rock - 1
// Y -> Paper - 2
// Z -> Scissors - 3

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log("input", lines);

let score = 0;

lines.forEach((line) => {
  const [opp, me] = line.split(" ");
  switch (opp) {
    case "A":
      if (me === "X") {
        score += 4;
      } else if (me === "Y") {
        score += 8;
      } else if (me === "Z") {
        score += 3;
      }
      break;
    case "B":
      if (me === "X") {
        score += 1;
      } else if (me === "Y") {
        score += 5;
      } else if (me === "Z") {
        score += 9;
      }
      break;
    case "C":
      if (me === "X") {
        score += 7;
      } else if (me === "Y") {
        score += 2;
      } else if (me === "Z") {
        score += 6;
      }
      break;
  }
});

console.log("score", score);
