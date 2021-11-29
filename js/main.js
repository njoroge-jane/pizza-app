var pizzas = [
  {
    id: "1",
    name: "Cheese",
    image: "./images/image1.png",
    ingredients: "Cheese and Mozarella",
    price: 800,
  },
  {
    id: "2",
    name: "Veggie",
    image: "./images/image2.png",
    ingredients: "Mushroom, Pepper and Onions",
    price: 700,
  },
  {
    id: "3",
    name: "Pepperoni",
    image: "./images/image3.png",
    ingredients: "Pizza sauce, mozzarella, pepperoni",
    price: 850,
  },
  {
    id: "4",
    name: "Peri-peri",
    image: "./images/image4.png",
    ingredients: "Cheese, Onions and Ham",
    price: 750,
  },
  {
    id: "5",
    name: "Margherita",
    image: "./images/image5.png",
    ingredients: "Buffalo mozzarella, basil and olive oil,",
    price: 900,
  },
  {
    id: "6",
    name: "Hawaiian",
    image: "./images/image6.png",
    ingredients: "Mozzarella, ham and pineapple",
    price: 950,
  },
];
window.addEventListener("DOMContentLoaded",function(){

pizzas.forEach((pizz)=>{
  console.log("hello");
})
console.log(document.getElementById("rowa"));
console.log(document.querySelector(".row"));

pizzas.forEach((pizza)=>{
  var pizzaItem = ` <div class="col-md-4 pt-5">
  <div class="card mh-100 container-fluid shadow text-center">
    <img src="${pizza.image}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pizza.name}</h5>
      <p class="card-text"> KSH ${pizza.price}</p>
      <p class="card-text">${pizza.ingredients}</p>
      <a href="#" id="${pizza.id}"  class="add btn btn-warning rounded">ADD TO CART</a>
    </div>
  </div>
 </div>`;
  
 console.log(document.getElementById("rowa"));
  document.getElementById("rowa").innerHTML += pizzaItem;


 
});

var orderButtons = document.querySelectorAll(".add");

document.querySelectorAll(".add").forEach((buttonOrder) => {
  buttonOrder.addEventListener("click", function (e) {
    var pizzaType = e.target.id;
    cartNumbers();
  });
});
// var orderButtons = document.getElementsByClassName("add")[0];
// console.log(orderButtons);
// for(var i = 0; i < orderButtons.length; i++){
//   orderButtons[i].addEventListener("click", () =>{
//   console.log("looping");
//     cartNumbers();

//     // var itemId= this.getElementById("btn");
//     // var clickedPizza = pizzas.find(function (pizza) {
//     //   return pizza.id == itemId;

//     // });
//   });
// }
var cartNumbers = () => {
 
  var pizzaNumbers = localStorage.getItem("cartNumbers");

  pizzaNumbers = parseInt(pizzaNumbers);
  if (pizzaNumbers) {
    localStorage.setItem("cartNumbers", pizzaNumbers + 1);
    document.querySelector("#cart-no").textContent = pizzaNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cart-no").textContent = 1;
  }
};

var setItems=(pizza)=>{
  var cartItem = localStorage.getItem("inCartItems");
cartItems = JSON.parse(cartItem);
console.log(cartItems);
  let cartItems = {
    pizza
 
}

localStorage.setItem("inCartItems", JSON.stringify(cartItems));
localStorage.getItem("inCartItems");

}
setItems(pizzas);
// var cart = [];
// var addToCart = (name) => {
//   var cartItem = localStorage.getItem("cartNumbers");
// cartItems = JSON.parse(cartItem);
// console.log(cartItems);
// var inCart = document.querySelectorAll(".cart-items")
//   // cart.push({
//   //   ...name,
//   //   numberOfUnits: 1,
//   // });
//   var cartContent = `<div class="pizza">
//   <h5>Pizza</h5>
//   <p class="mt-4 fs-4"></p>
// </div>
// <div class="toppings">
//   <h5>Toppings</h5>
//   <select class="mt-4 p-2 border rounded" name="toppings" id="toppings">
//     <option value="">Sauce ksh <span>50</span></option>
//     <option value="">Pepper ksh <span>100</span></option>
//     <option value="">Tomato ksh <span>50</span></option>
//     <option value="">Olives ksh <span>130</span></option>
//     </select>
//   </div>
//   <div class="crust">
//   <h5>Crust</h5>
//   <select class="mt-4 p-2 border rounded" name="crust" id="crust">
//     <option value="">Crusty ksh <span>150</span></option>
//     <option value="">Stuffed ksh <span>100</span></option>
//     <option value="">Crispy ksh <span>120</span></option>
//     </select>
//   </div>
//   <div class="size">
//   <h5>Size</h5>
//   <select class="mt-4 p-2 border rounded" name="size" id="size">
//     <option value="">Large ksh <span>1000</span></option>
//     <option value="">Medium ksh <span>800</span></option>
//     <option value="">Small ksh <span>500</span></option>
//     </select>
//   </div>
//   <div class="quantity ">
//   <h5>Quantity</h5>
//   <input  min="1" max="20" class="mt-4 p-2 border rounded" type="number" name="quantity" id="quantity">
// </div>
// <div class="price">
//   <h5>Price</h5>
//   <p class="mt-4 fs-4" >Ksh <span>400</span></p>
// </div>`;

// document.getElementsByClassName("cart-items")[0].innerHTML += cartContent;
//   cartItems.append(cartContent);

//   // $('.cart-items').append(cartContent);
//   // updateCart();
// };
// addToCart("veggie");

// var updateCart=()=>{

// };

})