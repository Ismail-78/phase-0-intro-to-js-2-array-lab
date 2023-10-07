// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield',);

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

//destructivelyAppendCat();
//console.log(cats);

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

//destructivelyPrependCat();
//console.log(cats);

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat (name) {
    cats.pop();
}
//destructivelyRemoveLastCat();
//console.log(cats);

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat (name) {
    cats.shift();
}
//destructivelyRemoveFirstCat();
//console.log(cats);

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat (name) {
    let copyCat=['Milo', 'Otis', 'Garfield', 'Broom'];
    return copyCat;
}

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat (name) {
    let prepEnd=['Arnold', 'Milo', 'Otis', 'Garfield',];
    return prepEnd
}

function removeLastCat() {
    let removeLast=cats.slice(0,2);
    return removeLast
}

function removeFirstCat() {
    let removeFirst=cats.slice(1);
    return removeFirst;
}