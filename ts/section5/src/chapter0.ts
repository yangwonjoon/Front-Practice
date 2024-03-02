interface Person {
    name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
}

interface Dog {
    name: string;
    bark: string;
}


const person: Person = {
    name: 'yang',
    // age: 26
    sayHi: (a?: number, b?: number) => {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a + b)
        } else if (typeof a === "number") {
            console.log(a)
        } else {
            console.log('no')
        }
    }
}

console.log(person.sayHi())