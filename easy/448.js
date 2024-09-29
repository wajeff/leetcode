var findDisappearedNumbers = function(nums) {
  const set = new Set(nums)
  const missingNums = []
  for ( let i = 0; i < nums.length ; i+=1 ){
    if(!set.has(i+1)){
      missingNums.push(i+1)
    }
  }
  return(missingNums)
};
findDisappearedNumbers([1,1])

/*Slow algo
  let numsLength = nums.length
  let missingNums = []
  if(!nums.includes(1)){
    nums.push(1)
    missingNums.push(1)
  }
  nums = new Set(nums)
  nums = Array.from(nums)
  nums = nums.sort((a,b)=>a-b)

  
  for(let i = 1 ; i < numsLength+1; i ++){
    
   if(!nums.includes(i)){
    missingNums.push(i)
   }
  }
  console.log(missingNums)
  return missingNums */