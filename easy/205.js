var isIsomorphic = function(s, t) {

  const sMap = {}
  const tMap = {}
  
  for (let i = 0 ; i < s.length ; i++){
    if(sMap[s[i]]){
      if(sMap[s[i]]!==t[i]){
        return false
      }
    } 
    else{
      sMap[s[i]]=t[i]
    }
    if(tMap[t[i]]){
      if(tMap[t[i]]!==s[i]){
        return false
      } 
    }
    else{
      tMap[t[i]]=s[i]
    }
  }
  console.log(true)
  return true
};
isIsomorphic("foo","bar")