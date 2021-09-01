// Literal Types

const userName1 = "Bob"; // 바뀔 수 없으니 Bob
let userName2: string | number = "Tom"; // 바뀔 수 있으니 string 타입

userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User5 {
    name : string;
    job : Job;
}

const userr: User5 = {
    name : "Bob",
    job: "developer",
};

interface HighSchoolStudent {
    name : number | string;
    grade: 1 | 2 | 3;
}

// Union Types

interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}


function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if(gift.name === "car"){
        gift.start();
    } else {
        gift.call();
    }
    
}




