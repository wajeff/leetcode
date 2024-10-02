var isSameAfterReversals = function(num) {
  let originalNum = num
  num = String(num).split('').reverse()
  while(num[0]==='0'){
    num.shift()
  }
  if(num.reverse().join('')==originalNum){
    return true
  }
  return false
};
isSameAfterReversals(5260)