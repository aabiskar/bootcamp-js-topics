/** Promise.all() */

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