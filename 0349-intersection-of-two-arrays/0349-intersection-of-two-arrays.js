/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set()
    for(let num of nums2){
        if(set1.has(num)){
            set2.add(num)
        }
    }
    
    return Array.from(set2)
};