//제네릭 응용

function swap<T, K>(a: T, b: K) {
    return [b, a];
}

let [a, b] = swap('1', 2)




//배열 받을때
//튜플타입 선언후 rest 쓴거
function returnFirstValue<T>(...data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// string

function test(...rest) {
    console.log(rest)
}

console.log(test(1, 2, 3, 4))





//길이가 있는것만 받고 싶을 때

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

getLength("123");            // ✅

getLength([1, 2, 3]);        // ✅

getLength({ length: 1 });    // ✅



