/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let str=x.toString()
    let arr = str.split("")
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=Number(arr[i])
    }
    if(x%sum==0){
        return sum
    }else{
        return -1
    }
};