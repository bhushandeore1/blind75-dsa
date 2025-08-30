function palindromeString(string) {
    const output = string.toLowerCase().split('');
    const mid = Math.floor(output.length / 2);

    const firstpart = output.slice(0, mid); 
    const secondpart = output.slice(output.length % 2 === 0 ? mid : mid + 1);

    const reverseSecondPart = [];
    for (let i = secondpart.length - 1; i >= 0; i--) {
        reverseSecondPart.push(secondpart[i]);
    }

    return firstpart.join('') === reverseSecondPart.join('');
}
const palindrome=palindromeString("madam"); //true
console.log(palindrome);