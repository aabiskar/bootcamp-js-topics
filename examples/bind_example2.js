const myObject = {
    name:"Chandler",
    weight(num){
        let tellMyWeight = ()=>{
            console.log(`The weight of ${this.name} rose by ${num}`)
        }

        return tellMyWeight.bind(this)
    }
};


myObject.weight()();


/** myFunction() will return tellMyWeight.bind(this) and myFunction()() will call it */