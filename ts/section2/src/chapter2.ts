//배열
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["yang", "won", "joon"]
let boolArr: Array<boolean> = [true, false, true]

let multiArr: (number | string | boolean)[] = [1, "hello", false];

let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];



//튜플
let tup2: [number, string, boolean] = [1, "hello", true];

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
];


console.log(users)