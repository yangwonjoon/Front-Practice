let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error!');
    }, 1000);
});

console.log(promise); // Promise { <pending> }

promise.then(result => {
    console.log(result); // 'Success!' (1초 후 출력)
    console.log(promise); // Promise { <fulfilled>: 'Success!' }
}).catch(error => {
    console.error(error);
});