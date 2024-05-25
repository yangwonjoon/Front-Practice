"use strict";
//타입 확정하기 Narrowing & Assertion
Object.defineProperty(exports, "__esModule", { value: true });
//narrowing: 타입이 불확실할때 타입을 좁혀서 확실하게 하는것, assertion: narrowing과 비슷하나 단언하여 as로 타입을 변환하는것 처럼 하는것
// 1)숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림 
function change(x) {
    for (var i = 0; i < x.length; i++) {
        if (typeof (x[i] == 'string')) {
            x[i] = Number(x[i]);
        }
        else {
            continue;
        }
    }
    return x;
}
// let a = [1, '2', 3]
// console.log(typeof (a[0]), typeof (a[1]))
// change(a)
// console.log(typeof (a[0]), typeof (a[1]))
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function teacher(subject) {
    if (typeof (subject.subject) === 'string') {
        return subject.subject;
    }
    else if (Array.isArray(subject.subject)) {
        return subject.subject[subject.subject.length - 1];
    }
}
console.log(teacher(민수쌤));
