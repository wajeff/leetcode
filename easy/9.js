var isPalindrome = function(num) {
    num = num.toString()
    let numLength = num.length-1
    if(num[0]=='-'){
        return false
    }
    if(num.length%2==0){
        left = (Math.floor(numLength/2))
        right = left++
        while(num[left]){
            if(num[left]==num[right]){
                left--
                right++
            }
            else{
                return(false)
            }
        }
        return true
    }
    else if(num.length%2!=0){
        left =Math.floor(numLength/2);
        right = Math.floor(numLength/2);
        while(num[left]){
            if(num[left]==num[right]){
                left--
                right++
            }
            else{
                return false
            }
        }
        return true

    }
};