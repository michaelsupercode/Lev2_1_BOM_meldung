//Lev2_1//
var count = document.querySelector("#count");
var message = document.querySelector(".message");

let zCount = 10;

let countd = setInterval(() => {
    zCount--;

    count.textContent = zCount;

    if (zCount == 0) {
        clearInterval(countd);
        message.style.opacity = "-1";
    }
}, 1000);