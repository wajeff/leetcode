//Instead of using arrays, use str.subString(leftPointer,rightPointer) 

var longestPalindrome = function(str) {
    let palindromes = [];
    let leftPointer = 0;
    let rightPointer = 0;
    let currentString=''
    while(leftPointer<str.length && rightPointer<str.length){
        currentString+=str.charAt(rightPointer)

        let currentStringReversed=currentString.split('').reverse().join('')
        if(currentStringReversed==currentString){
            // console.log(currentString)
            palindromes.push(currentString)
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
longestPalindrome('cbbd') //=>'bab'
                // l
                // r