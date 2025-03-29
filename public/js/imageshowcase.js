let closeImageContainer = document.querySelector(".bigimagecontainer");
let firstImages = document.querySelectorAll(".firstimagebox .galleryimage");
let secondImages = document.querySelectorAll(".secondimagebox .galleryimage");
let thirdImages = document.querySelectorAll(".thirdimagebox .galleryimage");
let imageText = document.querySelector(".imagetext");
let imageTextLogo = document.querySelector(".imagetext .logoimg");
let imageSubText = document.querySelector(".imagetext .textandlink h2");
let imageSubLink = document.querySelector(".imagetext .textandlink a");

firstImages[0].style.transform = "scale(0)";
firstImages[0].style.filter = "blur(10px)";
firstImages[2].style.transform = "scale(0)";
firstImages[2].style.filter = "blur(10px)";

secondImages[1].style.transform = "scale(0)";
secondImages[1].style.filter = "blur(10px)";

thirdImages[0].style.transform = "scale(0)";
thirdImages[0].style.filter = "blur(10px)";
thirdImages[2].style.transform = "scale(0)";
thirdImages[2].style.filter = "blur(10px)";

imageText.style.transform = "translateX(1000px)";
imageText.style.filter = "blur(50px)";

imageTextLogo.style.transform = "scale(0)";

imageSubText.style.transform = "translateY(-500px)";
imageSubLink.style.transform = "translateY(500px)";

function imageCloseFun() {

    closeImageContainer.style.display = "none";

}

function imageShowcaseAnimation() {
    
    window.addEventListener('scroll', () => {

        // First box
        if (window.scrollY > 4000) {
            
            firstImages[0].style.transform = "scale(1)";
            firstImages[0].style.filter = "blur(0px)";
            firstImages[0].style.transition = "all 0.9s ease";

            firstImages[2].style.transform = "scale(1)";
            firstImages[2].style.transition = "all 0.9s ease 0.5s";
            firstImages[2].style.filter = "blur(0px)";

            imageText.style.transform = "translateX(0px)";
            imageText.style.transition = "all 1s ease";
            imageText.style.filter = "blur(0px)";
            
            imageTextLogo.style.transform = "scale(1)";
            imageTextLogo.style.transition = "all 1s ease 0.5s";

            imageSubText.style.transform = "translateY(0px)";
            imageSubText.style.transition = "all 1s ease 0.6s";

            imageSubLink.style.transform = "translateY(0px)";
            imageSubLink.style.transition = "all 1s ease 0.7s";

        }
        
        // else {
            
        //     firstImages[0].style.transform = "scale(0)";
        //     firstImages[0].style.filter = "blur(10px)";
        //     firstImages[0].style.transition = "all 0.9s ease 1s";

        //     firstImages[2].style.transform = "scale(0)";
        //     firstImages[2].style.transition = "all 0.9s ease 0.6s";
        //     firstImages[2].style.filter = "blur(10px)";

        // }

        // Second box
        if(window.scrollY > 4200){

            secondImages[1].style.transform = "scale(1)";
            secondImages[1].style.filter = "blur(0px)";
            secondImages[1].style.transition = "all 0.9s ease 0.5s";

        }
        
        // else {
            
        //     secondImages[1].style.transform = "scale(0)";
        //     secondImages[1].style.filter = "blur(10px)";
        //     secondImages[1].style.filter = "all 0.9s ease 1s";

        // }

        // Third box
        if (window.scrollY > 4500) {
            
            thirdImages[0].style.transform = "scale(1)";
            thirdImages[0].style.filter = "blur(0px)";
            thirdImages[0].style.transition = "all 0.9s ease";

            thirdImages[2].style.transform = "scale(1)";
            thirdImages[2].style.filter = "blur(0px)";
            thirdImages[2].style.transition = "all 0.9s ease 0.5s";

        }
        
        // else {
            
        //     thirdImages[0].style.transform = "scale(0)";
        //     thirdImages[0].style.filter = "blur(10px)";
        //     thirdImages[0].style.transition = "all 0.9s ease 1s";

        //     thirdImages[2].style.transform = "scale(0)";
        //     thirdImages[2].style.filter = "blur(10px)";
        //     thirdImages[2].style.transition = "all 0.9s ease 0.6s"

        // }

    });

}

window.addEventListener("load", () => {

    setTimeout(() => {

        imageShowcaseAnimation();

    });

});