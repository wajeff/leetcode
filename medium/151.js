var reverseWords = function(s) {
  let sReverse = s.trim().split(" ");
  let spacesRemoved = [...sReverse].filter((element)=>
    element!=''
  );
  return(spacesRemoved.reverse().join(' '));
};
reverseWords('a good   example')