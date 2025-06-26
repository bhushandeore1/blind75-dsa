// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


//first approach by using loops
function twoSum(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i<j &&  nums[i] + nums[j] == target) {
        output.push(i, j);
      }
    }
  }
  return output;
}

//optimised solution using Map
function twoSum(nums, target) {
  const map=new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement=target-nums[i];
    if(map.has(complement)){
        return [map.get(complement),i];
    }

    map.set(nums[i],i);
  }
  
}





twoSum([2,7,11,15],9);
console.log("data");
