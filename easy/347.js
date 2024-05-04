var topKFrequent = function(nums, k) {
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

};
topKFrequent([1,1,1,2,2,3],2)