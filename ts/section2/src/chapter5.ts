// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN, // 10 할당 
    USER,       // 11 할당(자동)
    GUEST,      // 12 할당(자동)
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 10
};

const user2 = {
    name: "홍길동",
    role: Role.USER, // 11
};

const user3 = {
    name: "아무개",
    role: Role.GUEST, // 12
};
