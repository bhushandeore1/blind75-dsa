import { mySplit } from './StringPolyfillsMethods.js'
import { myJoin } from '../arrays/arraysPolyfillMethods.js';

function capitalizeFirstLetterOfEachWord(sentence){
    const result=[]
    const arr=sentence.mySplit(' ');
    arr.forEach(el=>{
        result.push(el.slice(0,1).toUpperCase().concat(el.slice(1)))
    })
    return result.myJoin(' ')
}

const sentence="Hi this is javascript"  //Hi This Is Javascript
capitalizeFirstLetterOfEachWord(sentence);