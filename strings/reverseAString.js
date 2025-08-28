//Reverse a given string

function reverseString(string){
   const output= string.toLowerCase().split('');
   const array=[];
   for(let i=output.length-1;i>=0;i--){
    array.push(output[i]);
   }
   return array.join('');
   
}


reverseString("Bhushan");   //nahsuhb