var isAlienSorted = function(words, order){
  orderValues = new Map();
  orderCount = 1;
  for (letter of order.split('')){
    orderValues.set(letter,orderCount)
    orderCount++
  };
  
  currentArray = []
  for( let i = 0; i<words.length-1; i++){
    for (let j = 0; j<words[i].length; j++){
      if(orderValues.get(words[i][j])>orderValues.get(words[i+1][j])){
        return false
      }
      else if((orderValues.get(words[i][j]))<orderValues.get(words[i+1][j])){
        break;
      }
      else if(!orderValues.get(words[i+1][j])){
        return false
      }
    }
  }
  return true
};
isAlienSorted(["abc","abcd"],"abcdefghijklmnopqrstuvwxyz")
