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


Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
})