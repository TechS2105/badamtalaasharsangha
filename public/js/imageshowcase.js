let closeImageContainer = document.querySelectorAll(".bigimagecontainer");
let firstImages = document.querySelectorAll(".firstimagebox .galleryimage");
let secondImages = document.querySelectorAll(".secondimagebox .galleryimage");
let thirdImages = document.querySelectorAll(".thirdimagebox .galleryimage");
let imageText = document.querySelector(".imagetext");
let imageTextLogo = document.querySelector(".imagetext .logoimg");
let imageSubText = document.querySelector(".imagetext .textandlink h2");
let imageSubLink = document.querySelector(".imagetext .textandlink a");
let bigImageContainer = document.querySelectorAll(".bigimagecontainer");
let bigImageContainerImage = document.querySelectorAll(".bigimagecontainer .bigimage img");

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

    closeImageContainer[0].style.transform = "scale(0)";
    closeImageContainer[0].style.opacity = "0";

    closeImageContainer[1].style.transform = "scale(0)";
    closeImageContainer[1].style.opacity = "0";

    closeImageContainer[2].style.transform = "scale(0)";
    closeImageContainer[2].style.opacity = "0";

    closeImageContainer[3].style.transform = "scale(0)";
    closeImageContainer[3].style.opacity = "0";

    closeImageContainer[4].style.transform = "scale(0)";
    closeImageContainer[4].style.opacity = "0";

}

function imageShowcaseAnimation() {
    
    window.addEventListener('scroll', () => {

        // First box
        if (window.scrollY > 3500) {
            
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
        if(window.scrollY > 3700){

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
        if (window.scrollY > 3900) {
            
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

bigImageContainer.forEach((image) => {

    image.style.transform = "scale(0)";

});

// use arrow function 
function bigImage (){

    firstImages[0].addEventListener("click", () => {

        bigImageContainerImage[0].setAttribute(
            "src",
            `https://images.pexels.com/photos/14289046/pexels-photo-14289046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
        );
        bigImageContainer[0].style.transform = "scale(1)";
        bigImageContainer[0].style.transition = "all 0.7s ease";
        bigImageContainer[0].style.opacity = "1";

    });

    firstImages[2].addEventListener("click", () => {

        bigImageContainerImage[1].setAttribute(
          "src",
          `https://images.pexels.com/photos/13948622/pexels-photo-13948622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
        );
        bigImageContainer[1].style.transform = "scale(1)";
        bigImageContainer[1].style.transition = "all 0.7s ease";
        bigImageContainer[1].style.opacity = "1";

    });

    secondImages[1].addEventListener("click", () => {

        bigImageContainerImage[2].setAttribute(
            "src",
            `https://images.pexels.com/photos/9938557/pexels-photo-9938557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
        );

        bigImageContainer[2].style.transform = "scale(1)";
        bigImageContainer[2].style.transition = "all 0.7s ease";
        bigImageContainer[2].style.opacity = "1";

    });

    thirdImages[0].addEventListener("click", () => {

        bigImageContainerImage[3].setAttribute(
            "src",
            `https://images.pexels.com/photos/15873616/pexels-photo-15873616/free-photo-of-a-colorful-durga-goddess-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
        );
        bigImageContainer[3].style.transform = "scale(1)";
        bigImageContainer[3].style.transition = "all 0.7s ease";
        bigImageContainer[3].style.opacity = "1";

    });

    thirdImages[2].addEventListener("click", () => {

        bigImageContainerImage[4].setAttribute(
          "src",
          `https://images.pexels.com/photos/19241118/pexels-photo-19241118/free-photo-of-golden-durga-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
        );
        bigImageContainer[4].style.transform = "scale(1)";
        bigImageContainer[4].style.transition = "all 0.7s ease";
        bigImageContainer[4].style.opacity = "1";

    })

}

window.addEventListener("load", () => {

    setTimeout(() => {

        imageShowcaseAnimation();
        bigImage();

    });

});