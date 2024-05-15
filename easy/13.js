var romanToInt = function(s) {
    const values = new Map([
       ['I', 1],
       ['V', 5],
       ['X', 10],
       ['L', 50],
       ['C', 100],
       ['D', 500],
       ['M', 1000],
       ['CM', 900],
       ['CD', 400],
       ['XC',90],
       ['XL',40],
       ['IV',4],
       ['IX',9]
    ])
    let output=0

    let left = 0
    let right = 1

    while(left < s.length){

        let doubleLetters = s[left]+s[right]
     
        if(values.has((doubleLetters))){
            output+=(values.get(s[left] + s[right]))
            left+=2
            right=left+1
        }
        else if(values.has(s[left])){
            output+=(values.get(s[left]))
            left++
            right++
        }

    }
    return(output)
};
romanToInt('MMMXLV')
