/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for( let i = 0 ; i < s.length ; i++){
    if(s[i]==='['||s[i]==='('||s[i]==='{'){
      stack.push(s[i]);
    }
    else{
      if(stack.length===0) return false;
      let pop = stack.pop();
      if(!(pop==='('&&s[i]===')')&&!(pop==='['&&s[i]===']')&&!(pop==='{'&&s[i]==='}')){
        return false;
      };
    };
  };
  if(stack.length!=0){
    return false;
  };
  return true;
 };
