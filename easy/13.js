var romanToInt = function(s) {
    const values = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000,
    }
    let output=0
    for ( let i = 0 ; i < s.length ; i++){
        if (values[s[i]]<values[s[i+1]]){
            output-=values[s[i]]
        }
        else{
            output+=values[s[i]]
        }
    }
    return(output)
};
romanToInt('MMMXLV')
