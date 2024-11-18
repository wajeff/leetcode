var wordPattern = function(pattern, s) {
  let patternMap = new Map()
  for(element of s){
    if(!(patternMap.has(element))){
      patternMap.set(element,1)
    }
    else{
      patternMap.set(element, patternMap.get(element)+1)
    }
  };
  

};
wordPattern("aba","dog cat cat")