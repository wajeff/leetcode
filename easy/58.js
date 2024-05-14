var lengthOfLastWord = function(s) {
    s=s.trim()
    return (s.length-1-s.lastIndexOf(' '))
};
lengthOfLastWord('   fly me   to   the moon  ')