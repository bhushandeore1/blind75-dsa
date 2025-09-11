//find longest word in sentence
const sentence="Hi this is javascript";

function findLongestWordInSentence(sentence){
    const arrSentence=sentence.split(' ');
    let max= -Infinity
    let word;
    for(let i=0;i<arrSentence.length;i++){
      if(arrSentence[i].length > max){
        max=arrSentence[i].length;
        word=arrSentence[i]
      }
    }
    return word;
}

findLongestWordInSentence(sentence);