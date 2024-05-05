var productExceptSelf = function(nums) {
    let numsString=[...nums].join('')
    let output = []
    for( let i = 0; i < nums.length ; i ++){
        currentString=numsString.replace(numsString[i],'')
        output.push(currentString.split('').reduce((a,b)=>a*b,1))
        
    }
    return(output)
};
productExceptSelf([1,2,3,4])
//[24,12,8,6]