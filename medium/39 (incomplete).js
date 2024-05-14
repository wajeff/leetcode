var combinationSum = function(candidates, target) {
    let smallerNumbers = [...candidates].filter(x=>x<=target)
    console.log(smallerNumbers)
    let output = []
    let left = 0
    let right = 0
    let array = []
    let currentValue = smallerNumbers[left]+smallerNumbers[right]
    

    while (left < smallerNumbers.length){
        console.log(left)
        array.push(smallerNumbers[left])

        if(currentValue<target){
            currentValue+=smallerNumbers[right]
        }
        else if(currentValue===target){
            array.push(candidates[right])
            output.push(array)
            array=[]
            right++

        }
        else if(currentValue>target){
            
            right++
            array=[]
        }
        if(right>smallerNumbers.length){
            array=[]
            left++
            right=left

        }
    }
    if(smallerNumbers.indexOf(target)!=-1){
        output.push([target])
    }
    console.log(output)

};
combinationSum([2,3,5],8)