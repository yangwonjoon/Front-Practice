//함수 타입 표현식

type operation = (a: number, b: number) => number

const add: operation = (a, b) => a + b

console.log(add(1, 2))


//호출 시그니처

type operation2 = {
    (a: number, b: number): number,
}

const sub: operation2 = (a, b) => a - b

console.log(sub(4, 2))
