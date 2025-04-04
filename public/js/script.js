let aboutHeading = document.querySelector("#aboutheading");
let aboutText = document.querySelector("#abouttext");
let aboutBtn = document.querySelector("#aboutbutton");
let aboutSection = document.querySelector(".aboutsection");

aboutHeading.style.transform = 'scale(0)';
aboutText.style.transform = 'scale(0)';
aboutBtn.style.transform = 'scale(0)';
aboutBtn.innerHTML = `Read More`;

const aboutSectionAnimation = () => {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
        
            aboutHeading.style.transform = "scale(1)";
            aboutHeading.style.transition = "all 0.7s ease";
            aboutText.style.transform = "scale(1)";
            aboutText.style.transition = "all 0.7s ease 0.5s";
            aboutBtn.style.transform = "scale(1)";
            aboutBtn.style.transition = "all 0.7s ease 0.7s";

        } else {
        
            aboutHeading.style.transform = "scale(0)";
            aboutHeading.style.transition = "all 0.7s ease";
            aboutText.style.transform = "scale(0)";
            aboutText.style.transition = "all 0.7s ease 0.5s";
            aboutBtn.style.transform = "scale(0)"
            aboutBtn.style.transition = "all 0.7s ease 0.7s";

        }

    });

    $(aboutBtn).on({
        
        "mouseover": function () {

            $(aboutBtn).html(`<i class="ri-book-open-line"></i>`);
            $(aboutBtn).css({
              transition: "all 0.7s ease",
              color: "#ffff3f",
            });

        },

        "mouseout": function () {
            
            $(aboutBtn).html(`Read More`);
            $(aboutBtn).css({
                transition: "all 0.7s ease",
            });

        }
    
    })
    
}

window.addEventListener("load", () => {

    setTimeout(() => {
       
        aboutSectionAnimation();

    });

});