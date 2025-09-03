function frequencyofCharInString(str){
    const freq={};
    for(let char of str){
        freq[char]=(freq[char] || 0) + 1;
    }

    return freq;
}

const testStr="abcdddab"
frequencyofCharInString(testStr);