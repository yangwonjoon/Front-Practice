interface IStudent {
    name: string,
    age: number,
    skills: string
    study: () => void
}


class Student implements IStudent {
    constructor(public name: string, public age: number, public skills: string) { }

    study() {
        console.log()
    }
}