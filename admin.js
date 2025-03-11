let blue=document.querySelector(".blue");
let red=document.querySelector(".red");
let yellow=document.querySelector(".yellow");
let green=document.querySelector(".green");
let black=document.querySelector(".black");

blue.addEventListener("click",()=>{
    localStorage.setItem("color","blue");
})

red.addEventListener("click",()=>{
    localStorage.setItem("color","red");
})

green.addEventListener("click",()=>{
    localStorage.setItem("color","green");
})

yellow.addEventListener("click",()=>{
    localStorage.setItem("color","yellow");
})

black.addEventListener("click",()=>{
    localStorage.setItem("color","#131313");
})