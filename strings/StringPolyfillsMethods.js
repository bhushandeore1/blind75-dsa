if(!String.prototype.mySplit){
    String.prototype.mySplit=function(separator){
        
        const result=[];
        current=''
        function giveSplit(str){
            for(let i=0;i<str.length;i++){
                if(str[i] ===separator){
                    result.push(current);
                    current='';
                }else{  
                    current=current+str[i];
                }
            }
        }
    giveSplit(this)
    return  result;
    }
}

// Export the polyfill function for usage elsewhere if needed
export const mySplit = String.prototype.mySplit;