type A = () => number;
type B = () => 10;

let a: A = () => 11;
let b: B = () => 10;

a = b;



type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (a) => { };
let d: D = (value) => { };

d = c


console.log(d)