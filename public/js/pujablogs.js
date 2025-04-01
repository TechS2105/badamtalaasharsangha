let pujaBlogHeadingBackground = document.querySelector(".blogsectioncoloroverlay .blogtext");
let pujaBlogHeading = document.querySelector(".blogsectioncoloroverlay .blogtext h2");
let blogCarouselSection = document.querySelector(".blogsection");
let blogCarouselBox = document.querySelectorAll(".blogcarousel");
let blogBoxDate = document.querySelectorAll(
  ".blogcarousel .blogbox .carouselblogtext .blogtext1 .blogcontent2 p"
);

const date = new Date().toDateString();

blogBoxDate.forEach((boxDate) => {

  console.log(boxDate);
  boxDate.innerHTML = `<p style="margin-bottom: 0"> ${date} </p>`;

});

blogCarouselBox.forEach((box) => {

  box.style.opacity = "0";

});

$(pujaBlogHeadingBackground).css({

  opacity: "0"

});

$(pujaBlogHeading).css({

  opacity: "0",
  transform: "translateY(500px)"

});

function blogHeading() {
  
  $(window).on("scroll", () => {

    if ($(window).scrollTop() > 5400) {
      
      $(pujaBlogHeadingBackground).css({

        opacity: "1",
        transition: "all 0.7s ease"

      });

      $(pujaBlogHeading).css({
        opacity: "1",
        transform: "translateY(0px)",
        transition: "all 0.7s ease",
      });

    } else {
      
      $(pujaBlogHeadingBackground).css({

        opacity: "0",
        transition: "all 0.7s ease 0.5s"

      });

      $(pujaBlogHeading).css({

        opacity: "0",
        transform: "translateY(500px)",
        transition: "all 1s ease 0.6s"

      })

    }

  });

}

function blogBoxCarousel() {
  
  $(window).on("scroll", () => {

    if ($(window).scrollTop() > 5400) {
      
      blogCarouselBox.forEach((box) => {

        box.style.opacity = "1";
        box.style.transition = "all 2s ease 0.5s";

      });

    } else {
      
      blogCarouselBox.forEach((box) => {

        box.style.opacity = "0";
        box.style.transition = "all 2s ease";

      });

    }

  });

}

$(window).on("load", () => {

  setTimeout(() => {

    blogHeading();
    blogBoxCarousel();

  });

})