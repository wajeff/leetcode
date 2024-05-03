var isAnagram = function(s, t){
    if(s.length!=t.length){
        return false
    }
    let sLetters={};
    for(char of s){
        if(!sLetters[char]){
            sLetters[char]=1
        }
        else{
            sLetters[char]+=1
        }
    }
    for(char of t){
        if(!sLetters[char]){
            return false
        }
        else{
            sLetters[char]-=1
        }
        if(sLetters[char]==0){
            delete sLetters[char]
        }
    }
    return true


};
isAnagram('rat','car')