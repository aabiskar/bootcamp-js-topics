/** Closures */

function init(){
    let name = 'Shivang'

    function displayName(){
        console.log(`My name is ${name}`)
    }

    return displayName
}

let giveMeName = init();

giveMeName()    


/** THEORY 
 * 
 * Here's what's happening in the above code:
 * 
 * 
 * A closure is a combination of a function and its lexical enviroment where the function was created.
 * The instance of displayName() is created when the init() is run. The function displayName() maintains
 * a reference to its lexial environment, within which the variable 'name' exists. Hence, for the same reason,
 * when the function giveMeName() is invoked, the function displayName() the variable 'name' remains available 
 * for use and the value 'Shivang' is passed to the alert() function.
 * 
*/


/** NOTE:
 * 
 * The inner function is ALWAYS HOISED to the upper scope.
 */

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