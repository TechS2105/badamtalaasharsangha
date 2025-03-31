let trophyHeading = document.querySelector(".trophyheading h2");
let trophyCarousel = document.querySelector(".trophycarousel .carouselbox");
let trophyCarouselBtn = document.querySelector(".trophycarousel .trophybutton");

$(trophyHeading).css({

    transform: "translateY(500px)",
    filter: "blur(10px)",

});

$(trophyCarousel).css({

    opacity: "0",
    filter: "blur(10px)"

});

$(trophyCarouselBtn).css({

    transform: "scale(0)",
    filter: "blur(10px)"

});

function trophyAnimation() {
    
    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 4800) {
            
            $(trophyHeading).css({

                transform: "translateY(0px)",
                filter: "blur(0px)",
                transition: "all 1s ease"

            });

            $(trophyCarousel).css({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 1s ease 0.7s"

            });

            $(trophyCarouselBtn).css({

                transform: "scale(1)",
                filter: "blur(0px)",
                transition: "all 1s ease 0.8s"

            })

        }  else {
            
            $(trophyHeading).css({

                transform: "translateY(500px)",
                filter: "blur(10px)",
                transition: "all 1s ease 0.5s"

            });

            $(trophyCarousel).css({

                opacity: "0",
                filter: "blur(10px)",
                transition: "all 1s ease 0.4s"

            });

            $(trophyCarouselBtn).css({

                transform: "scale(0)",
                filter: "blur(10px)",
                transition: "all 1s ease 0.3s"

            });

        }

    });

}

window.addEventListener("load", () => {

    setTimeout(() => {

        trophyAnimation();

    })

});