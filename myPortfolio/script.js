const menuBtn = document.querySelector(".ham");
const closeBtn = document.querySelector(".closeBtn");
const mobileMenu = document.querySelector(".mobileMenu")
const hom = document.querySelector(".hom")
const conta = document.querySelector(".contac")
const abt = document.querySelector(".abt")
const wor = document.querySelector(".wor")

hom.addEventListener('click',()=>{
    mobileMenu.style.display = "none";
})
conta.addEventListener('click',()=>{
    mobileMenu.style.display = "none";
})
abt.addEventListener('click',()=>{
    mobileMenu.style.display = "none";
})
wor.addEventListener('click',()=>{
    mobileMenu.style.display = "none";
})

menuBtn.addEventListener('click',()=>{
    mobileMenu.style.display = "block";

})
closeBtn.addEventListener('click',()=>{
    mobileMenu.style.display = "none";
})