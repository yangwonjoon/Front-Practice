let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;

console.log(obj1.value) // 20
console.log(obj2.value) // 20


let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 9;

console.log(arr1) // [9, 2, 3]
console.log(arr2) // [9, 2, 3]