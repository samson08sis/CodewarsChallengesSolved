// return masked string
function maskify(cc) {
  const cs = cc.split("");
  const l = cs.length;
  for (let i = l; i >= 0; i--) {
    if (l - i > 4) {
      cs[i] = "#";
    }
  }
  cc = cs.join("");
  console.log(cc);
  return cc;
}

maskify("a");
maskify("abc");
maskify("0000");
maskify("Samson Sisay");
maskify("");
