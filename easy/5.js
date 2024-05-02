//Instead of using arrays, use str.subString(leftPointer,rightPointer) 

var longestPalindrome = function(str) {
    let leftLetter=0
    let rightLetter=0
    let palindromes=[]
    if(str.length==1){
        return str
    }
    while(leftLetter<str.length){
        currentStr=str.slice(leftLetter,str.length-rightLetter)
        console.log(currentStr)
        if(currentStr.endsWith(currentStr.charAt(0))){
            if(currentStr.split('').reverse().join('')==currentStr){
                palindromes.push(currentStr)
            }
        }
        rightLetter++
        if(currentStr.length<=1){
            leftLetter++
            rightLetter=0
        }
    }
    console.log(palindromes)
    let output=palindromes.sort((a,b)=>b.length-a.length)
    return output[0]
};
longestPalindrome('abcdbbfcba') //
                // l
                // r