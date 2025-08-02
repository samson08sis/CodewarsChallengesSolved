function solution(str, ending) {
  // Custom implementation
  let value;
  if (str.length >= ending.length) {
    const dif = str.length - ending.length;
    let newStr = str.slice(dif);
    newStr === ending ? (value = true) : (value = false);
  } else value = false;
  return value;
}

solution("Hello", "lo");

////////////////////////////////////////////////  Solution 2 -- Using string method
console.log("Hello".endsWith("llo"));
