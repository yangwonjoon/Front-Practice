// console.log(함수());
// function 함수() {
//     console.log(안녕);
//     let 안녕 = 'Hello!';
// }

//tdz 때문인듯? 오류


// console.log(함수());
// var 함수 = function () {
//     console.log(안녕);
//     var 안녕 = 'Hello!';
// } 

// 오류

// let a = 1;
// var 함수 = function () {
//     a = 2;
// }
// console.log(a);

// 1 -> 정확한 이유?

// let a = 1;
// var b = 2;
// window.a = 3;
// window.b = 4;

// console.log(a + b);

// setTimeout(function () { console.log(1); }, 1000);
// setTimeout(function () { console.log(2); }, 2000);
// setTimeout(function () { console.log(3); }, 3000);
// setTimeout(function () { console.log(4); }, 4000);
// setTimeout(function () { console.log(5); }, 5000);

// for (var i = 1; i < 6; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

var x; // 선언
console.log(x); // undefined
x = 5; // 할당 
console.log(x); // 5