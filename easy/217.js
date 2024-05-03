var containsDuplicate = function(nums) {

    return new Set(nums).size==nums.length ? false : true 
};
containsDuplicate([1,2,3,1])