let elNav = document.querySelector(".js-nav")
let elBtn = document.querySelector(".btn-js")
let elBody = document.querySelector("body")
let elOverlay = document.querySelector(".overlay")

elBtn.addEventListener("click", function(){
    elNav.classList.toggle("js-nav-show")
    elBtn.classList.toggle("burgerbtn-show")
    elBody.classList.toggle("bodyshow")
    elOverlay.classList.toggle("overlay-show")
})
elOverlay.addEventListener("click", function(){
    elNav.classList.toggle("js-nav-show")
    elOverlay.classList.remove("overlay-show")
    elBody.classList.remove("bodyshow")
    elBtn.classList.remove("burgerbtn-show")
})

