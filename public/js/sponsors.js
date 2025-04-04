let logoHeading = document.querySelector(".headingText h2");
let firstLogoCarousel = document.querySelector(".logocarousel");
let secondLogoCarousel = document.querySelector(".logocarousel2");

$(logoHeading).css({
  transform: "translateY(500px)",
  opacity: "0",
});

$(firstLogoCarousel).css({
  transform: "scale(0)",
  filter: "blur(10px) greayscale()",
});

$(secondLogoCarousel).css({

    transform: "scale(0)",
    filter: "blur(10px) grayscale()"

})

function logoHeadingAnimation() {
    
    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 3000) {
            
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

    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 3000) {
            
            $(firstLogoCarousel).css({
              transform: "scale(1)",
              transition: "all 1s ease 0.7s",
              filter: "blur(0px)",
            });

            $(secondLogoCarousel).css({
              transform: "scale(1)",
              transition: "all 1s ease 1s",
              filter: "blur(0px)",
            });

        } else {
            
            $(firstLogoCarousel).css({
              transform: "scale(0)",
              transition: "all 1s ease 0.7s",
              filter: "blur(10px) grayscale()",
            });

            $(secondLogoCarousel).css({
              transform: "scale(0)",
              transition: "all 1s ease",
              filter: "blur(10px) grayscale()",
            });

        }

    });

}

window.addEventListener("load", () => {

    setTimeout(() => {

        logoHeadingAnimation();
        logoCarouselAnimation();

    })

})