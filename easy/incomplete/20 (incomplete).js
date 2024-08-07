/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let openBracket = 0
  let closedBracket = 0
  let openCurlyBracket = 0
  let closedCurlyBracket = 0
  let openSquareBracket = 0
  let closedSquareBracket = 0
  for ( let i = 0 ; i < s.length ; i ++ ){
    if(s[i]=="("){
      openBracket++
    }
    if(s[i]==")"){
      closedBracket++
    }
    if(s[i]=="{"){
      openCurlyBracket++
    }
    if(s[i]=="}"){
      closedCurlyBracket++
    }
    if(s[i]=="["){
      openSquareBracket++
    }
    if(s[i]=="]"){
      closedSquareBracket++
    }
  }
  if(openBracket!==closedBracket){
    return false
  }
  if(openCurlyBracket!==closedCurlyBracket){
    return false
  }
  if(openSquareBracket!==closedSquareBracket){
    return false
  }
};

isValid("()[]{}")