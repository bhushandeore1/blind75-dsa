
function flattenedNestedArr(arr,depth){
    const result=[];
    arr.forEach(nums => {
        if(Array.isArray(nums) && depth >0){
            flattenedNestedArr(nums,depth-1);
        }else{
            result.push(nums);
        }
    });
    return result;
}


const nestedarr=[[1,3],[2,7,13,9],[12,10,[90,[2,9,4],10]],152]; ///[1,3,2,7,13,9,90,2,9,4,10,152];
