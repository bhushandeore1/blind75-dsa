//find duplicates in array or length of the duplicates 

function findduplicates(nums){
     const numSet=new Set();
     const duplicates=new Set();
     for(let num of nums){
          if(numSet.has(num)){
               duplicates.add(num);
          }else{
               numSet.add(num)
          }
     }
     return [...duplicates];
}

findduplicates([1,1,3,4,4,3]);



