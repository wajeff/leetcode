//Instead of using arrays, use str.subString(leftPointer,rightPointer) 

var longestPalindrome = function(str) {
    if (str.length==1){
        return str
    }
    let palindromes = [];
    let leftPointer = 0;
    let rightPointer = 0;
    let currentString=''
    while(leftPointer<str.length && rightPointer<str.length){
        currentString+=str.charAt(rightPointer)
        if(currentString.endsWith(currentString.charAt(0))){
            if(currentString.split('').reverse().join('')==currentString){
                palindromes.push(currentString)
            }
            
        }
        rightPointer++
        if(rightPointer>=str.length){
            leftPointer++
            rightPointer=leftPointer
            currentString=''
        }
    }
    let output=palindromes.sort((a,b)=>b.length-a.length)
    return output[0]
};
longestPalindrome('ac') //
                // l
                // r