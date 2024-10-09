//use bitwise?
//use binary?

var divide = function(dividend, divisor) {
  divideCount = 0
  if(Math.abs(dividend)===Math.abs(divisor)){
    divideCount = 1
  }
  else{
    positiveDivident = Math.abs(dividend)
    positiveDivisor = Math.abs(divisor)
    
    while(positiveDivisor<positiveDivident){
      positiveDivident-=positiveDivisor
      divideCount++
    }
  }
  
  //Test for negative
  if(dividend<0&&divisor>0||dividend>0&&divisor<0){
    return -divideCount
  }
  console.log(divideCount)
  return divideCount
};

// divide(-10,3)
divide(7,-3)