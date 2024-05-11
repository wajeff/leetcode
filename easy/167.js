var twoSum = function(numbers, target) {

    for(let i = 0 ; i < numbers.length ; i++){
        let valueToFind = target - numbers[i]
        if(numbers.indexOf(valueToFind)!=-1&&numbers.indexOf(valueToFind)!=i){
            return([i+1,numbers.indexOf(valueToFind)+1].sort((a,b)=>a-b))
        }
    }

};