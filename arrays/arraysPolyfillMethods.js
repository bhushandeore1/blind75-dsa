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



//Implement Array.prototype.concat
if(!Array.prototype.myConcat){
    Array.prototype.myConcat=function(arr){
        const newArr=[...this];
        function myConcatImpl(arr){
            for(let i=0;i<arr.length;i++){
                if(Array.isArray(arr[i])){
                    newArr.push(...arr[i]);
                }else{
                    newArr.push(arr[i])
                }
            }
        }
        myConcatImpl(arr);
        return newArr;  
    }
}


//this is for fill method
 if(!Array.prototype.myFill){
  Array.prototype.myFill=function(value,start,end){

    function implementFill(arr,value,start,end){
      start=start || 0;
      end= end || arr.length;
      start=Number(start);
      end=Number(end);
      for(let i=start;i<end;i++){
        arr[i]=value;
      }
      return arr; 
    }
    implementFill(this,value,start,end); 
  }
 }

 const fillArr=[1,2,3,5,7,8];
 fillArr.myFill(4);
 console.log(fillArr);