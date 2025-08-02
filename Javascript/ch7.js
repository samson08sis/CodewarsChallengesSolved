function squareDigits(num){
    let str= String(num);
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        let n = Number(str[i]) ** 2;
        newStr += n;
    }
    num = Number(newStr);
    console.log(num);
    return num;
}

squareDigits(1919);
squareDigits(23);
squareDigits(129);