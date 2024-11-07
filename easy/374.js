var guessNumber = function(n) {
  let start = 0;
  let end = n;
  while(start<=end){
    let middle = Math.floor((start+end)/2);
    if(guess(middle)===0){
      return middle;
    }
    else if(guess(middle)===1){
      start = middle+1;
    }
    else if(guess(middle)===-1){
      end = middle+1;
    };
  };
  return end;
};