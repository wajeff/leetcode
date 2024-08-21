var addDigits = function(num) {
  // console.log(Math.floor(1/10))
  if(String(num).length==1){
    return num;
  } else{
    current = []
    while(num>=1){
      current.push(num%10)
      num=Math.floor(num/10)
    }
    current=current.reduce((a,b)=>a+b,0)
    num = current
    return addDigits(num)
  };
};
addDigits(101)

/*Previous Solution (Faster)
var addDigits = function(num) {

  if(String(num).length==1){

    return num;
  } else{

    num = num.toString().split('').map(Number)
    num = num.reduce((a,b)=>a+b,0)
    return addDigits(num)
  };
  

}; */