const orderMethod = document.getElementById("orderMethod");
const orderMethodPic = document.getElementById("orderMethodPic");
const totalOrder = document.getElementById("totalOrder");
const totalPrice = document.getElementById("totalPrice");
const food1 = document.querySelector(".food1");
const food2 = document.querySelector(".food2");
const food3 = document.querySelector(".food3");
const food4 = document.querySelector(".food4");
const food5 = document.querySelector(".food5");

let price = 0;

function totalPriceCal() {
  let currentPrice = 0;
  if (orderMethodPic.value == 0) {
    currentPrice = price + 5000;
    totalPrice.innerText = `최종 금액 : ${currentPrice}원`;
  } else if (orderMethodPic.value == 1) {
    currentPrice = price * 0.8;
    totalPrice.innerText = `최종 금액 : ${currentPrice}원`;
  } else {
    totalPrice.innerText = `주문방식을 선택해주세요.`;
  }
}
