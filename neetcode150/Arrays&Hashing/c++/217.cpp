
#include <vector>
#include <iostream>
#include <set>

using namespace std;

/**
 * https://leetcode.com/problems/contains-duplicate/description/
 * 
 * Looped through input array and add each element to a Set. 
 * If an element wasn't added to the Set, then the array contains a duplicate
*/
bool containsDuplicate(std::vector<int> nums)
{
    std::set<int> new_nums;
    for (u_long i = 0; i < nums.size(); i++)
    {
        new_nums.insert(nums[i]);
        if (new_nums.size() != i + 1)
        {
            return true;
        }
    }
    return false;
}

int main()
{
    int myints[] = {0, 0};
    std::vector<int> nums(myints, myints + sizeof(myints) / sizeof(int));
    bool is_contains_duplicate = containsDuplicate(nums);
    cout << (is_contains_duplicate ? "Duplicate found" : "No duplicate found");
    return 0;
}
