//Instead of using arrays, use str.subString(leftPointer,rightPointer) 

var longestPalindrome = function(str) {
    let palindromes = [];
    let leftPointer = 0;
    let rightPointer = 0;
    let currentString=''
    while(leftPointer<str.length && rightPointer<str.length){
        // console.log(str.substring(leftPointer,rightPointer))
        currentString.push(str.charAt(rightPointer))

        let currentStringReversed=currentString.substring(leftPointer,rightPointer)

        if(currentStringArrayReversed.join('')==currentStringArray.join('')){
            palindromes.push(currentStringArray.join(''))
        }
        rightPointer++
        if(rightPointer>=str.length){
            leftPointer++
            rightPointer=leftPointer
            currentStringArray=[]
        }
    }
    let output=palindromes.sort((a,b)=>b.length-a.length)
    return output[0]
};
longestPalindrome('cbbd') //=>'bab'
                // l
                // r