//함수 오버로딩

function func(a: number): number;
function func(a: number, b: number, c: number): number;
function func(a: number, ...rest: number[]): number


function func(a: number, b?: number, c?: number, ...rest: number[]) {

    let sum = 0;
    rest.forEach((i) => sum += i)
    return sum;
}

console.log(func(3))
console.log(func(3, 4, 5, 6, 7, 8))