// import products from "productList.js";
import products from "./productList";

// const cartItems = [];

function initApp() {
    const idCard = document.getElementById("cards");

    // Inisialisasi keranjang belanja dari localStorage (jika ada)
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    products.forEach((product) => {
        const createProduct = document.createElement("article");
        createProduct.className =
            "flex flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800";
        createProduct.innerHTML = `
      <button class="flex h-[55%] mx-auto my-auto">
        <img class="max-h-full mx-auto my-auto" src="${product.image}" alt="Product Picture"/>
      </button>
      <div class=" h-[45%]">
        <h3 class="nama font-semibold">${product.name}</h3>
        <p class="text-[#7C7C7C] text-[14px]">${product.weight}</p>
        <div class="flex justify-between items-end">
          <span class="harga font-semibold">${product.price}</span>
          <button class="btnAddToCart">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <rect x="0.217773" y="0.795486" width="45.67" height="45.6684" rx="17" fill="#53B175"/>
              <path d="M31.5527 23.6297C31.5527 24.0055 31.4086 24.3688 31.1392 24.6319C30.876 24.9013 30.5126 25.0516 30.1366 25.0516H24.472V30.7141C24.472 31.0899 24.3216 31.4532 24.0522 31.7163C23.789 31.9794 23.4318 32.1297 23.0559 32.1297C22.6799 32.1297 22.3165 31.9794 22.0533 31.7163C21.7838 31.4532 21.6335 31.0899 21.6335 30.7141V25.0516H15.9689C15.5929 25.0516 15.2295 24.9013 14.9663 24.6319C14.7031 24.3688 14.5527 24.0055 14.5527 23.6297C14.5527 23.2539 14.7031 22.8968 14.9663 22.6275C15.2295 22.3644 15.5929 22.2141 15.9689 22.2141H21.6335V16.5516C21.6335 16.1758 21.7838 15.8125 22.0533 15.5494C22.3165 15.28 22.6799 15.1297 23.0559 15.1297C23.4318 15.1297 23.789 15.28 24.0522 15.5494C24.3216 15.8125 24.472 16.1758 24.472 16.5516V22.2141H30.1366C30.5126 22.2141 30.876 22.3644 31.1392 22.6275C31.4086 22.8968 31.5527 23.2539 31.5527 23.6297Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>`;

        idCard.appendChild(createProduct);

        createProduct
            .querySelector(".btnAddToCart")
            .addEventListener("click", (event) => {
                addToCart(event, product, cartItems);
            });
    });
}

function addToCart(event, product, cartItems) {
    const productName = product.name;
    const productPrice = product.price;
    const productImage = product.image;

    const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage,
    };

    cartItems.push(cartItem);

    // Simpan item ke keranjang belanja
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log(`${productName} ditambahkan ke keranjang belanja.`);
}

initApp();

// penambahan angka di logo keranjang

let countChart = 0;
function qountChart() {
    countChart++;

    const chartLogo = document.getElementById("chartLogo");
    const textChartLogo = document.createElement("span");
    textChartLogo.className =
        "absolute right-[-12px] bottom-[20px] bg-green-500 rounded-[100%] w-[20px] h-[20px] flex justify-center items-center";
    textChartLogo.innerHTML = `${countChart}`;
    chartLogo.appendChild(textChartLogo);
}
let btnAddToCart = document.getElementsByClassName("btnAddToCart");
console.log(btnAddToCart);
for (let i = 0; i < btnAddToCart.length; i++) {
    btnAddToCart[i].addEventListener("click", qountChart);
}
