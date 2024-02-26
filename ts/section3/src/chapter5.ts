//타입 추론
// function test(param) {
// }

let a = 10;
// number 타입으로 추론

// let b = "hello";
// // string 타입으로 추론

let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

let { id, name, profile } = c
let [one, two, three] = [1, "hello", true];


// function func() {
//     return "hello";
// }
// 반환값이 string 타입으로 추론된다


function func(a = 10, b = 20) {
    return a + b;
}
console.log(func())


let d;
d = 10;
console.log(d)


const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론