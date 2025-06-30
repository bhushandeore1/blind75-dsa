//Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


//this is the bruteforce approach
function longestSubstringWithoutDuplicateCharactersBruteForce(string){
    let maxLength=0;
    for(let i=0;i<string.length;i++){
        for(let j=i+1;j<=string.length;j++){
            let substring=string.slice(i,j);
            const set=new Set(substring);
            if(set.size===substring.length){
                maxLength=Math.max(maxLength,substring.length)
            }
        }
    }
    return maxLength;
}