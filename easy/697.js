var findShortestSubArray = function(nums) {
  let numsMapOccurences = new Map()
  let firstIndexNumsMap = new Map()
  let lastIndexNumsMap = new Map()
  let index=0
  for( let num of nums){
    if(!numsMapOccurences.has(num)){
      numsMapOccurences.set(num,1)
      firstIndexNumsMap.set(num,nums.indexOf(num))
    }
    else if(numsMapOccurences.has(num)){
      numsMapOccurences.set(num, numsMapOccurences.get(num)+1)
    }
    lastIndexNumsMap.set(num, index)
    index++
  }

  occurences = (Math.max(...numsMapOccurences.values()))
  let subArrayLength = Infinity
  for([key,value] of numsMapOccurences){
    if(value==occurences){
      
      subArrayLength=Math.min(subArrayLength,(lastIndexNumsMap.get(key)-firstIndexNumsMap.get(key))+1)
    }
  }
  return(subArrayLength)

};
findShortestSubArray([1,2,2,3,3,1])

/*   let subArrayLength = 1
  let finalArrayLength = 0
  let finalArray = []
  for(let i = 0; i < nums.length ; i++){
    if(nums[i+1]===nums[i]){
      subArrayLength+=1
    }
    else{
      if(finalArrayLength<Math.max(finalArrayLength,subArrayLength)){
        finalArray=[]
        for (let j = i ; j > finalArrayLength; j--){
          finalArray.push(nums[j])
        }
      }
      finalArrayLength = Math.max(finalArrayLength,subArrayLength)
      subArrayLength = 1 
    }
  }
  console.log(finalArrayLength)
  console.log(finalArray)*/