# Loops

## for statement

This is used for iterating over an array

```
const arr = [1,2,3,4,2];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}
```

## do-while statement 
A do while loop repeats until a specified condition evaluates to false but the statement is executed before the condition is checked.

```
let i = 0;

do {
  
  i += 1;
  console.log(i);

} while (i < 5);
```

## while statement
A while loop executes its statement as long as specified condition is true. 

```
let n = 40;

while (n < 43) {
  n++;
  console.log(n);
}
```

## break and continue Statement

The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

```
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
```

## for-in statement
The for...in statement iterates a specified variable over all the enumerable properties of an object. 

```
const obj = {a:1,b:2,c:5,d:8};
for(const key in obj){
    console.log(key);
}
```

## for-of statement
The for...of statements combo iterates (loops) over the values of any iterable.

The code block inside the loop is executed once for each value.

```
let text = "JavaScript";
for (let x of text) {
  text += x + " ";
}
```