// interface User2 {
//     name: string;
// }
function join(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
var sam = join("Sam", 30);
var jane = join("Jane", "30");
console.log(sam);
console.log(jane);
