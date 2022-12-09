# Promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:
1. `pending`: initial state, neither fulfilled nor rejected.
2. `fulfilled`: meaning that the operation was completed successfully.
3. `rejected`: meaning that the operation failed.

# Examples

## Promise: A simple one

```
function makePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Completed");
    }, 2000);
  });
}

(function callPromise() {
  makePromise().then((data) => console.log("voila!!==>",data));
  console.log("You will get promise output in 2 seconds")
})();
```

## Chained Promises

```
const promises = new Promise((resolve, reject) => {
    if (true) {
        resolve("This is good")
    }
})

promises
    .then((result) => {
        // throw Error('Error 1 happened!')
        return result + ". I belong to result"
    })
    .then((result1) => {
        return result1 + ". I belong to result 1 as well"
    })
    .catch((err) => {
        console.log(err)
    })
    .then((result2)=>{
        // throw Error('Error 2 Happened')
        console.log(result2)
    })
    .catch((err1) => {
        console.log(err1)
    })
```

## Promise.all()

```
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'I got resolved on 100ms')
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'I got resolved on 1s')
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, 'I got resolved on 5s')
})

Promise.all([promise1, promise2, promise3]).then((results)=>{
    console.log(results)
}).catch(err=>console.log(err))
```

## Promise.allSettled()

Difference between Promise.all() and Promise.allSettled()

`Promise.all` will reject as soon as one of the Promises in the array rejects.

`Promise.allSettled` will never reject - it will resolve once all Promises in the array have either rejected or resolved.

```
(function () {
    let pr1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })

    let pr2 = new Promise((resolve, reject) => {
        setTimeout(reject, 2000)
    })

    Promise.allSettled([pr1, pr2]).then(data => console.log(data))

    /** Result
        (2) [{…}, {…}]
        0: {status: "fulfilled", value: undefined}
        1: {status: "rejected", reason: undefined}
     */


    let pr3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })

    let pr4 = new Promise((resolve, reject) => {
        setTimeout(reject, 2000)
    })

    Promise.all([pr3, pr4]).then(data => console.log(data)).catch(e => console.log('something went horribly wrong: ', e))
    
    /**Result 
     * something went horribly wrong:  undefined
     */
})()
```

## Parallel, Race and Sequence

```
(function () {
    const promisify = (item, delay) =>
        new Promise(resolve => setTimeout(() => resolve(item), delay))

    let a = () => promisify('a', 1000)
    let b = () => promisify('b', 100)
    let c = () => promisify('c', 3000)
    
    let promises = [a(), b(), c()]
    
    let parallel = async () => {
        let data = await Promise.all(promises)
        return `parallel run==> ${data}`
    }

    let race = async () => {
        const data = await Promise.race(promises)
        return `${data} won the race`
    }

    let sequence = async () =>{
        let data1 = await a()
        let data2 = await b()
        let data3 = await c()

        return `The Sequence is ${[data1, data2, data3]}`
    }
    parallel().then(console.log)
    race().then(console.log)
    sequence().then(console.log)
})()
```