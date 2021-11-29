var cart = [];
window.addEventListener("DOMContentLoaded",function(){
var addToCart = (pizza) => {
  var cartItem = localStorage.getItem("inCartItems");
cartItems = JSON.parse(cartItem);
console.log(cartItems);

for(i=0;i<cartItems.length;i++){
  console.log(cartItems[i]);
}
var inCart = document.querySelectorAll(".cart-items")
console.log(inCart)
if(cartItems && inCart){
  console.log("you");
  inCart.innerHTML ="";
  console.log(cartItems);
  Object.values(cartItems).map(pizza =>{
    console.log(pizza);
    document.querySelectorAll(".cart-items").innerHTML +=
    `<div class="pizza">
  <h5>Pizza</h5>
  <p class="mt-4 fs-4">${pizza.name}</p>
</div>
<div class="toppings">
  <h5>Toppings</h5>
  <select class="mt-4 p-2 border rounded" name="toppings" id="toppings">
    <option value="">Sauce ksh <span>50</span></option>
    <option value="">Pepper ksh <span>100</span></option>
    <option value="">Tomato ksh <span>50</span></option>
    <option value="">Olives ksh <span>130</span></option>
    </select>
  </div>
  <div class="crust">
  <h5>Crust</h5>
  <select class="mt-4 p-2 border rounded" name="crust" id="crust">
    <option value="">Crusty ksh <span>150</span></option>
    <option value="">Stuffed ksh <span>100</span></option>
    <option value="">Crispy ksh <span>120</span></option>
    </select>
  </div>
  <div class="size">
  <h5>Size</h5>
  <select class="mt-4 p-2 border rounded" name="size" id="size">
    <option value="">Large ksh <span>1000</span></option>
    <option value="">Medium ksh <span>800</span></option>
    <option value="">Small ksh <span>500</span></option>
    </select>
  </div>
  <div class="quantity ">
  <h5>Quantity</h5>
  <input  min="1" max="20" class="mt-4 p-2 border rounded" type="number" name="quantity" id="quantity">
</div>
<div class="price">
  <h5>Price</h5>
  <p class="mt-4 fs-4" >Ksh <span>400</span></p>
</div>`;
  });
  console.log("heyy")
}
//   cart.push({
//     ...name,
//     numberOfUnits: 1,
//   });
//   var cartContent = 

// document.getElementsByClassName("cart-items")[0].innerHTML += cartContent;
//   cartItems.append(cartContent);

  // $('.cart-items').append(cartContent);
  // updateCart();
};

var updateCart=()=>{

};
addToCart("hey")
});

$(document).ready(function () {

})