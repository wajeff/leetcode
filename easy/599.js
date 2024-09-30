var findRestaurant = function(list1, list2) {
  commonList = list1.filter((element)=>list2.includes(element))
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
  return result
};
findRestaurant(["Shogun","Piatti","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])