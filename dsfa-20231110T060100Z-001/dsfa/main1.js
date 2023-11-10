const comPic = document.querySelector(".comPic");
const myPicR = document.querySelector(".myPicR");
const myPicS = document.querySelector(".myPicS");
const myPicP = document.querySelector(".myPicP");

const RSP = ["묵","찌","빠"];

function randomPic() {
    const randomNum = Math.floor(Math.random() * 3);
    const randomRSP = RSP[randomNum];
    return randomRSP;
}

function mainFunction() {
    const randomRSP = randomPic();
    comPic.innerText = randomRSP;
}

myPicR.addEventListener("click", mainFunction);
myPicS.addEventListener("click", mainFunction);
myPicP.addEventListener("click", mainFunction);