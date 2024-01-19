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

//Update total
function updatetotal() { 

    var cartContent = document.getElementsByClassName('cart_content')[0]; 
    var cartBoxes = cartContent.getElementsByClassName('cart_box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) { 
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart_price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart_quantity')[0];
        var price =parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total = total + price * quantity;


        document.getElementsByClassName('total_price')[0].innerText = '$' + total;
    }
    }
