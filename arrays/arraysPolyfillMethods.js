//join method

if(!Array.prototype.myJoin){
    Array.prototype.myJoin=function(joiner){
        let res="";
        function giveMyJoin(arr,joiner){
            for(let i=0;i<arr.length;i++){
                res=res+ joiner +arr[i];
            }
        }
        giveMyJoin(this,joiner);
        return res;
    }
}

export const myJoin=Array.prototype.myJoin;