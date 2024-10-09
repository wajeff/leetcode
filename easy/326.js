var isPowerOfThree = function(n) {
  let currentNumber = 0
  if(n==1){
    return true
  }
  if(n<1){
    return false
  }
  if(n>0){
    i = 0
    while(currentNumber<n){
      currentNumber=Math.pow(3,i)
      i++
    }
  }
  if(currentNumber==n){
    return true
  }
  return false
};
isPowerOfThree(1)
