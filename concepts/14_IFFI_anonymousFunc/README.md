# Anonymous Function and IFFI

## Anonymous Function

The meaning of the word 'anonymous' defines something that is unknown or has no identity.

```
let x = function () {  
    console.log('It is an anonymous function');  
};  
x();  
```

## IIFE
```
Syntax #1
(function(param){
    console.log(param)
}(param))


Syntax #2
(function(param){
    console.log(param)
})(param)
```