/*
2-13장) while과 for 반복문

[몰랐던 부분]
    1. label(레이블)

[아래 코드]
    1. 블로그글 label 에 관한 코드
*/


let n = 14

nextNum: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        //나머지가 0이면 나누어 떨어지므로 넘어감
        if (i % j == 0) continue nextNum
    }
    console.log(i)
}


loop1:
for (let i = 0; i < 3; i++) {
    loop2:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue loop1;
        }
        console.log('i: ' + i + ', j: ' + j);
    }
}

// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2

loop1:
for (let i = 0; i < 3; i++) {
    loop2:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break loop1;
        }
        console.log('i: ' + i + ', j: ' + j);
    }
}

// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0



loop: {
    console.log("yang");
    break loop;
    console.log("hi");
}
console.log("won");

// "yang"
// "won"