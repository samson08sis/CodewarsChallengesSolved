function isIsogram(str){
    //...
    let val = true;
    for(let i = 0; i < str.length; i++) {
      let ltr = str[i];
      for(let k = 0; k < str.length; k++) {
        if(str.charCodeAt(k) >= 65 && str.charCodeAt(k) <= 90 || str.charCodeAt(k) >= 97 && str.charCodeAt(k) <= 122) {
          for(let j = 0; j < str.length; j++) {
            if(i != j && ltr.toUpperCase() == str[j].toUpperCase())
              val = false;
          }
        }
      }
      return val;
    }
  }

  console.log(isIsogram("aka"));
  console.log(isIsogram("ak47"));
  console.log(isIsogram("aKfdj"));
  console.log(isIsogram("akAbc"));