// Pattern
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for (let i = 0; i < 4; i++) {
  let line = "";
  for (let j = 0; j < 4; j++) {
    line += `${j + 1} `;
  }
  console.log(line);
}

// Pattern 2
// 1
// 22
// 333
// 4444

for (let i = 0; i < 4; i++) {
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

for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += i + j;
  }
  console.log(line);
}
