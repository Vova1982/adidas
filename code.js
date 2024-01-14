// CART_ICON

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let cartClose = document.querySelector('#close-cart');
//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}
//close cart

cartClose.onclick = () => { 
    cart.classList.remove("active");
}