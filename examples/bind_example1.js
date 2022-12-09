const myObject = {
    name:"Chandler",
    weight(num){
        let tellMyWeight = ()=>{
            console.log(`The weight of ${this.name} rose by ${num}`)
        }

        return tellMyWeight.bind(this)
    }
};

let hisObject = Object.create(myObject)

let newContextObject = {
    name:'Jannice'
}
let myFunction = hisObject.weight.bind(newContextObject, 78);

myFunction()();


/** myFunction() will return tellMyWeight.bind(this) and myFunction()() will call it */