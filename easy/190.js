var reverseBits = function(n) {
  let reverseN = n.toString(2).split('').reverse().join('').padEnd(32,0)
  return(parseInt(reverseN,2))

};
reverseBits('00000010100101000001111010011100')