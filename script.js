"use strict";
let quantity1 = document.querySelector(".one");
let plsSigns1 = document.querySelector(".plusone");
let quantity2 = document.querySelector(".two");
let plsSigns2 = document.querySelector(".plustwo");
let quantity3 = document.querySelector(".three");
let plsSigns3 = document.querySelector(".plusthree");
let mnsSign1 = document.querySelector(".minus1");
let mnsSign2 = document.querySelector(".minus2");
let mnsSign3 = document.querySelector(".minus3");
let priceBasket = document.querySelector(".basket");
let priceSock = document.querySelector(".sock");
let priceBag = document.querySelector(".bag");
let total = document.querySelector(".total");
let trash1 = document.querySelector(".bin1");
let trash2 = document.querySelector(".bin2");
let trash3 = document.querySelector(".bin3");
let bskPrice = 100;
let sockPrice = 20;
let bagPrice = 50;

function updateTotal() {
  let totalPrice =
    Number(priceBasket.textContent.replace("$", "")) +
    Number(priceSock.textContent.replace("$", "")) +
    Number(priceBag.textContent.replace("$", ""));
  total.textContent = `$${totalPrice}`;
}

plsSigns1.addEventListener("click", function () {
  quantity1.textContent++;
  priceBasket.textContent = `$${
    Number(priceBasket.textContent.replace("$", "")) + bskPrice
  }`;
  updateTotal();
});

plsSigns2.addEventListener("click", function () {
  quantity2.textContent++;
  priceSock.textContent = `$${
    Number(priceSock.textContent.replace("$", "")) + sockPrice
  }`;
  updateTotal();
});

plsSigns3.addEventListener("click", function () {
  quantity3.textContent++;
  priceBag.textContent = `$${
    Number(priceBag.textContent.replace("$", "")) + bagPrice
  }`;
  updateTotal();
});

mnsSign1.addEventListener("click", function () {
  if (quantity1.textContent > 1) {
    quantity1.textContent--;
    priceBasket.textContent = `$${
      Number(priceBasket.textContent.replace("$", "")) - bskPrice
    }`;
    updateTotal();
  }
});

mnsSign2.addEventListener("click", function () {
  if (quantity2.textContent > 1) {
    quantity2.textContent--;
    priceSock.textContent = `$${
      Number(priceSock.textContent.replace("$", "")) - sockPrice
    }`;
    updateTotal();
  }
});

mnsSign3.addEventListener("click", function () {
  if (quantity3.textContent > 1) {
    quantity3.textContent--;
    priceBag.textContent = `$${
      Number(priceBag.textContent.replace("$", "")) - bagPrice
    }`;
    updateTotal();
  }
});

let heart = document.querySelectorAll(".fa-heart");
heart.forEach((hea) => {
  hea.addEventListener("click", function () {
    hea.style.color = "orangered";
  });
});

updateTotal();
let img1 = document.querySelector(".bsk");
let img2 = document.querySelector(".sck");
let img3 = document.querySelector(".bg");
trash1.addEventListener("click", function () {
  img1.remove();
});
trash2.addEventListener("click", function () {
  img2.remove();
});
trash3.addEventListener("click", function () {
  img3.remove();
});
