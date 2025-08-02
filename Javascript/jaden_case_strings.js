String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

String.prototype.toPerfectJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// // test

// console.log(
//   "hello there studEnts! hOW are you? this IS Q#3 ... 123".toJadenCase()
// );
// console.log(
//   "hello there studEnts! hOW are you? this IS Q#3 ... 123".toPerfectJadenCase()
// );
