
//find 2nd largest in array
//this method is with sorting
function find2ndLargestInArray(arr){
    const sorted=sortArr(arr);
    return sorted[sorted.length-2];
}


function sortArr(arr){
    if(arr.length<=1){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const left=sortArr(arr.slice(0,mid));
    const right=sortArr(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    const result=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i] <right[j]){
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}



//without sorting
function find2ndLargestInArray1(arr){
    if(arr.length <2){
        return null;
    }
    let first=-Infinity;
    let second=-Infinity;
    for(let num in arr){
        if(num>first){
            second=first;
            first=num;
        }else if(num> second && num<first){
            second=num;
        }
    }
    return second ===-Infinity ?null :second;
}