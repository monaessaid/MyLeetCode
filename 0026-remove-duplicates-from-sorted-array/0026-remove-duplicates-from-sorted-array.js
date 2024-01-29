/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        //j tracks unique values
        let j = 1;
        //Loops through the array. nums.length -2 because j starts at 1 and j++ on line 12
        for (let i =0; i<= nums.length-2; i++) {
            //If nums[i+1] is a unique value, then it replaces nums[j] and j increments
            if(nums[i] !== nums[i+1]){
                nums[j] = nums[i+1];
                j++;
            }
        }
        //j will be the last unique value
        return j;
};