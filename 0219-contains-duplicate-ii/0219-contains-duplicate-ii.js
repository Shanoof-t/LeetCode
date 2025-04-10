/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const hashTable = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashTable.hasOwnProperty(nums[i]) && i - hashTable[nums[i]] <= k) {
            return true
        }
        hashTable[nums[i]] = i
    }
    return false
};