// interface User2 {
//     name: string;
// }

// const Sam: User2 = {name:'Sam'}

// function showName(this:User2, age:number, gender:'m'|'f'){
//     console.log(this.name, age, gender)
// }

// const ae = showName.bind(Sam);
// ae(30,'m');

// console.log(ae);

interface User3{
    name: string;
    age: number;
}

function join(name: string, age: number): User3;

function join(name: string, age: string): string; 

function join(name:string, age:number | string):User3 | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const sam: User3 = join("Sam", 30);
const jane: string = join("Jane", "30");

console.log(sam);
console.log(jane);