let numbers = [1,2,3,4,5,6]

function add(x,y,z){
    return x+y+z
}
console.log(...numbers)
console.log(add(...numbers))

console.log(add.apply(null, numbers))

let array = ['haathi', 'ghoda', 'gadha', 'chiti']
let anotherArr = ['bakri', 'billi', 'haathi']


let mergedArr = [...array, ...anotherArr]

console.log(mergedArr)


let obj = {
    name:'apple',
    type:'fruit'
}

let changedObject = {
    name:'Seb'
}

let newObj = {...obj, ...changedObject}
console.log(newObj)

newObj = {obj, changedObject}

console.log(newObj)