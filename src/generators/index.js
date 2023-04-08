function* sum (){
    yield 1;
    yield 2;
    yield 3;
}

const suma = sum();
console.log(suma.next())
console.log(suma.next())
console.log(suma.next())
console.log(suma.next())


function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
