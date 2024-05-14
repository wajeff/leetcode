var mergeTwoLists = function(list1, list2) {
    output=[]
    for(index in list1){
        output.push(list1[index])
        output.push(list2[index])
    }
}
mergeTwoLists([1,2,4],[1,3,4])