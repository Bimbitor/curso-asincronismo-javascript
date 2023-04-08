function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}


calc(1,5,sum)
console.log("🚀 ~ file: index.js:10 ~ calc(1,5,sum):", calc(1,5,sum))



setTimeout(function() {
    console.log(`Hola JavaScript`)
}, 5000);

function gretting(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(gretting, 2000, `Oscar`)


