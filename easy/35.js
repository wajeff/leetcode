var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!=-1){
        return nums.indexOf(target)
    }
    if(nums[nums.length-1]<target){
        return nums.length
    }
    if(nums[0]>target){
        return 0
    }
    for (index in nums){
        if(nums[index]>target){
            return index
        }
    }
};
searchInsert([1,3,5,6],4) //3