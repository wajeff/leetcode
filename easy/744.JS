var nextGreatestLetter = function(letters, target) {
  let start = 0;
  let end = letters.length-1;
  while(start<=end){
    let middle = Math.floor((start+end)/2);
    if(letters[middle]>target){
      end = middle-1;
    }
    else if(letters[middle]<=target){
      start = middle+1;
    };
  };
  if(letters[start]>target){
    return letters[start];
  };
  return letters[0];
};
nextGreatestLetter(["c","f","j"],'j')