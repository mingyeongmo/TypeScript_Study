
let car:string = 'bmw';


let age:number = 3;
console.log(age);

let isAdult:boolean = true;
let a:number[] = [1,2,3];

let aa:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

week1.push('hi');

console.log(week1);

// 튜플 (Tuple)
let b:[string, number];

b = ['z',3];
// b = [1, 'z'];

b[0].toLowerCase();

// void, never

function showError():never {
    throw new Error();
}

function infLoop():never{
    while (true) {
        // do something..
    }
}

// enum

// enum Os {
//     Window = 3,
//     Ios = 10,
//     Android
// }

// console.log(Os[10]);
// console.log(Os['Ios']);

enum Os {
    Window2 = 'win',
    Ios2 = 'ios',
    Android2 = 'and'
}

let myOs:Os;

myOs = Os.Window2;

console.log(myOs);

// null, undefined

let a2:null = null;
let b2:undefined = undefined;