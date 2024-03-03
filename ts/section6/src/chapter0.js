//js class

class Student {
    //필드
    name;
    age;

    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //메소드
    study() {
        console.log(`안녕하세요 ${this.name} 입니다`)
    }
}

class progammingStudnet extends Student {
    skills;

    constructor(name, age, skills) {
        super(name, age);
        this.skills = skills
    }

    progamming() {
        console.log(`최애는 ${this.skills}`)
    }
}

const studentA = new Student('양원준', 26)
const studentB = new progammingStudnet('양원준', 26, 'react')
console.log(studentB)