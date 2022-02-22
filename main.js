const washCar = document.getElementById("wash-car")

const mowLawn = document.getElementById("mow-lawn")

const pullWeeds = document.getElementById("pull-weeds")

const invoiceNotes = document.getElementById("invoice-notes")

// Car wash
washCar.addEventListener("click", function(){
    document.getElementById("wash-el").innerHTML = "Wash Car"
    document.getElementById("wash-rate").innerHTML = "$10"
})

// Lawn mowing
mowLawn.addEventListener("click", function(){
    document.getElementById("mow-el").innerHTML = "Mow Lawn"
    document.getElementById("mow-rate").innerHTML = "$20"
})

// Pulling weeds
pullWeeds.addEventListener("click", function(){
    document.getElementById("pull-el").innerHTML = "Pull Weeds"
    document.getElementById("pull-rate").innerHTML = "$30"
})

