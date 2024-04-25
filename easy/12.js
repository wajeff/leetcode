var intToRoman = function(num) {
    let output=[]
    
    let splitNum = String(num).split('').map((num)=>{
        return Number(num)
    })
    while(splitNum.length<4){
        splitNum.unshift(0)
    }

    while(splitNum[0]>0){
        output.push('M')
        splitNum[0]=splitNum[0]-1
    }
    while(splitNum[1]>0){
        if(splitNum[1]==4){
            output.push('CD')
            splitNum[1]=0
        }
        else if(splitNum[1]==9){
            output.push('CM')
            splitNum[1]=0
        }
        else if(splitNum[1]>=5){
            output.push('D')
            splitNum[1]=splitNum[1]-5
        }
        else{
            output.push('C')
            splitNum[1]=splitNum[1]-1
        }
    }
    while(splitNum[2]>0){
        if(splitNum[2]==4){
            output.push('XL')
            splitNum[2]=0
        }
        else if(splitNum[2]==9){
            output.push('XC')
            splitNum[2]=0
        }
        else if(splitNum[2]>=5){
            output.push('L')
            splitNum[2]=splitNum[2]-5
        }
        else{
            output.push('X')
            splitNum[2]=splitNum[2]-1
        }
    }
    while(splitNum[3]>0){
        if(splitNum[3]==4){
            output.push('IV')
            splitNum[3]=0
        }
        else if(splitNum[3]==9){
            output.push('IX')
            splitNum[3]=0
        }
        else if(splitNum[3]>=5){
            output.push('V')
            splitNum[3]=splitNum[3]-5
        }
        else{
            output.push('I')
            splitNum[3]=splitNum[3]-1
        }
    }
    return(output.join(''))

};
intToRoman(3) //num <=3999