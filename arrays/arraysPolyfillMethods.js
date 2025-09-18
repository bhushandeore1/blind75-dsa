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



 //custom Implement Array.filter() polyfill
 if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(callBackFunction){
        const newArr=[];//filter method create new array
        for(let i=0;i<this.length;i++){   //this means the array on which we are applying the filter
            if(callBackFunction(this[i])){
                newArr.push(this[i])
            }
        }
        return newArr;
    }
 }

 const filterArr=[1,2,3,4,5,6,7,8];
 const filteredArr=filterArr.myFilter((num)=>num%2===0); 
 console.log(filteredArr);  //[2,4,6,8]



  //implement array.prototype.find()
 if(!Array.prototype.myFind){
    Array.prototype.myFind=function(callbackfunction){
      if(this ===null || this===undefined){
        return new TypeError("cannot use find method on null or undefined");
      }
      if (typeof callbackfunction !== "function") {
        throw new TypeError("callbackfunction must be a function");
      }
      for(let i=0;i<this.length;i++){
        if(callbackfunction(this[i])){
          return this[i];
        }
      }
    }
 }

 const findArr=[1,2,3,4,6];
 const found=findArr.myFind(num=>num%2===0);
 const found1=[].find(num=>num%2===0);
 const found2=[].myFind(num=>num%2===0)
 console.log(found,found1,found2)



  //implement Array.prototype.flatMap
 if(!Array.prototype.myFlatMap){
    Array.prototype.myFlatMap=function(callbackfunction){
      const newArr=[];
      for(let i=0;i<this.length;i++){
        if(Array.isArray(callbackfunction(this[i]))){
          newArr.push(...callbackfunction(this[i]));
        }else{
          newArr.push(callbackfunction(this[i]))
        }
         
      }
      return newArr;
    }
 }

 const flatMapArr=[1,2,4];
 const myFlatMapArr=flatMapArr.myFlatMap((num)=>[num*2]);
 console.log(myFlatMapArr);


 //Implement Array.prototype.forEach in js 
 if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(callBackFunction){
        for(let i=0;i<this.length;i++){
            callBackFunction(this[i]);
        }
    }
 }



//implement Array.prototype.myIncludes
if(!Array.prototype.myIncludes){
  Array.prototype.myIncludes=function(valueToFind,fromIndex){
    fromIndex=fromIndex || 0;
    let i;
    for(fromIndex >0 ?i=fromIndex :i=0;i<this.length;i++){
      if(this[i]===valueToFind){
        return true;
      }
    }
    return false;
  }
}

const includesArr=[1,3,5,7,8];
const testIncludesArr=includesArr.myIncludes(1,2); //should return false
console.log(testIncludesArr);


//Implement Array.prototype.myMap
if(!Array.prototype.myMap){
  Array.prototype.myMap=function(callBackFunction){
    const newArr=[];
    for(let i=0;i<this.length;i++){
      newArr.push(callBackFunction(this[i]));
    }
    return newArr;
  }
} 

const testMyMap=includesArr.myMap((num)=>num*2); //should return [2,6,10,14,16]


//Implement Array.prototype.myReduce
if(!Array.prototype.myReduce){
  Array.prototype.myReduce=function(callBackFunction,initialValue){
    if(typeof callBackFunction !=="function"){
      throw TypeError("not a function");
    }
    let accumulator;
    let startIndex;
    if(initialValue !==undefined){
      accumulator=initialValue;
      startIndex=1;
    }else{
      accumulator=this[0];
      startIndex=0
    }
    for(let i=0;i<this.length;i++){
      accumulator=callBackFunction(accumulator,this[i]);
    }
    return accumulator;
  }
}
const reduceArr=[1,2,3,4];
const testMyReduce=reduceArr.myReduce((acc,curr)=>acc+curr,0);
console.log(testMyReduce);  //should return 10


//implement Array.prototype.reverse
if(!Array.prototype.myReverse){
  Array.prototype.myReverse=function(){
    const mid=Math.floor(this.length/2);
    for(let i=0;i<mid.length;i++){
      let temp=this[i];
      this[i]=this[this.length-1-i];
      this[this.length-1-i]=temp;
    }
    return this;
  }
}
const revArr=[1,2,3,4];
console.log(revArr.myReverse()); //should return [4,3,2,1];