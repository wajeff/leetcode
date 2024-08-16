var isPalindrome = function(s) {
  if(s.length == 1){
    return true
  }
  const regex = /[^a-zA-Z0-9]/g
  const clean = s.replace(regex, '').toLowerCase();
  // console.log(clean)

    let left = 0
    let right = clean.length-1

    while(left<right){
      if(clean[left]===clean[right]){
        left++
        right--
      }else{
        // console.log(false)
        return false;
      }
    }
    return(true);
};
isPalindrome("A man, a plan, a canal: Panama")