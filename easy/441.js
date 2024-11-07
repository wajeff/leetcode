var arrangeCoins = function(n) {
  if(n===1){
    return 1
  };
  for(let i = 0; i<n ;i++){
    let nextGaussNumber = ((i+1)*(i+2)/2);
    if(nextGaussNumber>n){
      return i;
    };
  };
};
arrangeCoins(3)