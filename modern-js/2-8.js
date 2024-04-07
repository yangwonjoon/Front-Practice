// phoneNum = '01046884080'
// console.log(typeof +phoneNum)

// console.log('1' == 1) //true
// console.log('1' === 1) //false

// console.log(null == undefined) // true 
// console.log(null === undefined) // false 

// console.log(0 == "") // true, 빈문자열과 0은 false이기 때문
// console.log(0 === "") // false, 위와 같지만 데이터 타입이 다름

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); // false 
console.log(a === b); // false 
console.log([1, 2, 3] == [1, 2, 3]); // false 

var x = {}; 
var y = {}; 
console.log(x == y) // false 
console.log(x === y) // false 