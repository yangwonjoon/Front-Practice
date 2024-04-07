type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

// animal = dog; // ✅ OK
// dog = animal; // ❌ NO

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let progammingbook: ProgrammingBook = {
    name: "yang",
    price: 2323,
    skill: "wonjoon"
}

let book: Book = {
    name: "yang",
    price: 30000
}

function func(book: Book) {
    console.log(book)
}

func(book);

