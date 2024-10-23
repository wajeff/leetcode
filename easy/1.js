var twoSum = function(nums, target) {  
  numsMap = new Map()
  for(index in nums){
    if(!numsMap.has(nums[index])){
      numsMap.set(nums[index],Number(index))
    }
  }
  for([key,value] of numsMap){
    console.log(value)
    console.log(numsMap.get(target-key))
    if(numsMap.has(target-key)&&value!=numsMap.get(target-key)){
      console.log([value,numsMap.get(target-key)])
      return ([value,numsMap.get(target-key)])
    }
  }
}
twoSum([3,3],6)

/* 
Old solution

var twoSum = function(nums, target) {  
    for(let i = 0; i<nums.length ; i++){
        valueToFind = target - nums[i]
        if(nums.indexOf(valueToFind,i+1)>-1){
            return [i,nums.indexOf(valueToFind,i+1)]
        }
    }
} */
