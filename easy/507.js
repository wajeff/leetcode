const checkPerfectNumber = function(num) {
  const result = []
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
        result.push(i);
        if (i !== num / i) {
            result.push(num / i);
        }
    }
  }
  if((result.reduce((a,b)=>a+b,0) - num) == num){
    return true
  }
  return false
}
checkPerfectNumber(28) 
