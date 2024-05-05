var productExceptSelf = function(nums) {
    let leftArray=[]
    let rightArray=[]
    let output=[]

    for(let i = 0; i<nums.length;i++){
        if(i==0){
            leftArray.push(1)
        }
        else{
            leftArray.push(leftArray[i-1]*nums[i-1])
        }
    }
    for(let i = nums.length-1; i>=0 ;i --){
        if(i==nums.length-1){
            rightArray[i]=(1)
        }
        else{
            rightArray[i]=rightArray[i+1]*nums[i+1]
        }
    }
    for(let i = 0 ; i<leftArray.length ; i++){
        output.push(leftArray[i]*rightArray[i])
    }
    return output
    

};
productExceptSelf([1,2,3,4])
//[24,12,8,6]