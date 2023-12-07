function isJavaScriptFile(text){
    if(text.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}

const Text = 'app.js';
const Text2 = 'app.png';
const Text3 = 'app.js';

console.log(isJavaScriptFile(Text));
console.log(isJavaScriptFile(Text2));
console.log(isJavaScriptFile(Text3));
