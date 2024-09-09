var isUgly = function(n) {
  if(n<1){
    return 0
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If the number is divisible by any number other than 1 and itself, it's not a prime
    }
    return true; // Return true if the number is prime
  }
  const primes = []
  for(let i = 2 ; i < n+1 ; i++){
    if(isPrime(i)&&n%i===0){
      primes.push(i)
    }
  }

  for(number of primes){
    if(![2,3,5].includes(number)){
      return false
    }
  }
  return true
};
isUgly(7)