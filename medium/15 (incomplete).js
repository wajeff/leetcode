var threeSum = function(nums) {
    
    nums = nums.sort((a,b)=>a-b)
    let left = 0;
    let middle = 1;
    let right = nums.length-1;
    let arrays= []
    while (left<=nums.length-2){
        if(middle==right-1){
            left ++
            middle = left+1
        }
        else if(nums[left]+nums[middle]+nums[right]==0){
            arrays.push([nums[left],nums[middle],nums[right]])
            middle++
        }
        else if(nums[left]+nums[middle]+nums[right]>0){
            right++
        }
        else if(nums[left]+nums[middle]+nums[right]<0){
            middle++
        }
    }
    console.log(arrays)
};
threeSum([-1,0,1,2,-1,-4])
       //[-4,-1,-1,0,1,2]  
        // l m         r
        //-4-1         +2 == -3   middle ++

        // l   m       r
        //-4  -1      +2 == -3    middle ++

        // l     m     r 
        //-4     0     +2 == -2    middle ++

        //l         m  r
        //-4       +1 +3 == -1   middle++
        
        //  l  m       r        //if equals zero && middle !+ right -1, push,
        //  sn++, middle == sn+1
        //  -1 -1      +2 == 0 
        
        //  l  

