//제네릭

function func<T>(param: T): T {
    return param
}


let num = func(10)
let str = func('hi')
let arr = func<string>('hi')
console.log(arr)


