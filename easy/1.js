var twoSum = function(nums, target) {  
    for(let i = 0; i<nums.length ; i++){
        valueToFind = target - nums[i]
        if(nums.indexOf(valueToFind,i+1)>-1){
            return [i,nums.indexOf(valueToFind,i+1)]
        }
    }
}
twoSum([3,2,4],6)

/*

target - 3 => 3
target - 2 => 4
target - 4 => 2 


*/