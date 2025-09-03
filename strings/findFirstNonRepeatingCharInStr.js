function findFirstNonRepeatingCharInStr(str){
    const freq={};
    for(let char in str){
        freq[char]=(freq[char] ||0) +1;
    }
    const result=[];
    for(let [char,count] in Object.entries(freq)){
        if(count<2){
            result.push(char);
        }
    }
    return result.length >1 ? result[0] : -1;
}