// Literal Types
var userName1 = "Bob"; // 바뀔 수 없으니 Bob
var userName2 = "Tom"; // 바뀔 수 있으니 string 타입
userName2 = 3;
var userr = {
    name: "Bob",
    job: "developer"
};
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
