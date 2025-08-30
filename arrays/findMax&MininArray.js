//find max and min in array
const randomArr=[500,7,4,8,9,24];  //max=24 ,min=1

function findMaxAndMin(arr){
    let max=0;
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<=min){
            min=arr[i];
        }
    }
    console.log(min,max);
}

findMaxAndMin(randomArr);