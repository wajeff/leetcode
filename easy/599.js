var findRestaurant = function(list1, list2) {
  indexes=[]
  commonList=[]
  map = new Map()
  for(word of list1){
    if(list2.includes(word)){
      map.set(word,list1.indexOf(word)+list2.indexOf(word))
    }
  }
  const mapSort = new Map([...map.entries()].sort((a, b) => a[1] - b[1]))
  
  minimumIndex = mapSort.entries().next().value[1]
  result = []
  for( pair of mapSort){
    if(pair[1]==minimumIndex){
      result.push(pair[0])
    }
  }
  return(result)
};
findRestaurant(["Shogun","Piatti","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])

/* commonList = list1.filter((element)=>list2.includes(element))
  indexes=[]
  for(word of commonList){
    indexes.push(list1.indexOf(word)+list2.indexOf(word))
  }
  indexes=indexes.sort((a,b)=>a-b)
  minimumIndex=indexes[0]
  result = []
  for(word of commonList){
    if(list1.indexOf(word)+list2.indexOf(word)==minimumIndex){
      result.push(word)
    }
  }
  console.log(result)
  return result */