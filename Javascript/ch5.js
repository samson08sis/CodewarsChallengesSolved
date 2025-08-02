function tribonacci(signature,n){
    //your code here
    let a = signature[0], b = signature[1], c = signature[2];
    for(let i = 3; i < n; i++) {
      signature.push(a + b + c);
      a = b;
      b = c;
      c = signature[i];
    }
    console.log(signature);
    return signature;
  }

  tribonacci([0, 0, 1], 10);function tribonacci(signature,n){
    //your code here
    let a = signature[0], b = signature[1], c = signature[2];
  if(n >= signature.length) {
    for(let i = 3; i < n; i++) {
      signature.push(a + b + c);
      a = b;
      b = c;
      c = signature[i];
    }
  } else {
    for(let i = 0; i <= (signature.length - n); i++) {
      signature.pop();
    }
    if(n == 0) signature.pop();
  }
    console.log(signature);
    return signature;
  }

  tribonacci([0, 0, 1], 10);
  tribonacci([0, 1, 1], 10);
  tribonacci([1, 1, 1], 10);
  tribonacci([0, 1, 1], 10);
  tribonacci([1, 1, 1], 10);
  tribonacci([1, 1, 1], 0);