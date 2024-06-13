/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numSet = new Set(nums)
    const result= [...numSet]
    console.log(result)
};

removeDuplicates([1,1,2])