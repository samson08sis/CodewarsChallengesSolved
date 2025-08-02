function duplicateEncode(word) {
  let str = "";
  let char;
  for (let i = 0; i < word.length; i++) {
    let ltr = word[i];
    char = "(";
    for (let j = 0; j < word.length; j++) {
      if (i != j && ltr.toUpperCase() == word[j].toUpperCase()) char = ")";
    }
    str += char;
  }
  console.log(str);
  return str;
}
duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("receipt");
duplicateEncode("Success");
