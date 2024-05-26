// function repeat(count) {
//     for (let idx = 0; idx < count; idx++) {
//         console.log(idx)
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 0; idx < count; idx++) {
//         console.log(idx * 2)
//     }
// }

// repeat(3)
// repeatDouble(3)


function repeat(count, callback) {
    for (let idx = 0; idx < count; idx++) {
        callback(idx)
    }

}

repeat(3, idx => console.log(idx))
repeat(3, idx => console.log(idx * 2))

console.log('Start');

setTimeout(function () {
    console.log('hello');
}, 2000);

console.log('End');