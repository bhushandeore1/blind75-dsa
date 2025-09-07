
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

flattenedNestedArr(nestedarr,3)


//implement arr.flat.polyfill

if(!Array.prototype.myFlat){
    Array.prototype.myFlat=function(depth=1){

        const result=[];

        function flattenArr(arr,depth){
            arr.forEach(num=>{
                if(Array.isArray(arr) && depth>1){
                    flattenArr(num,depth-1);
                }else{
                    result.push(num);
                }
            })
        }
        flattenArr(this,depth);
        return result;
    }
}

const res=nestedarr.myFlat();