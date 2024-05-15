var romanToInt = function(s) {
    const values = new Map([
       ['I', 1],
       ['V', 5],
       ['X', 10],
       ['L', 50],
       ['C', 100],
       ['D', 500],
       ['M', 1000],
    ])
    let output=0
    for ( let i = 0 ; i < s.length ; i++){
        if (values.get(s[i])<(values.get(s[i+1]))){
            output-=values.get(s[i])
        }
        else{
            output+=values.get(s[i])
        }
    }
    return(output)
};
romanToInt('MMMXLV')
