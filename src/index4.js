// 함수
function hello(name, age) {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    }
    else {
        return `Hello, ${name}`;
    }
    return `Hello, ${name || "world"}`;
}
// function hello2(name = "world") {
//     return `Hello, ${name}` ;
// }
const result = hello();
const result2 = hello("Sam", 30);
console.log(result);
console.log(result2);
// const result3 = hello(123); 자료형이 달라서 안됨
function plus(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
const result3 = plus(1, 2, 3); // 6
plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
console.log(result3);
