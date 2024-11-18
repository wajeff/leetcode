var countBits = function(n) {
  let ans = [];
  for(let i = 0; i <= n; i++){
    ans.push(i.toString(2).split('').filter((element)=>element!=='0').join('').length);
  };
  return(ans);
  
};
countBits(2);