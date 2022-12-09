/** Currying in Javascript */

function Curry(c){
    return function(a){
        return function(b){
            return  c(a, b)
        }
    }
}

let summation = Curry(sum)(1)(2);

function sum (a, b){
    return a + b;
}

console.log(summation);