var isPowerOfTwo = function(n) {
  if(Math.log2(n)%1==0){
    return true
  }
  return false
  
};

/*  First Solution smh
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
 */

isPowerOfTwo(32)