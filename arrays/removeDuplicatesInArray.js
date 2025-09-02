

function removeDuplicatesInArrays(arr){
    //we can use simply set if we allowed to use in the interview
    // return [...new Set(arr)];

    //most of the times we are not allowed to use set then we can use hashmap for this

    const seen={};
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            seen[arr[i]]=true;
            result.push(arr[i]);
        }
    }
    return result;
}

const result=removeDuplicatesInArrays([21,4,2,4,4,21,5,7]);  //[21,4,2,5,7]