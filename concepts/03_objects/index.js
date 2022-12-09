/** Creation of an object using Object Literal */

const personUsingLiteral = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

/** Creation of an object using new keyword */

const personUsingNew = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

/** Creation of an object using Object constructor */

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const personUsingObjectConstructor = new Person("Sally", "Rally", 48, "green");

/** Creation of an object using Object.create(). */
let myPen = {
    init: function(color, type){
        this.color = color;
        this.type = type;
        return this
    },
    price:'30EUR',
    writes: function(){
        console.log(`My ${this.type} writes in ${this.color}`)
    }
}

/** returning 'this' in the init method will allow you to use chining of methods like below */
let myNewPen = Object.create(myPen).init('blue', 'Point Pen')
myNewPen.writes();
