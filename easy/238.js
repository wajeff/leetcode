var productExceptSelf = function(nums) {
    let output = []

    let numsMap = new Map()
    nums.forEach((element,index)=>{
        numsMap.set(index,element)
    })
    for (let i = 0; i<nums.length ; i++){
        let currentMap = new Map(numsMap.entries())
        currentMap.delete(i)
        const sum = Array.from(currentMap.values()).reduce((acc, value) => acc * value, 1);
        output.push(sum)
    }
    return(output)

};
productExceptSelf([1,2,3,4])
//[24,12,8,6]