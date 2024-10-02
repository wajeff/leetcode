var myAtoi = function(s) {
  regex = new RegExp (/^[0-9]*$/)
  s=s.trim()
  negativeCount = 0
  if(s[0]==='-'){
    s=s.substring(1)
    negativeCount = 1
  }
  else if(s[0]==='+'){
    s=s.substring(1)
  }
  if(s[0]==='0'&&regex.test(s[1])){
    s=s.substring(1)
  }
  console.log(s)

  // s=s.split('')

  for(char in s){
    if(!regex.test(s[char])){
      s=s.substring(0,char)
    }
  }
  console.log(s)
  if(negativeCount){
    if(Number(-s) <-2147483648 ){
      console.log(s)
      return -2147483648 
    }
    return (Number(-s)) 
  }
  if(Number(s)>2147483648 ){
    return 2147483648 
  }
  console.log(s)
  return Number (s)
};
myAtoi("21474836460")