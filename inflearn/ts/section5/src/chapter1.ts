interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    name: 'dog'
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const chi: Chicken = {
    name: 'chi',
    age: 12,
    isFly: true
}

const dog: Dog = {
    name: 'dog',
    age: 25,
    isBark: true
}

console.log(dog)