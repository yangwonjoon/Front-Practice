```
const는 왜 변경이 되는가 블로그 글의 test

```


const name = 'yang'; // yang
// name = 20; // error

console.log(name)

const obj = { name: 'yang' };
obj.name = 'new yang'; // new yang

const arr = [1, 2, 3];
arr.push(4); // [1,2,3,4]


console.log(obj, arr)