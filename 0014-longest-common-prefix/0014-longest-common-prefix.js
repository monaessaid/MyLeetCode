/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //If the array is empty, return 0
    if (strs.length == 0) return "";

    //Loops through the first string in the array's letters
    for (let i = 0; i <= strs[0].length; i++) {
        //Loops through the other words in the strs array
        for (let j = 1; j < strs.length; j++) {
            //Checks that the characters in the first word match the ones in the others
            if (strs[0][i] !== strs[j][i]) {
                //Returns a string that only includes the characters that match
                return strs[0].slice(0,i);
            }
        }
    }
    //If there are no mismatches, returns the entire first string
    return strs[0];
};