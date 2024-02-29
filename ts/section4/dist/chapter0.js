// //함수 기본
// function introduce(name = "이정환", tall?: number) {
//     console.log(`name : ${name}`);
//     console.log(`tall : ${tall}`);
// }
// introduce("이정환", 156);
// introduce("이정환");
//rest
// const func = (...rest: number[]) => {
//     let sum = 0;
//     rest.forEach((e) => {
//         sum += e
//     })
//     return sum;
// }
// console.log(func(1, 2, 3, 4, 5))
//foreach
const arr = [1, 2, 3, 4, 5];
arr.forEach((a, idx, aarr) => {
    console.log("a: ", a);
    console.log("index:", idx);
    console.log("array:", aarr);
});
export {};
