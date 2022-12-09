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