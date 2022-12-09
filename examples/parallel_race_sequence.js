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