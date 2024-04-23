var scoreOfString = function(s) {
    let count = 0
    for (let i = 0; i<s.length-1;i++){
        count+=Math.abs(s.charAt(i).charCodeAt(0)-s.charAt(i+1).charCodeAt(0))
    }
    return count
};