var isPowerOfTwo = function(n) {
  let powersOfTwo = 0
  let i = 0
  while(powersOfTwo<=0){
    let powersOfTwo = Math.pow(2,i)
      if(powersOfTwo==n){
        console.log(true)
        return true
      }
      else if(powersOfTwo>n){
        console.log(false)
        return false
      }
    i++
  }

  
};

/*  if(n==1||n==2){
      return true
  }
  if(n%2!=0 ){
      return false
  }
  if(n>=8 && n%8==0 && n!=24){
      return true
  }    
  else if(n<8 && n%2==0 && n%4==0){
      return true
  }
  return false
   */
isPowerOfTwo(32)