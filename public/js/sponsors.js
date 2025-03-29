let logoHeading = document.querySelector(".headingText h2");
let logoCarousel = document.querySelectorAll(".logocarousel");

$(logoHeading).css({
  transform: "translateY(500px)",
  opacity: "0",
});

function logoHeadingAnimation() {
    
    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 3500) {
            
            $(logoHeading).css({

                transform: "translateY(0px)",
                opacity: "1",
                transition: "all 0.7s ease"

            });

        } else {
            
            $(logoHeading).css({

                transform: "translateY(500px)",
                opacity: "0",
                transition: "all 0.7s ease 1s"

            });

        }

    });

}

function logoCarouselAnimation() {
    

}

window.addEventListener("load", () => {

    setTimeout(() => {

        logoHeadingAnimation();
        logoCarouselAnimation();

    })

})