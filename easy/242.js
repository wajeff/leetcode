var isAnagram = function(s, t){
    let initialString = s
    if(s.length!=t.length){
        return false
    }
    for(let i = 0; i < initialString.length ; i++){
        console.log(s.replace(t[i],''))
        if(s.includes(t[i])){
            s=s.replace(t[i],'')
        }
    }
    if(s.length==0){
        return true
    }
    else{
        return false
    }
};
isAnagram('rat','car')