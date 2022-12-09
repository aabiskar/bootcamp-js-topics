# Async Await

Async is a way of declaring a function wherein await keyword is allowed within the function body.

Async and Await keywords allow promised based implementations to be written in a cleaner style, avoiding the need to explicitly implementing the promise chain, which often leads to callback hell as the logic gets more complex and as implementation gets bigger.

```
(async function () {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'I got resolved on 100ms')
    })

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'I got resolved on 1s')
    })

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, 'I got resolved on 5s')
    })

    let data = await Promise.all([promise1, promise2, promise3])
    console.log(data)
})()
```