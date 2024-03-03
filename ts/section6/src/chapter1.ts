//ts class

class Student {
    //필드
    name: string;
    age: number;

    //생성자
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //메소드
    study() {
        console.log(`안녕하세요 ${this.name} 입니다`)
    }
}


//상속
class progammingStudent extends Student {
    skills: string;

    constructor(name: string, age: number, skills: string) {
        super(name, age);
        this.skills = skills
    }

    progamming() {
        console.log(`최애는 ${this.skills}`)
    }
}

const studentA = new Student('양원준', 25)
const studentB = new progammingStudent('양원준', 25, 'react')


const studentC: progammingStudent = {
    name: '',
    age: 25,
    skills: '',
    study: () => { },
    progamming() {

    },
}

console.log(studentC)