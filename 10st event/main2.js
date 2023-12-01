const orderMethod = document.getElementById("orderMethod");
const orderMethodPic = document.getElementById("orderMethodPic");
const totalOrder = document.getElementById("totalOrder");
const totalPrice = document.getElementById("totalPrice");
const foods = document.querySelectorAll(".food");

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

function orderMP() {
  let OP = orderMethod.selectedIndex;
  if (OP == 0) {
    orderMethodPic.innerText = `배달 주문! (추가비용 5000원)`;
    orderMethodPic.value = 0;
  } else {
    orderMethodPic.innerText = `방문포장! (20퍼센트 할인!)`;
    orderMethodPic.value = 1;
  }
  totalPriceCal();
}

function foodListF(food) {
  if (food.checked) {
    price += parseInt(food.value);
  } else {
    price -= parseInt(food.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}

totalPriceCal();
orderMethod.addEventListener("click", orderMP);
foods.forEach((food) =>
  food.addEventListener("change", (event) => foodListF(event.target))
);                                                  
                                                                                                                                        
