// Loops Problem-1 (Print 1-10)
for (let i = 1; i <= 10; i++) {
  console.log("i = ", i);
}

// Loops Problem-2 (Sum of 1 to n numbers)
let sum = 0;
let n = prompt("Enter the final number to sum: ");

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);
