/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.lastIndexOf('(')>s.lastIndexOf(')')){
        return false
    }
    if(s.lastIndexOf('{')>s.lastIndexOf('}')){
        return false
    }
    if(s.lastIndexOf('[')>s.lastIndexOf(']')){
        return false
    }
    return true
};