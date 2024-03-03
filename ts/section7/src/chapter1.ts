//제네릭 응용

function swap<T, K>(a: T, b: K) {
    return [b, a];
}

let [a, b] = swap('1', 2)




//배열 받을때

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[1];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// string




//길이가 있는것만 받고 싶을 때

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

getLength("123");            // ✅

getLength([1, 2, 3]);        // ✅

getLength({ length: 1 });    // ✅



