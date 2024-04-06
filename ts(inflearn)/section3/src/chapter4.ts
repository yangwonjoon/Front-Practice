//대수타입, 타입합집합과 교집합

type Dog = {
    name: string,
    age: number
}

type Human = {
    name: string,
    school: string
}

type union1 = Dog | Human
type intersection = Dog & Human


// let a: intersection = {
//     name: 'hi',
//     age: 12
// }

// let b: intersection = {
//     name: 'hi',
//     school: "middle"
// }

let c: intersection = {
    name: 'hi',
    age: 12,
    school: 'middle'
}

console.log(c)