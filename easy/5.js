var longestPalindrome = function(str) {
    let palindromes = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while(leftPointer<str.length){
        rightPointer=leftPointer
        let currentStringArray=[]
        while(rightPointer<str.length){
            currentStringArray.push(str.charAt(rightPointer))
            let reverseCurrentStringArray=[...currentStringArray].reverse()
            if(reverseCurrentStringArray.join('')==currentStringArray.join('')){

                palindromes.push(currentStringArray.join(''))
            }   
            rightPointer++
        }
        leftPointer++

    }
    let output=palindromes.sort((a,b)=>b.length-a.length)
    return output[0]
};
longestPalindrome('cbbd') //=>'bab'
                // l
                // r