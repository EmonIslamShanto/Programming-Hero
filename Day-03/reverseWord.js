function reverseWord(text){
    let reverseText = [];
    let word = text.split(' ');
    console.log(word);
    for(var i = word.length - 1; i >=0; i--){
        reverseText.push(word[i]);
    }
    reverseText = reverseText.join(' ');
    return reverseText;
}

const sentence = 'Emon Islam Shanto';
const reverseSentence = reverseWord(sentence);
console.log(reverseSentence);