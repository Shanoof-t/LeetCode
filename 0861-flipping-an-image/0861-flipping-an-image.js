/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let newArr=[]
    for(i=0;i<image.length;i++){
        let revArr=[]
        for(j=image[i].length-1;j>=0;j--){
            let val=Math.abs(image[i][j]-1)
            revArr.push(val)
        }
        newArr.push(revArr)
    }
    return newArr
};