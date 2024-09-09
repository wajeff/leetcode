var missingNumber = function(nums) {
  function sumTo(n) {
    return n * (n + 1) / 2;
  }
  console.log(sumTo(nums.length))
  const numsValue = [...nums].reduce((a,b)=>a+b,0)
  if(numsValue!=sumTo(nums.length)){
    return sumTo(nums.length)-numsValue
  }
  else{
    return 0
  }
};

missingNumber([3,0,1])
/*const sortedNums = [...nums].sort((a,b)=>a-b)
console.log(sortedNums)
for (let i = 0; i < nums.length; i++){
  if(i==0){
    if(sortedNums[i]!==0){
      console.log('break')
      return 0
    }
  }
  else if(sortedNums[i]!==sortedNums[i-1]+1){
    console.log(true)
    return sortedNums[i-1]+1
  }
}
if(!sortedNums.includes(sortedNums.length)){
  return sortedNums.length
}*/