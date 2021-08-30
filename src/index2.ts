type Score = 'A' | 'B' | 'C' | 'D';

interface User {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number; // 읽기전용 수정불가
    [grade:number] : Score;
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
}

user.age=10;
user.gender = "male"


console.log(user.age)
console.log(user.gender)