function productFib(prod) {
  // ...
  const fib = [0, 1];
  let a = fib[0];
  let b = fib[1];
  for (let i = 2; a * b < prod; i++) {
    fib.push(a + b);
    b = fib[i];
    a = fib[i - 1];
  }
  const arr = [a, b, a * b == prod];
  console.log(fib);
  console.log(arr);
  return arr;
}

productFib(40);
productFib(38);
