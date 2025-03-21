/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    // let count = 0
    // for (i = 0; i < nums.length; i++) {
    //     for (j = i + 1; j < nums.length; j++) {
    //         if (nums[i] == nums[j] && i < j) {
    //             count++
    //         }
    //     }
    // }

    // return count
    let count = 0
    let map = {}
    for (x of nums) {
        if (map[x]) {
            count += map[x]
            map[x] += 1
        } else {
            map[x] = 1
        }
    }
    return count
};