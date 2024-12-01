var topKFrequent = function(nums, k) {
  let numsMap = new Map();
  let result = [];
  for(let num of nums){
      if(numsMap.has(num)){
          numsMap.set(num, numsMap.get(num)+1);
      }
      else{
          numsMap.set(num,1);
      };
  };
  numsMap = new Map([...numsMap.entries()].sort((a,b)=>b[1]-a[1]));
  let iterator = numsMap.entries()
  
  for(let i = 0; i < k; i++){
      result.push(iterator.next().value[0])
  };
  return result;
  
};
topKFrequent([1,1,1,2,2,3],2)
/*Old Solution

  // nums=nums.sort((a,b)=>a-b)
    output=[]
    let numsMap= new Map();
    for (index in nums){
        if(numsMap.has(nums[index])){
            numsMap.set(nums[index], numsMap.get(nums[index]) + 1)
        } 
        else{
            numsMap.set(nums[index], 1)
        }
    };

    const numsMapSort = new Map([...numsMap.entries()].sort((a, b) => b[1] - a[1]))
    array = Array.from(numsMapSort, ([key, value]) => (key))
    for(let i = 0 ; i<k;i++){
        output.push(array[i])
    }
    return output
*/