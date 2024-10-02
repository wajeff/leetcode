var reverse = function(x) {
  if(x<0){
    x=String(x).substring(1)
    x=String(x).split('').reverse().join('')
    if(Number(x)<-2147483648||Number(x)>2147483648 ){
      return 0
    }
    return(-x)
  }
  else{
    x=String(x).split('').reverse().join('')
    if(x[0]=='0'){
      x=x.substring(1)
    }
    if(Number(x)<-2147483648||Number(x)>2147483648 ){
      return 0
    }
    return Number(x)
  }
};
reverse(123)