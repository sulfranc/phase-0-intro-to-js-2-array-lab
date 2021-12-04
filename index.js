// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
     var copyOfcats = [...cats,name];
     return copyOfcats
}

function prependCat(name){
    var copyOfcats = [name,...cats];
    return copyOfcats
}

function removeLastCat(){
    var copyOfcats = cats.slice(0,cats.length-1);
    return copyOfcats
}

function removeFirstCat(){
    var copyOfcats =cats.slice(1);

    return copyOfcats
}

