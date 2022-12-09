/** fetch() and Async/Await*/

(async function () {
    let params = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };
    let response = await fetch('https://jsonplaceholder.typicode.com/users', params);

    // resonse will be a promise object, hence we need 'await' to use its APIs like '.json()'
    console.log(await response.json());
})()    