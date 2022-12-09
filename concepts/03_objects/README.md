# Objects

In JavaScript, almost "everything" is an object.

1. Booleans can be objects (if defined with the `new` keyword)
2. Numbers can be objects (if defined with the `new` keyword)
3. Strings can be objects (if defined with the `new` keyword)
4. Dates are always objects
5. Maths are always objects
6. Regular expressions are always objects
7. Arrays are always objects
8. Functions are always objects
9. Objects are always objects

All JavaScript values, except primitives, are objects.

# Creating a JavaScript Object

With JavaScript, you can define and create your own objects. There are different ways to create new objects:

1. Create a single object, using an `object literal`.
2. Create a single object, with the keyword `new`.
3. Define an object constructor, and then create objects of the constructed type.
4. Create an object using `Object.create()`.

# Object Methods

## Object.create()
The `Object.create()` method is used to create a new object and link it to the prototype of an existing object.

``` 
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
```

## Object.keys()
`Object.keys()` creates an array containing the keys of an object.

```
// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);
```
As `Object.keys()` converts your object’s keys into an array of keys, the forEach() array method can be used to iterate through the keys and values.

```
// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});
```

```
//Output

boss: Michael
secretary: Pam
sales: Jim
accountant: Oscar

```
## Object.values()
`Object.values()` creates an array containing the values of an object.

## Object.entires()
`Object.entries()` creates a nested array of the key/value pairs of an object.

```
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
```
```
//Output
[
    ["name", "Ubuntu"]
    ["version", 18.04]
    ["license", "Open Source"]
]
```

## Object.assign()
`Object.assign()` is used to copy values from one object to another. We can create two objects, and merge them with `Object.assign()`.

```
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);
```
```
//Output

{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
```
## Object.freeze()
`Object.freeze()` prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

```
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
```

`Object.isFrozen()` is available to determine whether an object has been frozen or not, and returns a Boolean.

## Object.seal()
`Object.seal()` prevents new properties from being added to an object, but allows the modification of existing properties. This method is similar to `Object.freeze()`. Refresh your console before implementing the code below to avoid an error.

```
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
```

## Object.getPrototypeOf()
`Object.getPrototypeOf()` is used to get the internal hidden `[[Prototype]]` of an object, also accessible through the `__proto__` property.

In this example, we can create an array, which has access to the Array prototype.

```
const employees = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);
```

```
//Output

[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]
```

We can see in the output that the prototype of the employees array has access to `pop`, `find`, and other Array prototype methods. We can confirm this by testing the employees prototype against `Array.prototype`.

```
Object.getPrototypeOf(employees) === Array.prototype;
```

```
//Output

true
```