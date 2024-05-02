var containsDuplicate = function(nums) {
    let numsSet = new Set(nums);
    return numsSet.size==nums.length ? false : true 
};
containsDuplicate([1,2,3,1])