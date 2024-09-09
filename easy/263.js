var isUgly = function(n) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If the number is divisible by any number other than 1 and itself, it's not a prime
    }
    return true; // Return true if the number is prime
  }
  for (let i = 2; i <= n; i++) {
    // While 'i' is a prime factor and divides 'num' evenly
    while (isPrime(i) && n % i === 0) {
  
      if(![2,3,5].includes(i)){
        return false
      }
      n /= i; 
    }
  }
  return true
};
isUgly(937351770)