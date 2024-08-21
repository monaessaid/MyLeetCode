/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let a = m - 1;
    let b = n - 1;

    //Starting from the end of the nonzero values for both arrays
    for (let i = m+n-1; i >= 0; i--) {
        if (b < 0) {
            break;
        }

        if (nums1[a] > nums2[b]) {
            nums1[i] = nums1[a];
            a--;

        } else {
            //If the value in nums2 is greater than the value of nums1[i], switch the values  
            nums1[i] = nums2[b];
            b--;
        }
    }

}