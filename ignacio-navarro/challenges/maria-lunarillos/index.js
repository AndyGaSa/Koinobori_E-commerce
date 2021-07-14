
let menuButton = document.getElementById("menu-out");
let aside = document.getElementById("aside");
let mainBody = document.getElementById("main-body");

menuButton.addEventListener("click",menuOut)

function menuOut(){
    if(aside.className == "aside-container"){
    aside.className = "aside-container-active";
    mainBody.className = "main-body-container-active";
    } else {
    aside.className = "aside-container"
    mainBody.className = "main-body-container"
}
}
