var isUgly = function(n) {
  if([1,2,3,5].includes(n)){
    return true
  }
  if(n<1){
    return false
  }
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0){
        return false;
      }
    }
    return true
  }

  let primesOfN = []

  for(let i = 2 ; i < n ; i++){
    if(isPrime(i)){
      if(n/i%1===0){
        primesOfN.push(i)
      }
    }
  }
  if(primesOfN.length==0){

    return false
  }
  console.log(primesOfN)
  if([primesOfN].length>3){
    return false
  }
  for (number of primesOfN){
    if(![2,3,5].includes(number)){
      console.log(false)
      return false
    }
  }

  return true
};
isUgly(2)