console.log(logSomething())
console.log("value of x when uninitialized: ",x)

var x = 7;

function logSomething() {
    console.log("value of y when uninitialized: ",y)
    var y = 8
    console.log("value of y when initialized: ",y)
    console.log("Something logged!")
}

console.log("value of x when initialized: ", x)

/** Hoisting of an arrow function */
console.log("value of someArrowFn when uninitialized: ",someArrowFn)

console.log(someArrowFn())

var someArrowFn = () => {
    console.log("Something logged!")
}

/** This will give a reference error since the interpretter couldn't find the value of z */
// console.log(z)