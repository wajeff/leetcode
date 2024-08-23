var isHappy = function(n) {

  while (String(n).length!=1){
    n = Array.from(String(n).split(''),Number);
    n = n.map((element)=>element**2);
    n = n.reduce((a,b)=>a+b,0);

  }
  if(n==1 || n==7){
    return true
  }
  else{

    return false
  }
};
isHappy(1111111)

/*var isHappy = function(n) {

  recursion = function(n){
    if (n == 1 || n== 7){

      return true
    }
    else if(String(n).length==1&& n!=1){

      return false
    }
  
    else{
      let array = Array.from(String(n).split(''),Number);
      array = array.map((element)=>element**2);
      n = array.reduce((a,b)=>a+b,0);
      return recursion(n);
    }
  }
  return(recursion(n))
  
}; */