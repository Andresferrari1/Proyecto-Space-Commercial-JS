const header = document.querySelector("#id_header");
const contenedor = document.querySelector("#id_contenedor");
const body = document.querySelector("body");

window.addEventListener("scroll",function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }else {
        header.classList.remove("scroll")
    }
})