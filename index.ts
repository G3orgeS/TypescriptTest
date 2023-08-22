console.log('hej')

// console.log('testar')

function combineStrings(a: string, b: string): string {
    return a + b
}
const result = combineStrings('hello ', 'world');
console.log(result)

function combineHtmlStrings(a: string, b: string): string{
    return a + b 
}

const htmlresult = combineHtmlStrings('hello ', 'world')

const outputElement = document.getElementById('output')

if(outputElement) {
    outputElement.textContent = result
}

