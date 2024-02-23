// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
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
export {};
