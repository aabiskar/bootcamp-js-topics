# JS Timer Functions

A timer is a function that enables us to execute a function at a particular time.

There are namely two timer functions in JS:

1. `setTimeout(function, milliseconds)`
   The setTimeout() function is used to execute a function or specified piece of code just once after a certain period of time.

```
setTimeout(() =>{
alert('Hello World!');
}, 2000)
```

2. `setInterval(function, milliseconds)`
   setInterval() function is used to execute a function or specified piece of code repeatedly at fixed time intervals

```
setInterval(()=>{
var d = new Date();
document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}), 1000);
```

## Stopping Code Execution or Cancelling a Timer

Both setTimeout() and setInterval() method return an unique ID (a positive integer value, called timer identifier) which identifies the timer created by the these methods.

This ID can be used to disable or clear the timer and stop the execution of code beforehand. Clearing a timer can be done using two functions: `clearTimeout()` and `clearInterval()`.

`clearTimeout()` Example:
```
const timeoutId = setTimeout(() =>{
alert('Hello World!');
}, 2000)

clearTimeout(timeoutID);
```

`clearInterval()` Example:
```
const intervalId = setInterval(()=>{
var d = new Date();
document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}), 1000);

clearInterval(intervalId)
```