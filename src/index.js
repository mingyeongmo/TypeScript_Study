let car = 'bmw';
let age = 3;
console.log(age);
let isAdult = true;
let a = [1, 2, 3];
let aa = [1, 2, 3];
let week1 = ['mon', 'tue', 'wed'];
let week2 = ['mon', 'tue', 'wed'];
week1.push('hi');
console.log(week1);
// 튜플 (Tuple)
let b;
b = ['z', 3];
// b = [1, 'z'];
b[0].toLowerCase();
// void, never
function showError() {
    throw new Error();
}
function infLoop() {
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
var Os;
(function (Os) {
    Os["Window2"] = "win";
    Os["Ios2"] = "ios";
    Os["Android2"] = "and";
})(Os || (Os = {}));
let myOs;
myOs = Os.Window2;
console.log(myOs);
// null, undefined
let a2 = null;
let b2 = undefined;
