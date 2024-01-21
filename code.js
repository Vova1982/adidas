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

// cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();      
}
// remove Item from cart
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart_remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName('cart_quantity');
    for (var i = 0; i < quantityInputs.length; i++) { 
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChange);
    }

    //Add to Cart
    var addCart = document.getElementsByClassName('add_cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked)
    }
    // buy Button work
document.getElementsByClassName('btn_buy')[0].addEventListener('click', buyButtonClick)
}
function buyButtonClick() {
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName("cart_content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

// remove Item from Cart-2
function removeCartItem(event) { 
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity Change-2
function quantityChange(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) { 
        input.value = 1;
    }
    updatetotal();
}
//Add to cart 2
function addCartClicked(event) { 
    var button = event.target
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product_title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product_img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
 
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart_box')
    var cartItems = document.getElementsByClassName('cart_content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('title')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTML == title) {
            alert("You have already add this product to cart");
            return;
        }
    }
    var cartBoxContent = `
                    <img src="${productImg}" src="./img/2.jpg" alt="">
                    <div class="detail_box">
                    <div class="cart_product_title">
                                ${title}
                            </div>
                            <div class="cart_price">${price}</div>
                            <input type="number" value="1" class="cart_quantity">
                        </div>
                        <!-- Remove Cart -->
                        <i class='bx bxs-trash-alt cart_remove'></i>
`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart_remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart_quantity')[0].addEventListener('change', quantityChange);
}
    //Update total
    function updatetotal() {

        var cartContent = document.getElementsByClassName('cart_content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart_box');
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i]
            var priceElement = cartBox.getElementsByClassName('cart_price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart_quantity')[0];
            var price = parseFloat(priceElement.innerText.replace("$", ""))
            var quantity = quantityElement.value;
            total = total + price * quantity;
        }
            // if price contain some cents value
            total = Math.round(total * 100) / 100;


            document.getElementsByClassName('total_price')[0].innerText = '$' + total;
        
    }

