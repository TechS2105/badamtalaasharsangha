let videoSectionCloseBtn = document.querySelectorAll(".videoshowcase .videoboxsection i");
let videoPlayerBox = document.querySelectorAll(".videoshowcase .videoboxsection");
let video = document.querySelectorAll(".videoshowcase .videoboxsection video");
let videoPlayerBacksection = document.querySelectorAll(".videoshowcase");
let videoPlayIcon = document.querySelectorAll(".videobox .icon");
let sideBox = document.querySelector(".videoHeading");
let videoBox = document.querySelectorAll(".videos .videobox");
let videoHeadingImage = document.querySelector(".videoHeading img");
let videoHeading = document.querySelector(".videoHeading h2");
let videoLink = document.querySelector(".videoHeading a");

videoPlayerBacksection.forEach((allBox) => {

  allBox.style.transform = "scale(0)";

});

videoBox.forEach((allVideoBox) => {

  allVideoBox.style.transform = "scale(0)";
  allVideoBox.style.filter = "blur(10px)";

});

videoSectionCloseBtn[0].style.transform = "translateX(200px)";
videoPlayerBacksection[0].style.transform = "scale(0)";
videoPlayerBox[0].style.transform = "scale(0)";
videoPlayerBox[0].style.filter = "blur(10px)";

videoSectionCloseBtn[1].style.transform = "translateX(200px)";
videoPlayerBacksection[1].style.transform = "scale(0)";
videoPlayerBox[1].style.transform = "scale(0)";
videoPlayerBox[1].style.filter = "blur(10px)";

videoSectionCloseBtn[2].style.transform = "translateX(200px)";
videoPlayerBacksection[2].style.transform = "scale(0)";
videoPlayerBox[2].style.transform = "scale(0)";
videoPlayerBox[2].style.blur = "blur(10px)";

sideBox.style.transform = "translateX(-500px)";
sideBox.style.filter = "blur(10px)";

videoHeadingImage.style.transform = "scale(0)";
videoHeading.style.transform = "scale(0)";
videoLink.style.transform = "scale(0)";

function scrollingFunction() {
    
    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 3000) {
            
          $(sideBox).css({
                
            transform: "translateX(0px)",
            transition: "all 0.7s ease",
            filter: "blur(0px)"

          });
          
          $(videoHeadingImage).css({

            transform: "scale(1)",
            transition: "all 0.7s ease 0.6s"

          });

          $(videoHeading).css({

            transform: "scale(1)",
            transition: "all 0.7s ease 0.7s"

          });

          $(videoLink).css({

            transform: "scale(1)",
            transition: "all 0.7s ease 0.8s"

          });

        }

    });

}

function videoCloseBtn() {
    
    videoSectionCloseBtn[0].addEventListener("click", () => {

        videoPlayerBox[0].style.transition = "all 0.7s ease";
        videoPlayerBox[0].style.transform = "scale(0)";
        videoPlayerBox[0].style.filter = "blur(10px)";
        videoSectionCloseBtn[0].style.transform = "translateX(200px)";
        videoSectionCloseBtn[0].style.transition = "all 0.7s ease";

        $(videoPlayerBacksection[0]).css({
          opacity: "0",
          transition: "all 0.7s ease 0.7s",
          position: "fixed",
          zIndex: "-1",
        });

    });

    videoSectionCloseBtn[1].addEventListener("click", () => {

      videoPlayerBox[1].style.transition = "all 0.7s ease";
      videoPlayerBox[1].style.transform = "scale(0)";
      videoPlayerBox[1].style.filter = "blur(10px)";
      videoSectionCloseBtn[1].style.transform = "translateX(200px)";
      videoSectionCloseBtn[1].style.transition = "all 0.7s ease";

      $(videoPlayerBacksection[1]).css({
        opacity: "0",
        transition: "all 0.7s ease 0.7s",
        position: "fixed",
        zIndex: "-1",
      });
    });

    videoSectionCloseBtn[2].addEventListener("click", () => {

      videoPlayerBox[2].style.transition = "all 0.7s ease";
      videoPlayerBox[2].style.transform = "scale(0)";
      videoPlayerBox[2].style.filter = "blur(10px)"
      videoSectionCloseBtn[2].style.transform = "translateX(200px)";
      videoSectionCloseBtn[2].style.transition = "all 0.7s ease";

      $(videoPlayerBacksection[2]).css({
        opacity: "0",
        transition: "all 0.7s ease 0.7s",
        position: "fixed",
        zIndex: "-1",
      });
    });

}

function videoIcon() {
    
    videoPlayIcon[0].addEventListener("click", () => {

        videoPlayerBox[0].style.transform = "scale(1)";
        videoPlayerBox[0].style.filter = "blur(0px)";
        videoPlayerBox[0].style.transition = "all 0.7s ease 0.5s";
        videoSectionCloseBtn[0].style.transform = "translateX(0px)";
        videoSectionCloseBtn[0].style.transition = "all 1s ease 0.6s";

        $(videoPlayerBacksection[0]).css({
          transform: "scale(1)",
          transition: "all 0.7s ease",
          opacity: "1",
          transition: "all 0.7s ease",
          position: "fixed",
          zIndex: "2",
          
        });

        $(videoSectionCloseBtn[0]).on("click", () => {

            video[0].pause();

        });

    });

    videoPlayIcon[1].addEventListener("click", () => {

      videoPlayerBox[1].style.transform = "scale(1)";
      videoPlayerBox[1].style.transition = "all 0.7s ease 0.5s";
      videoPlayerBox[1].style.filter = "blur(0px)";
      videoSectionCloseBtn[1].style.transform = "translateX(0px)";
      videoSectionCloseBtn[1].style.transition = "all 1s ease 0.6s";

      $(videoPlayerBacksection[1]).css({
        transform: "scale(1)",
        transition: "all 0.7s ease",
        opacity: "1",
        transition: "all 0.7s ease",
        position: "fixed",
        zIndex: "2",
        
      });

      $(videoSectionCloseBtn[1]).on("click", () => {
        video[1].pause();
      });
        
    });

    videoPlayIcon[2].addEventListener("click", () => {
      videoPlayerBox[2].style.transform = "scale(1)";
      videoPlayerBox[2].style.transition = "all 0.7s ease 0.5s";
      videoPlayerBox[2].style.filter = "blur(0px)";
      videoSectionCloseBtn[2].style.transform = "translateX(0px)";
      videoSectionCloseBtn[2].style.transition = "all 1s ease 0.6s";

      $(videoPlayerBacksection[2]).css({
        transform: "scale(1)",
        transition: "all 0.7s ease",
        opacity: "1",
        transition: "all 0.7s ease",
        position: "fixed",
        zIndex: "2",
      });

      $(videoSectionCloseBtn[2]).on("click", () => {
        video[2].pause();
      });
    });

}

function videoBoxAnimation() {

  $(window).on("scroll", () => {

    if ($(window).scrollTop() > 3000) {
      
      $(videoBox[0]).css({

        transform: "scale(1)",
        transition: 'all 0.7s ease 0.5s',
        filter: "blur(0px)"

      });

      $(videoBox[1]).css({

        transform: "scale(1)",
        transition: "all 0.7s ease 0.6s",
        filter: "blur(0px)"

      });

      $(videoBox[2]).css({

        transform: "scale(1)",
        transition: "all 0.7s ease 0.7s",
        filter: "blur(0px)"

      });

    } else {
      

    }

  })

}

window.addEventListener("load", () => {

    setTimeout(() => {

      videoCloseBtn();
      videoIcon();
      scrollingFunction();
      videoBoxAnimation();

    });

})