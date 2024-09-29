var findContentChildren = function(children, cookie) {
  cookie=cookie.sort((a,b)=>b-a)
  children=children.sort((a,b)=>b-a)
  cookie.filter((element)=>!element<children[children.length-1])

  cookieCount=0
  for(let i = 0; i < children.length ; i++){
    for(let j = 0; j < cookie.length ; j++){
      if(cookie[j]<children[i]){
        continue;
      }
      else if(cookie[j]>=children[i]){
        cookieCount++
        cookie.splice(cookie.indexOf(cookie[j]),1)
        break;
      }
    }
  }

  return(cookieCount)
};
findContentChildren([1,2,3],[1,1])