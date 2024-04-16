/*
2-12장. nullish 병합 연산자

[몰랐던 부분]
    1. alert의 반환값은 undefined
    2. nullish의 존재

[밑에 코드]
    1. nullish 테스트

*/

let height = 0

console.log(height || 100)
//falsy로 판단되어 100
console.log(height ?? 100)
//undefined나 null이 아니기 때문에 0
