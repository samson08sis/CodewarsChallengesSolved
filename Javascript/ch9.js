function dnaStrand(dna){
    const symbols = ["C", "G", "T", "A"];
    let complement = "";
    
    for(let i = 0; i < dna.length; i++) {
        for(let j = 0; j < symbols.length; j++) {
            if(dna[i] == symbols[j] && j % 2 == 0) {
                complement += symbols[j + 1];
            } else if(dna[i] == symbols[j] && j % 2 == 1) {
                complement += symbols[j - 1];
            }
        }
    }

    console.log(complement);
    return complement;
  }
  
  
  dnaStrand("CGTA");
  dnaStrand("TATA");
  dnaStrand("CGGA");
  dnaStrand("GGAA");