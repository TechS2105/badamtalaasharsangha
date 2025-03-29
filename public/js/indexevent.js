let yearLinks = document.querySelectorAll(".yearlinks ul li");
let cardBox = document.querySelector(".eventbox #firstbox");
let cardBox2 = document.querySelector(".eventbox #secondbox");
let cardBox3 = document.querySelector(".eventbox #thirdbox");
let cardBox4 = document.querySelector(".eventbox #fourthbox");
let cardBox5 = document.querySelector(".eventbox #fifthbox");
let firstCardBoxHeading = document.querySelector(".eventbox #firstbox h3");
let secondCardBoxHeading = document.querySelector(".eventbox #secondbox h3");
let thirdCardBoxHeading = document.querySelector(".eventbox #thirdbox h3");
let fourthCardBoxHeading = document.querySelector(".eventbox #fourthbox h3");
let fifthCardBoxHeading = document.querySelector(".eventbox #fifthbox h3");
let eventSection = document.querySelector(".eventsection");
let eventHeadingBox = document.querySelector(".coloroverlay .eventtext");
let eventHeadingText = document.querySelector(".coloroverlay .eventtext h2");
let eventYearBox = document.querySelector(".events .yearlinks");
let eventScrollerSection = document.querySelectorAll(".eventsbox");
let eventBtn = document.getElementById("button");

firstCardBoxHeading.classList.add("toggleclass");
secondCardBoxHeading.classList.add("toggleclass");
thirdCardBoxHeading.classList.add("toggleclass");
fourthCardBoxHeading.classList.add("toggleclass");
fifthCardBoxHeading.classList.add("toggleclass");
// secondCardBoxHeading.style.transform = `translateX(-1000px)`;
// thirdCardBoxHeading.style.transform = `translateX(-1000px)`;
// fourthCardBoxHeading.style.transform = `translateX(-1000px)`;
// fifthCardBoxHeading.style.transform = `translateX(-1000px)`;
// eventSection.style.transform = `scale(0)`;
// eventSection.style.filter = `blur(50px)`;
eventHeadingBox.style.opacity = `0`;
eventHeadingText.style.transform = `translateY(500px)`;
eventYearBox.style.transform = `translateY(500px)`;
eventBtn.style.transform = "scale(0)";

eventScrollerSection.forEach((eventBox) => {

  eventBox.style.opacity = "0";

});

yearLinks[0].style.backgroundColor = "#2b9348";
yearLinks[0].style.color = "#ffff3f";

function eventBoxAnimation(){

  $(window).on("scroll", () => {

    if ($(window).scrollTop() > 1500) {

      // $(eventSection).css({

      //   transform: "scale(1)",
      //   transition: "all 0.7s ease",
      //   filter: "blur(0px)"

      // });

      $(eventHeadingBox).css({

        opacity: "1",
        transition: "all 0.7s ease"

      });

      $(eventHeadingText).css({

        transform: "translateY(0px)",
        transition: "all 0.7s ease 0.3s"

      });

      $(eventYearBox).css({

        transform: "translateY(0px)",
        transition: "all 0.7s ease 0.6s"

      });

     eventScrollerSection.forEach((eventBox) => {
       eventBox.style.opacity = "1";
       eventBox.style.transition = "all 2s ease 1s";
     });
      
      $(eventBtn).css({
        transform: "scale(1)",
        transition: "all 0.7s ease 1s",
      });

    } else {
      
      // $(eventSection).css({

      //   transform: "scale(0)",
      //   transition: "all 0.7s ease 1s",
      //   filter: "blur(50px)"

      // });

      $(eventHeadingBox).css({

        opacity: "0",
        transition: "all 0.7s ease 0.6s",

      });

      $(eventHeadingText).css({

        transform: "translateY(500px)",
        transition: "all 0.7s ease 0.5s"

      });

      $(eventYearBox).css({

        transform: "translateY(500px)",
        transition: "all 0.7s ease 0.5s"

      });

      eventScrollerSection.forEach((eventBox) => {
        eventBox.style.opacity = "0";
        eventBox.style.transition = "all 0.5s ease 0.2s";
      });

      $(eventBtn).css({
        transform: "scale(0)",
        transition: "all 0.5s ease 0.5s",
      });

    }

  });

}

function yearLinkFunction() {
  
  yearLinks[0].addEventListener("click", () => {

    yearLinks[0].style.backgroundColor = "#2b9348";
    yearLinks[0].style.color = "#ffff3f";
    yearLinks[1].style.backgroundColor = "transparent";
    yearLinks[1].style.color = "#2b9348";
    yearLinks[2].style.backgroundColor = "transparent";
    yearLinks[2].style.color = "#2b9348";
    yearLinks[3].style.backgroundColor = "transparent";
    yearLinks[3].style.color = "#2b9348";
    yearLinks[4].style.backgroundColor = "transparent";
    yearLinks[4].style.color = "#2b9348";

    cardBox.style.display = "block";
    cardBox2.style.display = "none";
    cardBox3.style.display = "none";
    cardBox4.style.display = "none";
    cardBox5.style.display = "none";

  });

  yearLinks[1].addEventListener("click", () => {
        
    // secondCardBoxHeading.style.transform = `translateX(0px)`;
    // secondCardBoxHeading.style.transition = "all 0.5s ease";

    yearLinks[1].style.backgroundColor = "#2b9348";
    yearLinks[1].style.color = "#ffff3f";
    yearLinks[2].style.backgroundColor = "transparent";
    yearLinks[2].style.color = "#2b9348";
    yearLinks[3].style.backgroundColor = "transparent";
    yearLinks[3].style.color = "#2b9348";
    yearLinks[4].style.backgroundColor = "transparent";
    yearLinks[4].style.color = "#2b9348";
    yearLinks[0].style.backgroundColor = "transparent";
    yearLinks[0].style.color = "#2b9348";

    cardBox2.style.display = "block";
    cardBox.style.display = "none";
    cardBox3.style.display = "none";
    cardBox4.style.display = "none";
    cardBox5.style.display = "none";

  });

  yearLinks[2].addEventListener("click", () => {

    // thirdCardBoxHeading.style.transform = `translateX(0px)`;
    // thirdCardBoxHeading.style.transition = "all 0.5s ease";

    yearLinks[4].style.backgroundColor = "transparent";
    yearLinks[4].style.color = "#2b9348";
    yearLinks[3].style.backgroundColor = "transparent";
    yearLinks[3].style.color = "#2b9348";
    yearLinks[2].style.backgroundColor = "#2b9348";
    yearLinks[2].style.color = "#ffff3f";
    yearLinks[1].style.backgroundColor = "transparent";
    yearLinks[1].style.color = "#2b9348";
    yearLinks[0].style.backgroundColor = "transparent";
    yearLinks[0].style.color = "#2b9348";

    cardBox3.style.display = "block";
    cardBox2.style.display = "none";
    cardBox.style.display = "none";
    cardBox4.style.display = "none";
    cardBox5.style.display = "none";

  });

  yearLinks[3].addEventListener("click", () => {

    // fourthCardBoxHeading.style.transform = `translateX(0px)`;
    // fourthCardBoxHeading.style.transition = "all 0.5s ease";

    yearLinks[4].style.backgroundColor = "transparent";
    yearLinks[4].style.color = "#2b9348";
    yearLinks[3].style.backgroundColor = "#2b9348";
    yearLinks[3].style.color = "#ffff3f";
    yearLinks[2].style.backgroundColor = "transparent";
    yearLinks[2].style.color = "#2b9348";
    yearLinks[1].style.backgroundColor = "transparent";
    yearLinks[1].style.color = "#2b9348";
    yearLinks[0].style.backgroundColor = "transparent";
    yearLinks[0].style.color = "#2b9348";

    cardBox4.style.display = "block";
    cardBox3.style.display = "none";
    cardBox2.style.display = "none";
    cardBox.style.display = "none";
    cardBox5.style.display = "none";

  });

  yearLinks[4].addEventListener("click", () => {

    // fifthCardBoxHeading.style.transform = `translateX(0px)`;
    // fifthCardBoxHeading.style.transition = "all 0.5s ease";

    yearLinks[4].style.backgroundColor = "#2b9348";
    yearLinks[4].style.color = "#ffff3f";
    yearLinks[3].style.backgroundColor = "transparent";
    yearLinks[3].style.color = "#2b9348";
    yearLinks[2].style.backgroundColor = "transparent";
    yearLinks[2].style.color = "#2b9348";
    yearLinks[1].style.backgroundColor = "transparent";
    yearLinks[1].style.color = "#2b9348";
    yearLinks[0].style.backgroundColor = "transparent";
    yearLinks[0].style.color = "#2b9348";

    cardBox5.style.display = "block";
    cardBox4.style.display = "none";
    cardBox3.style.display = "none";
    cardBox2.style.display = "none";
    cardBox.style.display = "none";

  })

}

window.addEventListener("load", () => {

  setTimeout(() => {

    yearLinkFunction();
    eventBoxAnimation();

  }, 1000);

})