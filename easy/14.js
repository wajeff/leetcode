var longestCommonPrefix = function(strs) {
  if(strs.length==1){
    return (strs[0])
  }
  if(strs.includes("")){
    return ("")
  }
  const shortest = strs.sort((a,b)=>(a.length - b.length))
  
  let prefix = shortest[0].charAt(0)
  for(let i = 1 ; i < strs[0].length ; i++){
    if(!(strs.every(s=>s.startsWith(prefix)))){
      prefix = prefix.substring(0,prefix.length-1)
      return prefix
    }
    else{
      prefix+=strs[0].charAt(i)
    }
  }
  console.log(prefix)
  
};
longestCommonPrefix(["ab","a"])