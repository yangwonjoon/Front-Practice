//alert의 반환값은 undefined

// 1) age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
// age = 12
// if (!(14 <= age <= 90)) {
//     // console.log('아님')
// }


let height = 0

console.log(height || 100)
//falsy로 판단되어 100
console.log(height ?? 100)
//undefined나 null이 아니기 때문에 0
