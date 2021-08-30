const add3 = function (x, y) {
    return x + y;
};
add3(10, 20);
const age2 = (age) => {
    return age > 19; // 크면 true 아니면 false
};
age2(33); // true
// implements
// interface Car {
//     color: string;
//     wheels: number;
//     start(): void;
// }
// interface Benz extends Car {
//     door: number;
//     stop(): void;
// }
// const benz : Benz = {
//     door : 5,
//     stop() {
//         console.log('stop');
//     },
//     color: 'black',
//     wheels : 4,
//     start() {
//         console.log('go..');
//     }
// }
// class Bmw2 implements Car {
//     color;
//     wheels = 4;
//     constructor(c:string){
//         this.color = c;
//     }
//     start() {
//         console.log('go..');
//     }
// }
// const bb = new Bmw2('green');
// console.log(bb);
// bb.start();
// extends
