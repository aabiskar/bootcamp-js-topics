/** for await loop*/

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

    let arr = [promise1, promise2, promise3]

    for await(let response of arr){
        let data = await response
        console.log(data)
    }
})()