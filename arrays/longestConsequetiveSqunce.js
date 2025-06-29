// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


//approach 1 
//this is bruteforce approach as it is taking time complexity as 0(n2) and also it is exceeding time limit
function longestConsecutiveBruteForce(nums) {
    let maxLength=0;
    for(let i=0;i<nums.length;i++){
        let currentNum=nums[i];
        let currentStreak=1;
        while(nums.includes(currentNum+1)){
            currentNum+=1;
            currentStreak+=1;
        }
        maxLength=Math.max(maxLength,currentStreak);
    }
    return maxLength;
}

//approach 2
//we can use of sets for that

function longestConsecutiveoptimesed(nums){
    let maxLength=0;
    let numSet=new Set(nums);
    for(let num of numSet){
        if(!numSet.has(num-1)){
            let currentNum=num;
            let currentStreak=1;
            while(numSet.has(currentNum +1)){
                currentNum+=1;
                currentStreak+=1;
            }
            maxLength=Math.max(maxLength,currentStreak);
        }

    }
    return maxLength;
}