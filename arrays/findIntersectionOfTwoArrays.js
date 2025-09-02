function findIntersectionOfTwoArrays(arr1,arr2){
    const set=new Set(arr1);
    const result=[];
    for(let num of arr2){
        if(set.has(num)){
            result.add(arr2[num]);
        }
    }
    return result;
}

findIntersectionOfTwoArrays([2,4,6,8,10],[1,3,4,6,8]);  //[4,6,8]