var lengthOfLongestSubstring = function(str) {
    let longestLength = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    let set = new Set();

    while(rightPointer<str.length){
        let letter = str[rightPointer]
        if(!set.has(letter)){
            set.add(letter)
            longestLength=Math.max(set.size,longestLength)
            rightPointer++

        }
        else{
            set.delete(str[leftPointer])
            leftPointer++
        }   
    }
    return(longestLength)
    
};
lengthOfLongestSubstring('abcabcbb')