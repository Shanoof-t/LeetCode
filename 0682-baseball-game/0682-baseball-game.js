/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr =[]
    for(i=0;i<operations.length;i++){
        if(operations[i] == "+"){
            let val1=arr[arr.length-1]
            let val2=arr[arr.length-2]
            arr.push(val1+val2)
        }else if(operations[i] == "C"){
            arr.pop()
        }else if(operations[i] == "D"){
            let val=arr[arr.length-1]
            arr.push(val*2)
        }else{
            arr.push(Number(operations[i]))
        }
    }
    let result=0
    for(i=0;i<arr.length;i++){
        result+=arr[i]
    }
    return result
};