/*
2-14장) switch

[몰랐던 부분]

[아래 코드]
    모던 js 문제 코드
*/

a = 5

switch (a) {
    case 0:
        console.log(0)
        break;
    case 1:
        console.log(1)
        break;
    case 2:
    case 3:
        console.log(2, 3)
        break;
}