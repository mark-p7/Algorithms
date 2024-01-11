#include <vector>
#include <iostream>
#include <set>
#include <cctype>
#include <functional>

using namespace std;

/**
 * https://leetcode.com/problems/valid-palindrome/description/
 * 
 * Stripped any non-alpha characters first
 * Then used a double pointer to check from both sides of the string if characters match
 * If 2 characters don't match, then the string is not a palindrome.
*/
bool isPalindrome(string s)
{
    s.erase(std::remove_if(s.begin(), s.end(), std::not1(std::ptr_fun( (int(*)(int))std::isalnum ))), s.end());

    int stringSize = s.size();
    for (int i = 0; i < stringSize / 2; i++)
    {
        if (std::tolower(s[i]) != std::tolower(s[stringSize - i - 1]))
        {
            return false;
        }
    }
    return true;
}

int main()
{
    bool is_contains_palindrome = isPalindrome("A man, a plan, a canal: Panama");
    cout << (is_contains_palindrome ? "Palindrome found" : "No palindrome found");
    return 0;
}