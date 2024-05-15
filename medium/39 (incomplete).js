var combinationSum = function(candidates, target) {
    let left = 0
    let right = 0
    let currentArray=[]
    let output=[]
    while(candidates[left]<target){
        if(left==0){
            currentArray.push(candidates[left])
        }
        else if(candidates[left]+candidates[right]<target){
            currentArray.push(candidates[right])
        }
        else if(candidates[left]+candidates[right]>target){
            currentArray.pop()

        }
        else if(candidates[left]+candidates[right]==target){
            output.push(currentArray)
            currentArray.pop()
        }
        console.log('hi')
        left++
    }
};
combinationSum([2,3,4,5],8)
//2
//2,2
//2,2,2
//2,2,2,2

//2,2,2


