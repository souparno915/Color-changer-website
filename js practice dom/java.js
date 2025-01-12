 var red = document.querySelector("#red")
 var blue = document.querySelector("#blue")
 var green = document.querySelector("#green")
 var purple = document.querySelector("#purple")




 var w = document.querySelector("h1")

red.addEventListener("click", function changecolor(){

   w.style.backgroundColor = "red";
   w.innerHTML = "you selected red"
})
blue.addEventListener("click", function changecolor(){

   w.style.backgroundColor = "blue";
   w.innerHTML = "you selected blue"
   w.style.color = "white"
})

green.addEventListener("click", function changecolor(){

   w.style.backgroundColor = "green";
   w.innerHTML = "you selected green"
   w.style.color = "white"
})


purple.addEventListener("click", function changecolor(){

   w.style.backgroundColor = "purple";
   w.innerHTML = "you selected purple"
   w.style.color = "white"
})