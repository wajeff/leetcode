var reverseStr = function(s, k) {
 //explanation
 //abcdefg => ab swapped
 //bacdefg => ef swapped
 //bacdfeg => last index "swapped", but no change
  const doubleK = 2*k;
  let result = ''
  while(s.length>=k){
    result += s.substring(0,k).split('').reverse().join('');
    result += s.substring(k,doubleK);
    s=s.substring(doubleK,s.length);
  }; 
  result += s.split('').reverse().join('');

  return(result);
};
reverseStr('abcdefg',2) // => 'bacdfeg'