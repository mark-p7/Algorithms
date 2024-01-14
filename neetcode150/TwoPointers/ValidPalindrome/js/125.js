/**
 * https://leetcode.com/problems/valid-palindrome
 * 
 * Implemented 2 pointer approach
 * First strip any non-alphanumeric characters then convert every character to lowercase
 * Then check both the last and first character of the string and slowly shift the pointers inwards until we can validate that the string is a palindrome
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const middle = Math.floor(s.length / 2)
    for (let i = 0; i < middle; i++) if (s[i] != s[s.length - i - 1]) return false
    return true
};