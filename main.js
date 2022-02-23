const washCar = document.getElementById("wash-car");
const mowLawn = document.getElementById("mow-lawn");
const pullWeeds = document.getElementById("pull-weeds");
const invoiceNotes = document.getElementById("invoice-notes");
let invoiceTotal = document.getElementById("invoice-total");
let remove = document.getElementById("remove");
const reset = document.getElementsByClassName("btn")

let services = [
  { car: "Wash Car", price: 10 },
  { lawn: "Mow Lawn", price: 20 },
  { pull: "Pull Weeds", price: 30 },
];

let selectedServices = [];
let unselectedServices = [];

//car wash
washCar.addEventListener("click", function () {
  document.getElementById("wash-task").innerHTML = services[0].car;
  document.getElementById("wash-rate").innerHTML = `$ ${services[0].price}`;
  document.getElementById("invoice-notes").innerHTML = "We accept cash, credit card, or paypal"
  selectedServices.push(services[0].price);
  unselectedServices.pop(services[0].price)
  amount();
}, {once : true} );

//lawn mowing
mowLawn.addEventListener("click", function () {
  document.getElementById("mow-task").innerHTML = services[1].lawn;
  document.getElementById("mow-rate").innerHTML = `$ ${ services[1].price}`;
  document.getElementById("invoice-notes").innerHTML = "We accept cash, credit card, or paypal"
  selectedServices.push(services[1].price);
  unselectedServices.pop(services[1].price)
  amount();
}, {once : true} );

//pulling weeds
pullWeeds.addEventListener("click", function () {
  document.getElementById("pull-task").innerHTML = services[2].pull;
  document.getElementById("pull-rate").innerHTML = `$ ${services[2].price}`;
  document.getElementById("invoice-notes").innerHTML = "We accept cash, credit card, or paypal"
  selectedServices.push(services[2].price);
  unselectedServices.pop(services[2].price)
  amount();
}, {once : true} );

reset.addEventListener("click", function(){
    document.getElementById("wash-task").innerHTML = "";
    document.getElementById("wash-rate").innerHTML = "";
})

function amount() {
  let sum = 0;
  for( let i = 0; i<selectedServices.length; i++){
      sum += selectedServices[i]
  }
  invoiceTotal.innerHTML = `$ ${sum}`;
  
}
