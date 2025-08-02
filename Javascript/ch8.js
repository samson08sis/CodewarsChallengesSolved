function highAndLow(numbers) {
  // ...
  const arr = numbers.split(" ");
  arr.sort((a, b) => a - b);
  const val = arr[arr.length - 1] + " " + arr[0];
  return val;
}

console.log(highAndLow("4 2 1 5 0 6"));
