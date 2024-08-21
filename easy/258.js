var addDigits = function(num) {

  if(String(num).length==1){

    return num;
  } else{

    num = num.toString().split('').map(Number)
    num = num.reduce((a,b)=>a+b,0)
    return addDigits(num)
  };
  
  
};
addDigits(101)