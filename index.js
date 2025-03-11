// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);

}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const kitten = [...cats];
    kitten.push(name);
    return kitten;
}

function prependCat(name){
    const kitten = [...cats];
    kitten.unshift(name);
    return kitten;
}
function removeLastCat(){
   const  kitten = [...cats];
   kitten.pop(name);
   return kitten;
}
function removeFirstCat(){
    const  kitten = [...cats];
    kitten.shift(name);
    return kitten;
 }