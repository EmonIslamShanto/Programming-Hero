function reverseString(text){
    let reverseText = '';
    for(var i = text.length - 1; i >=0; i--){
        reverseText = reverseText + text[i];
    }
    return reverseText;
}

const sentence = 'Emon Islam Shanto';
const reverseSentence = reverseString(sentence);
console.log(reverseSentence);