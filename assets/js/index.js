let imgMenu = document.getElementById("imgMenu");
let menu = document.getElementById("menu");
let linkFacebook = document.getElementById("linkFacebook");
let linkInstagram = document.getElementById("linkInstagram");
let linkWhatsapp = document.getElementById("linkWhatsapp");
let linkTiktok = document.getElementById("linkTiktok");
let imgFacebook = document.getElementById("imgFacebook");
let imgInstagram = document.getElementById("imgInstagram");
let imgWhatsapp = document.getElementById("imgWhatsapp");
let imgTiktok = document.getElementById("imgTiktok");

imgMenu.addEventListener("click", () => {
    if (menu.className == "close") {
        menu.style.display = "flex";
        menu.style.flexFlow = "column nowrap";
        menu.style.justifyContent = "center";
        menu.style.alignItems = "center";
        menu.style.position = "absolute";
        menu.style.top = "100%";
        menu.style.left = "69%";
        menu.style.backgroundColor = "black";
        menu.className = "open";
    } else {
        menu.style.display = "none";
        menu.className = "close";
    }    
});

linkFacebook.addEventListener("mouseenter", () => {
    imgFacebook.src = "../assets/imgs/icon-facebook-red.png";
});

linkFacebook.addEventListener("mouseleave", () => {
    imgFacebook.src = "../assets/imgs/icon-facebook.png";
});

linkInstagram.addEventListener("mouseenter", () => {
    imgInstagram.src = "../assets/imgs/icon-instagram-red.png";
});

linkInstagram.addEventListener("mouseleave", () => {
    imgInstagram.src = "../assets/imgs/icon-instagram.png";
});

linkWhatsapp.addEventListener("mouseenter", () => {
    imgWhatsapp.src = "../assets/imgs/icon-whatsapp-red.png";
});

linkWhatsapp.addEventListener("mouseleave", () => {
    imgWhatsapp.src = "../assets/imgs/icon-whatsapp.png";
});

linkTiktok.addEventListener("mouseenter", () => {
    imgTiktok.src = "../assets/imgs/icon-tiktok-red.png";
});

linkTiktok.addEventListener("mouseleave", () => {
    imgTiktok.src = "../assets/imgs/icon-tiktok.png";
});