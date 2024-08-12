var generate = function(numRows) {
  let output = [1]
  
  for (let i = 0 ; i < numRows; i ++){
      if(i==0){
          output.push([1,1])
      }
      else{
        console.log(i)
        
        currentArray = output[i]
        console.log(currentArray)
        currentArray.splice([Math.ceil(output[i].length/2)],0,output[i-1]+output[i])


        output.push(currentArray)
      }
      


  }
  
};
generate(5)