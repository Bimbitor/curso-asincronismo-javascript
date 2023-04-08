const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {
            resolve("Asyyyynchronously")
        }, 2000)
        : reject(new Error("Error"))
    })
}


const anotherFn = async () => {
    const somethinig = await fnAsync()
    console.log(somethinig);
    console.log("Hello from here!");
    return await fnAsync()
}

console.log("Before");
anotherFn();
console.log("After");