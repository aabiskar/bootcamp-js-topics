function multiply(a, b){
    console.log(a * b)
}

let multiplyByTwo = multiply.bind(this, 2)
/** multiplyByTwo will be a function now because we used bind keyword */
multiplyByTwo(3)