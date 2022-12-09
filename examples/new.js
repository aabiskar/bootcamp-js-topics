/*** ****************THE CURIOUS CASE OF "new" KEYWORD***************** 
 * 
 * THIS IS WHAT CLASS KEYWORD IN JAVASCRIPT DOES UNDER THE HOOD. 
 * 
 * THE CLASS KEYOWRD IS A SYNTACTIAL SUGAR WHICH DOES THE EXACT SAME THING BEHIND THE SCENES
 */

 let talk = function(){
    console.log(`The ${this.animal} says ${this.word}`)
}

let animal = function(animal, word){
    this.animal = animal
    this.word = word
} 

animal.prototype.talks = talk;

// let bird = new animal('Hawk ', 'CHEEEEL');

/** implementation of new */
let bird = spawn(animal, 'hawk','cheel');

function spawn(constructor){
    let obj = {};
    let args = Array.prototype.slice.apply(arguments);
    Object.setPrototypeOf(obj, constructor.prototype);

    return constructor.apply(obj, [args[1], args[2]]) || obj;
}


bird.talks();


