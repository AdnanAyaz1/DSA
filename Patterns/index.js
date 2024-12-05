// Pattern
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// Pattern 1: 1 2 3 4 (repeated rows)
let rows = 4;
let cols = 4;
console.log("pattern 1");
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < cols; j++) {
    line += `${j + 1} `;
  }
  console.log(line.trim());
}

// Pattern 2
// 1
// 22
// 333
// 4444
console.log("pattern 2");
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < i + 1; j++) {
    line += i + 1;
  }
  console.log(line);
}
//Pattern 3
// 1
// 23
// 345
// 5678
console.log("pattern 3");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += i + j;
  }
  console.log(line);
}

// Pattern 4
// 1
// 21
// 321
// 4321
console.log("pattern 4");
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < i + 1; j++) {
    line += i + 1 - j;
  }
  console.log(line);
}

// Pattern 5
//    *
//   **
//  ***
// ****
console.log("pattern 5");
for (let i = 1; i <= rows; i++) {
  let lines = "";
  for (let j = 1; j <= cols; j++) {
    let num_of_spaces = cols - i;
    lines += j <= num_of_spaces ? " " : "*";
  }
  console.log(lines);
}

// Pattern 6
// *
// **
// ***
// ****
console.log("pattern 6");
for (let i = 1; i <= rows; i++) {
  let lines = "";
  for (let j = 1; j <= i; j++) {
    lines += "*";
  }
  console.log(lines);
}

// Pattern 7
// ****
//  ***
//   **
//    *
console.log("pattern 7");
for (let i = 0; i < rows; i++) {
  let lines = "";
  for (let j = 1; j <= cols; j++) {
    lines += j <= i ? " " : "*";
  }
  console.log(lines);
}

console.log("Pattern 8");
// 1        // 3 spaces + 1
// 121       // 2 spaces + 1 2 1
// 12321      // 1 space  + 1 2 3 2 1
// 1234321     // 0 spaces + 1 2 3 4 3 2 1

for (let i = 1; i <= rows; i++) {
  let line = ""; // Initialize the line for each row

  // Add spaces to center-align the numbers
  for (let j = 1; j <= rows - i; j++) {
    line += " ";
  }

  // Add numbers in increasing order
  for (let j = 1; j <= i; j++) {
    line += j;
  }

  // Add numbers in decreasing order
  for (let j = i - 1; j >= 1; j--) {
    line += j;
  }

  // Print the completed line
  console.log(line);
}

console.log("pattern 9");
// Pattern
// 1234554321  // 0 => 0 stars
// 1234**4321  // 1 => 2 stars
// 123****321  // 2 => 4 stars
// 12******21  // 3 => 6 stars
// 1********1  // 4 => 8 stars

for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 0; j < 1; j++) {
    // increasing order
    for (let k = 0; k < 5 - i; k++) {
      line += k + 1;
    }
    // stars
    for (let s = 0; s < i * 2; s++) {
      line += "*";
    }
    // decreasing order
    for (let l = 5 - i; l >= 1; l--) {
      line += l;
    }
  }
  console.log(line);
}
