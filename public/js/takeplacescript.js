let imageSection = document.querySelectorAll(".imgbox .image .imgsection");
let imageContainer = document.querySelectorAll(".imgbox .image");
let imageSectionHeading = document.querySelector(".takeplacetext h2");
let image = document.querySelectorAll(".image .imgsection img"); 
let hoverTextHeading = document.querySelectorAll(".hovertext h2"); 
let hoverTextPara = document.querySelectorAll(".hovertext p");

// add classlist
document.querySelector(".imgbox .image .textsection1").classList.add("textAnimation1");
document.querySelector(".imgbox .image .textsection2").classList.add("textAnimation2");
document.querySelector(".imgbox .image .textsection3").classList.add("textAnimation3");

// add animation
imageSection[0].style.transform = `translateY(500px)`;
imageSection[0].style.filter = "blur(10px) grayscale()";
imageSection[0].style.width = "100%";

imageSection[1].style.transform = `translateY(500px)`;
imageSection[1].style.filter = "blur(10px) grayscale()";
imageSection[1].style.width = "100%";

imageSection[2].style.transform = `translateY(500px)`;
imageSection[2].style.filter = "blur(10px) grayscale()";
imageSection[2].style.width = "100%";

imageSectionHeading.style.transform = "translateY(500px)";

hoverTextHeading[0].style.transform = "translateX(-2000px)";
hoverTextHeading[0].style.filter = "blur(50px)";

hoverTextPara[0].style.transform = "translateX(-2000px)";
hoverTextPara[0].style.filter = "blur(10px)";

hoverTextHeading[1].style.transform = "translateX(-2000px)";
hoverTextHeading[1].style.filter = "blur(50px)";

hoverTextPara[1].style.transform = "translateX(-2000px)";
hoverTextPara[1].style.filter = "blur(10px)";

hoverTextHeading[2].style.transform = "translateX(-2000px)";
hoverTextHeading[2].style.filter = " blur(50px)";

hoverTextPara[2].style.transform = "translateX(-2000px)";
hoverTextPara[2].style.filter = "blur(10px)";

// adding JQuery 
$(".textAnimation1").css({

    transform: "translate(-50%, -50%) scale(0)",
    filter: "blur(10px)",

});

$(".textAnimation2").css({

    transform: "translate(-50%, -50%) scale(0)",
    filter: "blur(10px)",

});

$(".textAnimation3").css({

    transform: "translate(-50%, -50%) scale(0)",
    filter: "blur(10px)",

})

function imageScrollAnimation() {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 2100) {
        
            imageSectionHeading.style.transform = "translateY(0px)";
            imageSectionHeading.style.transition = "all 0.7s ease";
            imageSection[0].style.transform = `translateY(0px)`;
            imageSection[0].style.transition = "all 1s ease";
            imageSection[0].style.borderRadius = "0px";
            imageSection[0].style.filter = "blur(0px)";
            imageSection[1].style.transform = `translateY(0px)`;
            imageSection[1].style.transition = "all 1s ease 0.2s";
            imageSection[1].style.filter = "blur(0px)";
            imageSection[2].style.transform = `translateY(0px)`;
            imageSection[2].style.transition = "all 1s ease 0.4s";
            imageSection[2].style.filter = "blur(0px)";

            // adding JQuery
            $(".textAnimation1").css({

                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0px)",
                transition: "all 2s ease 0.5s",

            });

            $(".textAnimation2").css({

                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0px)",
                transition: "all 2s ease 0.6s",

            });

            $(".textAnimation3").css({

                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0px)",
                transition: "all 2s ease 0.7s",

            })

        } else {
        
            imageSectionHeading.style.transform = "translateY(500px)";
            imageSectionHeading.style.transition = "all 1s ease 0.8s";
            imageSection[0].style.transform = `translateY(500px)`;
            imageSection[0].style.transition = "all 1s ease";
            imageSection[0].style.filter = "blur(10px) grayscale()";
            imageSection[1].style.transform = `translateY(500px)`;
            imageSection[1].style.transition = "all 1s ease 0.2s";
            imageSection[1].style.filter = "blur(10px) grayscale()";
            imageSection[2].style.transform = `translateY(500px)`;
            imageSection[2].style.transition = `all 1s ease 0.4s`;
            imageSection[2].style.filter = "blur(10px) grayscale()";

            //adding JQuery
            $(".textAnimation1").css({

                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                transition: "all 0.5s ease"

            });

            $(".textAnimation2").css({

                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                transition: "all 0.5s ease 0.4s"

            });

            $(".textAnimation3").css({

                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                transition: "all 0.5s ease 0.5s"

            })

        }
        

    })
    
}

function firstImageHoverAnimation() {
    
    // adding JQuery
    $(imageContainer[0]).on({

        "mouseover": () => {

            // First Image Animation 
            $(image[0]).css({

                width: "100%",
                transition: "all 2s ease",
                objectFit: "cover",
                borderRadius: "50px"

            });

            $(imageSection[0]).css({

                width: "1480px",
                position: "relative",
                zIndex: "99999999",
                transition: "all 2s ease",
                overflow: "hidden"

            });

            $(hoverTextHeading[0]).css({
                 
                transform: "translateX(0px)",
                transition: "all 2s ease",
                position: "relative",
                zIndex: "999999999",
                filter: "blur(0px)",
               
            });

            $(hoverTextPara[0]).css({
                 
                transform: "translateX(0px)",
                transition: "all 2s ease 0.5s",
                position: "relative",
                zIndex: "999999999",
                filter: "blur(0px)",
               
            });

            // First Text Animation
            $(".textAnimation1").css({
                 
                transform: "translate(-50%, -50%) scale(0)",
                transition: "all 1s ease",
                position: "absolute",
                zIndex: "999999999",
                filter: "blur(50px)",
               
            });

            // Second Image Section Animation
            $(imageSection[1]).css({

                opacity: "0",
                // display: "none",
                position: "absolute",
                zIndex: "999999",
                transition: "all 2s ease"

            });

            // Second Text Animation
            $(".textAnimation2").css({

                opacity: "0",
                transform: "translate(-50%, -50%) scale(0)",
                position: "absolute",
                transition: "all 2s ease"

            });

            // Third Image Section Animation
            $(imageSection[2]).css({

                opacity: "0",
                position: "absolute",
                zIndex: "9999",
                transition: "all 2s ease"

            });

            // Third Text Animation 
            $(".textAnimation3").css({

                opacity: "0",
                transform: "translate(-50%, -50%) scale(0)",
                position: "absolute",
                transition: "all 2s ease 0.3s"

            });


        },

        "mouseout": () => {

            $(image[0]).css({

                width: "100%",
                borderRadius: "0px"

            });

            $(imageSection[0]).css({

                width: "100%",

            });

            $(imageSection[1]).css({

                opacity: "1",
                // display: "block",
                position: "absolute",
                transition: "all 2s ease 0.5s"

            });

            $(hoverTextHeading[0]).css({

                transform: "translateX(-2000px)",
                transition: "all 2s ease 0.5s",
                filter: "blur(50px)"

            });

            $(hoverTextPara[0]).css({

                transform: "translateX(-2000px)",
                transition: "all 2s ease",
                filter: "blur(10px)"

            })

            $(".textAnimation1").css({

                transform: "translate(-50%, -50%) scale(1)",
                transition: "all 1s ease 1s",
                position: "absolute",
                filter: "blur(0px)"

            })

            $(".textAnimation2").css({

                opacity: "1",
                position: "absolute",
                transform: "translate(-50%, -50%) scale(1)",
                transition: "all 2s ease 0.3s"

            })

            $(imageSection[2]).css({

                opacity: "1",
                position: "absolute",
                transition: "all 2s ease 0.5s"

            });

            $(".textAnimation3").css({

                opacity: "1",
                position: "absolute",
                transform: "translate(-50%, -50%) scale(1)",
                transition: "all 2s ease"

            })

        }

    });
}

function secondImageHoverAnimation() {
    
    $(imageContainer[1]).on({

        "mouseover": () => {

            $(image[1]).css({

                width: "100%",
                transition: "all 2s ease",
                objectFit: "cover"

            });

            $(imageSection[1]).css({

                width: "1490px",
                position: "absolute",
                left: "-500px",
                transition: "all 2s ease",
                zIndex: "99999",
                borderRadius: "50px"

            });

            $(imageSection[0]).css({

                opacity: "0",
                position: "relative",
                zIndex: "-999999",
                transition: "all 2s ease 1s"

            });

            $(".textAnimation1").css({

                opacity: "0",
                transition: "all 0.5s ease"

            });

            $(imageSection[2]).css({

                opacity: "0",
                position: "absolute",
                zIndex: "-1",
                transition: "all 2s ease 1s"

            });

            $(".textAnimation2").css({

                opacity: "0",
                filter: "blur(50px)",
                transform: "translate(-50%, -50%) scale(0)",
                transition: "all 1s ease"

            });

            $(hoverTextHeading[1]).css({

                transform: "translateX(0px)",
                transition: "all 2s ease",
                filter: "blur(0px)",
                position: "relative",
                left: "-500px",
                zIndex: "99999"

            });

            $(hoverTextPara[1]).css({

                transform: "translateX(0px)",
                transition: "all 2s ease 0.5s",
                filter: "blur(0px)",
                position: "relative",
                left: "-500px",
                zIndex: "9999999"

            });

            $(".textAnimation3").css({

                opacity: "0",
                transition: "all 0.5s ease"

            });

            $(hoverTextBox[1]).css({

                position: "absolute",
                left: "-500px",

            })

        },

        "mouseout": () => {

            $(image[1]).css({

                width: "100%",
                transition: "all 2s ease"

            });

            $(imageSection[1]).css({

                width: "100%",
                position: "absolute",
                zIndex: "999999",
                left: "0px",
                transition: "all 2s ease 0.5s",
                borderRadius: "0px"

            });

            $(imageSection[0]).css({

                opacity: "1",

            });

            $(imageSection[2]).css({

                opacity: "1"

            });

            $(hoverTextHeading[1]).css({

                transform: "translateX(-2000px)",
                transition: "all 2s ease 0.5s",
                position: "relative",
                zIndex: "9999999",
                filter: "blur(50px)"

            });

            $(hoverTextPara[1]).css({

                transform: "translateX(-2000px)",
                transition: "all 2s ease",
                position: "relative",
                zIndex: "9999999",
                filter: "blur(10px)"

            });

            $(".textAnimation1").css({

                opacity: "1",
                transition: "all 1s ease 1.5s"

            }); 

            $(".textAnimation2").css({

                opacity: "1",
                filter: "blur(0px)",
                transform: "translate(-50%, -50%) scale(1)",
                transition: "all 1s ease 1s",
                position: "absolute",
                zIndex: "9999999"

            });

            $(".textAnimation3").css({

                opacity: "1",
                transition: "all 1s ease 1.5s"

            });

        }

    });

}

function thirdImageHoverAnimation() {
    
    $(imageContainer[2]).on({

        "mouseover": () => {

            $(image[2]).css({

                width: "100%",
                transition: "all 2s ease",
                objectFit: "cover"

            });

            $(imageSection[2]).css({

                width: "1490px",
                transition: "all 2s ease",
                position: "absolute",
                left: "-990px",
                zIndex: "999999",
                borderRadius: "50px"

            });

            $(".textAnimation3").css({

                position: "absolute",
                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                transition: "all 2s ease",
                opacity: "0",

            });

            $(hoverTextHeading[2]).css({
              transform: "translateX(0px)",
              transition: "all 2s ease",
              filter: "blur(0px)",
              position: "relative",
              left: "-1000px",
              zIndex: "999999",
            });

            $(hoverTextPara[2]).css({
              transform: "translateX(0px)",
              transition: "all 2s ease 1s",
              filter: "blur(0px)",
              position: "relative",
              left: "-1000px",
              zIndex: "99999999",
            });

            $(imageSection[0]).css({

                opacity: "0",
                transition: "all 1s ease 0.5s"

            });

            $(".textAnimation1").css({

                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                position: "absolute",
                zIndex: "-1",
                transition: "all 0.7s ease 0.5s",

            });

            $(imageSection[1]).css({

                opacity: "0",
                transition: "all 1s ease"

            });

            $(".textAnimation2").css({

                transform: "translate(-50%, -50%) scale(0)",
                filter: "blur(10px)",
                position: "absolute",
                zIndex: "-1",
                transition: "all 0.7s ease"

            });

        },

        "mouseout": () => {

            $(image[2]).css({

                width: "100%",

            });

            $(imageSection[2]).css({

                width: "100%",
                position: "absolute",
                left: "0",
                zIndex: "-1",
                borderRadius: "0px",
                transition: "all 2s ease 1s",

            });

            $(".textAnimation3").css({

                position: "absolute",
                transform: "translate(-50%, -50%) scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 2s ease 1.6s"

            });

            $(hoverTextHeading[2]).css({
              transform: "translateX(-2000px)",
              transition: "all 2s ease 0.5s",
              filter: "blur(50px)",
              position: "relative",
              left: "-1000px",
              zIndex: "999999",
            });

            $(hoverTextPara[2]).css({
              transform: "translateX(-2000px)",
              transition: "all 2s ease",
              filter: "blur(10px)",
              position: "relative",
              left: "-1000px",
              zIndex: "99999999",
            });

            $(imageSection[0]).css({

                opacity: "1",
                position: "absolute",
                zIndex: "-1",
                transition: "all 1s ease 1s"

            });

            $(".textAnimation1").css({

                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0px)",
                transition: "all 1s ease 1s",
                position: "absolute"

            });

            $(imageSection[1]).css({

                opacity: "1",
                position: "absolute",
                zIndex: "-1",
                transition: "all 1s ease 0.5s"

            });

            $(".textAnimation2").css({

                transform: "translate(-50%, -50%) scale(1)",
                filter: "blur(0px)",
                transition: "all 1s ease 1.5s",
                position: "absolute"

            });


        }

    });

}

window.addEventListener("load", () => {

    imageScrollAnimation();
    firstImageHoverAnimation();
    secondImageHoverAnimation();
    thirdImageHoverAnimation();

})
