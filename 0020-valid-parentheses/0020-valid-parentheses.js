/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //While the string still contains valid bracket pairs
    while (
        s.indexOf('()') !== -1 ||
        s.indexOf('{}') !== -1 ||
        s.indexOf ('[]') !== -1
    ) {
        //Removes all instances of matching brackets
        s = s
        .replace('()', '')
        .replace('{}', '')
        .replace('[]', '')
    }
    //Only unmatched brackets remain
    return !s.length;
};