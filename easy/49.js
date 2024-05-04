var groupAnagrams = function(strs) {
    let output = new Map()
    function sortAlphabetically(word) {
        return word.split("")
                   .sort()
                   .join("");
    }
    let inputArray = strs.map((x)=>sortAlphabetically(x))
    //[ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
    for(index in strs){
        
        if(output[inputArray[index]]){
            output[inputArray[index]].push(strs[index])
        }
        else{
            output[inputArray[index]]=[strs[index]]
        }
    }
    let result =[]

    for(index in output){
        result.push(output[index])
    }
    console.log(result)

};  
groupAnagrams(["eat","tea","tan","ate","nat","bat"])