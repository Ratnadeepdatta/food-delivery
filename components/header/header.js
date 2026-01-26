window.addEventListener("scroll", () =>{
const header = document.getElementById("header");

if(scrollY>20){
    header.classList.add("scrolled")
}
else{
    header.classList.remove("scrolled")
}

});