var countBits = function(n) {
  let ans = [];
  for(let i = 0; i <= n; i++){
    ans.push(i.toString(2).replaceAll('0','').length);
  };
  return(ans);
  
};
countBits(5);