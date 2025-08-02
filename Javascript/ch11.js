function digPow(n, p){
    // ...
    const str = String(n);
    const numArr = [];
    for(let i = 0; i < str.length; i++) {
        numArr[i] = String(n).split("")[i];
    }
    let sum = 0;
    for(let i = 0; i < numArr.length; i++) {
        sum += numArr[i] ** p;
        p++;
    }
    let k = -1;
    for(let i = 1; sum >= n * i; i++) {
        if(sum == n * i) k = i;
    }
    console.log(k, sum);
    return k;
  }

  digPow(46288, 3);