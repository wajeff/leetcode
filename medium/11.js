var maxArea = function(height) {

    let left = 0;
    let right = height.length-1;
    let area = 0;

    while(left<right){
        const currentArea = (right-left)*Math.min(height[right],height[left])
        area=Math.max(currentArea,area)
        if(height[left]<=height[right]){
            left++
        }
        else{
            right--
        }
    }
    return(area)
};
maxArea([2,3,4,5,18,17,6])
