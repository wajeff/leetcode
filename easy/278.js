var solution = function(isBadVersion) {
  return function(n) {
    let start = 0 
    let end = n
    let middle = 0
    while(start<=end){
      middle = Math.floor((end+start)/2)
      if(isBadVersion(middle)){
        end = middle-1
      }
      else{
        start = middle+1
      }
    }
    return start
  };
};