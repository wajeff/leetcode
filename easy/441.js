var arrangeCoins = function(n) {
  let start = 0;
  let end = n;

  while(start<=end){
    let middle = Math.floor((start+end)/2);
    let gaussCoins = (middle * (middle + 1)) / 2;
    if(gaussCoins===n){
      return gaussCoins;
    }
    else if(gaussCoins>n){
      end = middle-1;
    }
    else if(gaussCoins<n){
      start = middle+1;
    }
  }
  return(end);
};
arrangeCoins(4)

/*
O(n) solution
var arrangeCoins = function(n) {
  if(n===1){
    return 1
  };
  for(let i = 0; i<n ;i++){
    let gaussNumber = (i*(i+1)/2);
    let nextGaussNumber = ((i+1)*(i+2)/2);
    if(nextGaussNumber>n){
      return i;
    };
  };
};
*/