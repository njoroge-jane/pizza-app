var pizzas = [
  {id: "1",
name: "Cheese",
image:"./images/image1.png",
ingredients: "Cheese and Mozarella",
price : 800,
},
{id: "2",
name: "Veggie",
image:"./images/image2.png",
ingredients: "Mushroom, Pepper and Onions",
price : 700,
},
{id: "3",
name: "Pepperoni",
image:"./images/image3.png",
ingredients: "Pizza sauce, mozzarella, pepperoni",
price : 850,
},
{id: "4",
name: "Peri-peri",
image:"./images/image4.png",
ingredients: "Cheese, Onions and Ham",
price : 750,
},
{id: "5",
name: "Margherita",
image:"./images/image5.png",
ingredients: "Buffalo mozzarella, basil and olive oil,",
price : 900,
},
{id: "6",
name: "Hawaiian",
image:"./images/image6.png",
ingredients: "Mozzarella, ham and pineapple",
price : 950,
}
];

pizzas.forEach(function(pizza){
  var pizzaItem = ` <div class="col-md-4 pt-5">
  <div class="card mh-100 container-fluid shadow text-center">
    <img src="${pizza.image}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pizza.name}</h5>
      <p class="card-text"> KSH ${pizza.price}</p>
      <p class="card-text">${pizza.ingredients}</p>
      <a href="#" class="btn btn-warning rounded">ADD TO CART</a>
    </div>
  </div>
 </div>`
  document.getElementsByClassName("row")[0].innerHTML += pizzaItem;
  });