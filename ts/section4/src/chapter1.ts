//함수 타입

type operation = (a: number, b: number) => number

const add: operation = (a, b) => a + b

console.log(add(1, 2))


//호출 시그니처

type operation2 = {
    (a: number, b: number): number,
    name: string
}

const sub: operation2 = (a, b) => a - b

console.log()
