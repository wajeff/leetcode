var findDisappearedNumbers = function(nums) {
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
  return missingNums
};
findDisappearedNumbers([1,1])