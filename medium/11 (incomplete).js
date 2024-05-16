var maxArea = function(height) {
    let left = 0
    let right = 1
    let max = 0
    while(left < height.length){
        if(height[left]>height[right]){
            currentValue = height[right]*(right-left)
        }
        else if(height[right]>height[left]){
            currentValue = height[left]*(right-left)
        }
        else if(height[right]==height[left]){
            currentValue = height[left]*(right-left)
        }

        max = Math.max(currentValue,max)
        right++
        if(right>=height.length){
            left++
            right=left+1

        }
    }
    return(max)
};
maxArea([1,8,6,2,5,4,8,3,7])
