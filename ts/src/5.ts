//타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
//type 선언과 readonly에 관한 내용

// 1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

type My = { name: string, }
type Name = { name: number }
type Is = { name: string }

type Mix = My & Name  // => never
type Mix2 = My & Is  // => string

let a: Mix2 = {
    name: 'yang',
}


// 2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type Type = {
    color?: string,
    size: number,
    readonly position: number[]
}
let 테스트용변수: Type = {
    color: 'red',
    size: 123,
    position: [1, 2, 3]
}


// 3) 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.