"use strict";
//함수와 methods에 type alias 지정하는 법
Object.defineProperty(exports, "__esModule", { value: true });
// 1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
// - type 키워드를 쓰든 말든 알아서 합시다. 
// type Member = {
//     name: string,
//     age: number,
//     plusOne: (number) => number
//     changeName: () => void
// }
// let 회원정보: Member = {
//     name: 'kim',
//     age: 30,
//     plusOne(x) {
//         return x + 1
//     },
//     changeName: () => {
//         console.log('안녕')
//     }
// }
// console.log(회원정보.plusOne(1));
// 회원정보.changeName();
// 2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
// const cutZero = (num) => {
//     if (num)
// }
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let arr1 = arr.slice(1, 4)
// console.log('arr', arr, ', arr1,', arr1)
var arr = 'aewraewr';
console.log(arr[0]);
