// SCROLL COMMERCIAL SPACE 
const header = document.querySelector("#id_header");
const contain = document.querySelector("#id_contenedor");
const body = document.querySelector("body");

window.addEventListener("scroll",function(){
    if(contain.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }else {
        header.classList.remove("scroll")
    }
})
