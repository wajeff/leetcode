
var longestConsecutive = function(nums) {
    if(nums.length==0){
        return 0
    }
    nums = new Set([...nums])
    nums = new Array(...nums).sort((a,b)=>a-b)

    let left = 0
    let right = 1 
    let count = 1
    let length = 1
    while(left < nums.length){

        if(nums[right]==nums[left]+count){
            right++
            count++
        }
        else if(nums[right]!=nums[left]+count){
            left++
            count--

        }
        if(right-left>length){
            length = right - left
        }
    }

    return(length)
   
};
longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])