var isPerfectSquare = function(num) {
  let i = 0

  while(Math.pow(i,2)<=num){
    // console.log(i)
    if(Math.pow(i,2)==num){
      // console.log(i)
      return i  
    }
    i++
  }
  // console.log(false)
  return false


};
isPerfectSquare(16)