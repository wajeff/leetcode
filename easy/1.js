var twoSum = function(nums, target) {    
    variableTarget=target
    variableNums=[...nums]
    output=[]
    console.log(nums.indexOf(target))
    nums.forEach((element,index)=> {
        variableTarget-=element
        variableNums[index]=null
        output.push(variableNums.indexOf(variableTarget))
        variableNums=[...nums]
        variableTarget=target
    });

    output=output.filter((element)=>element>-1)
    return(output)
};
twoSum([2,7,11,15],9)