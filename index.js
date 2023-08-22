"use strict";
console.log('hej');
// console.log('testar')
function combineStrings(a, b) {
    return a + b;
}
const result = combineStrings('hello ', 'world');
console.log(result);
function combineHtmlStrings(a, b) {
    return a + b;
}
const htmlresult = combineHtmlStrings('hello ', 'world');
const outputElement = document.getElementById('output');
if (outputElement) {
    outputElement.textContent = result;
}
