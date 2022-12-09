# Closure
A closure is a combination of a function and its lexical environment where the function was created.

In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
```
function init(){
    let name = 'Shivang'

    function displayName(){
        console.log(`My name is ${name}`)
    }

    return displayName
}

let giveMeName = init();

giveMeName()
```

The instance of displayName() is created when the init() is run. The function displayName() maintains a reference to its lexial environment, within which the variable 'name' exists. 

Hence, for the same reason, when the function giveMeName() is invoked, the function displayName() the variable 'name' remains available for use and the value 'Shivang' is passed to the alert() function.

## Example

```
function calculator(x){
    
    let i = 0;

    function add(y){
        console.log(`The sum is ${x+y}`)
        i++
    }

    function subtract(y){
        console.log(`The difference is ${x-y}`)
        i++
    }

    function noOfOperationsConducted(){
        console.log(`The no. of operations conducted is ${i}`);
    }
    return {add, subtract, noOfOperationsConducted}
}

let addition = calculator(6);
addition.add(5);
addition.noOfOperationsConducted() //=> 1

let subtract = calculator(1868)
subtract.subtract(767);
subtract.add(8878)

subtract.noOfOperationsConducted() //=> 2
```