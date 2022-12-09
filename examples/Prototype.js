let makeHimTalk = function(){
    console.log(this.__proto__)
    console.log(`My name is ${this.fname}`);
}

let talking = {
    talks: makeHimTalk
}

let human = {
    fname:"Shivang",
    "lastname":"Chaturvedi",
    "age":"30"
}

Object.setPrototypeOf(human, talking);

human.talks();