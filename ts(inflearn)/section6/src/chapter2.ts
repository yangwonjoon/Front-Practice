//접근제어자 public, private, protected

class Student {
    //필드
    name: string;
    private age: number;
    protected school: string;

    //생성자
    constructor(name: string, age: number, school: string) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    //메소드
    study() {
        console.log(`안녕하세요 ${this.school} 입니다`)
    }
}


//상속
class progammingStudent extends Student {
    skills: string;

    constructor(name: string, age: number, school: string, skills: string) {
        super(name, age, school);
        this.skills = skills
    }

    progamming() {
        console.log(`최애는 ${this}`)
    }
}


let studentA = new Student('yang', 26, 'college')
studentA.name;
// studentA.age;
// studentA.school;

