## Array

An `Array` is an ordered list or collection of data wherein each list item can be accessed using an `index`. An `index` is a location/position of an item inside an array which typically starts from `0`.

It can hold items belonging to any data type.

```
let array = ['Michael Scott', 10, true, {city: 'Scranton', assistant: 'Dwight Schrute'}, ()=>'This is an awesome show', null, undefined]
console.log(array)
```

## Adding an Item to an Array

1. By assgining value directly to an index
2. array.push(): Adds an item at the end of the list
3. array.unshift(): Adds an item to the beginning of the list

## Removing an Item to an Array

1. `array.splice(position,numberOfItemsToRemove, item1, ....., itemX)`
2. `array.shift()`: Removes the first element of the array
3. `array.pop()`: Removes the last element of the array

The `splice()` method will change the original variable

## Other commonly used Array Methods

1. `array.slice(start, end-1)`: 
```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
```

2. `array.concat(arr1, arr2)`
```
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10]

const result = [].concat(arr1, arr2)
```

3. `arr.forEach(callback)`: Iterative method

4. `arr.indexOf()`
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

console.log(index)
```

5. `array.find(callback)`: returns the value itself or undefined if the condition is falsy
```
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages.find(checkAge))
```

6. `array.findIndex(callback)`: returns the index itself or returns -1 if the condition is falsy

7. `array.map(callback)`: return a whole new array based on a callback function

```
const numbers = [65, 44, 12, 4];
const newArr = numbers.map((num)=>{
  return num * 10;
})
console.log(newArr)
```

8. `array.filter(callback)`: returns a filtered array based on the provided callback function
```
const ages = [32, 33, 16, 40];
let filteredArr = ages.filter((age)=>{
  return age >= 18;
})

console.log(filteredArr)
```

### For more info on Array methods, visit this [link](https://www.w3schools.com/jsref/jsref_obj_array.asp)

