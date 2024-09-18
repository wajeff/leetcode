var hammingWeight = function(n) {
  n = n.toString(2).split('')
  let hash = {}
  for (const num of n){
    hash[num]=hash[num]+1 || 1
  }
  return(hash[1])
};
hammingWeight(128)
/*let setBitCount = 0
  for (number of n.toString(2).split('')){
    if(number==='1'){
      setBitCount++
    }
  }

 return setBitCount */