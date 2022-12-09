# `this` keyword

When you use `this` keyword in JavaScript, it automatically resolves to an object or scope depending upon the context at which it was defined.

## `this` context

`this` keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. 

```
function alert() { 
  console.log(this.name + ' is calling'); 
}

const name = 'Kingsley'; 
alert(); // Kingsley is calling
```
As you can see, name() is a standalone, unattached function, so it is bound to the global scope. As a result, the this.name reference resolves to the global variable const name = 'Kingsley'.

In strict mode, `this` keyword is set to undefined.

## `this` keyword in arrow functions:

```
var name = "Shivang";
const myObject = {
    name:"Chandler",
    weight: (num)=>{
        let tellMyWeight = ()=>{
            console.log(`The weight of ${this.name} rose by ${num}kgs`)
        }
        console.log(this)
        return tellMyWeight.bind(this)
    }
};

myObject.weight(10)();
```

```
//Output
The weight of Shivang rose by 10Kgs
```