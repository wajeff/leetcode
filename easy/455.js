var findContentChildren = function(children, cookies) {

  children = children.sort((a,b)=>a-b)
  cookies = cookies.sort((a,b)=>a-b)

  let topPointer = 0
  let bottomPointer = 0
  let cookieCounter = 0

  while (bottomPointer<cookies.length){
    if(children[topPointer]<=cookies[bottomPointer]){
      cookieCounter++
      topPointer++
      bottomPointer++
    }
    else{
      bottomPointer++
    }
  }

  return(cookieCounter)
};
findContentChildren(
  [250,490,328,149,495,325,314,360,333,418,430,458],
[
   1,  1,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,
   2,  2,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4,
   4,  4,  4,  4,  4,  4,  5,  5,  5,  5,  5,  5,
   5,  5,  5,  6,  6,  6,  6,  7,  7,  8,  8,  8,
   8,  8,  9,  9,  9,  9,  9,  9,  9, 10, 10, 10,
  10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12,
  13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14,
  14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15,
  16, 16, 16, 16]
)