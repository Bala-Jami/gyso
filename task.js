const my=document.getElementById("my")
const navlinks=document.querySelector(".navLinks")
const links=document.querySelector(".navLinks li")
my.addEventListener('click',()=>{
    navlinks.classList.toggle("open")
})