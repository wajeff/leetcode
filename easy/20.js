/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for( charc of s){
    if(charc==='['||charc==='('||charc==='{'){
      stack.push(charc);
    }
    else{
      if(stack.length===0) return false;
      let pop = stack.pop();
      if(!(pop==='('&&charc===')') &&
        (!(pop==='['&&charc===']')) &&
        (!(pop==='{'&&charc==='}'))){
        return false;
      };
    };
  };
  if(stack.length!=0){
    return false;
  };
  return true;
 };
