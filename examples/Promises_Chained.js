const promises = new Promise((resolve, reject) => {
    if (true) {
        reject("Error has occured!")
    }
})

promises
    .then((result) => {
        return result + ". I belong to result"
    })
    .then((result1) => {
        return result1 + ". I belong to result 1 as well"
    })
    .catch((err) => {
        console.log(err)
    })
    .then((result2)=>{
        throw Error('Damn')
        console.log(result2)
    })
    .catch((err1) => {
        console.log(err1)
    })