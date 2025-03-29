let images = document.querySelectorAll(".imgdiv .img");
let messageBox = document.querySelector(".messagebox .message");
let homeIcon = document.querySelector(".message a i");
let homeLink = document.querySelector(".message a");

images[0].style.transform = `translateX(-200%)`;
images[1].style.transform = `translateY(200%)`;
images[2].style.transform = "translateY(-200%)";
images[3].style.transform = "translateX(200%)";
messageBox.style.transform = "scale(0)";
messageBox.style.filter = "blur(10px)";
homeIcon.style.transform = `translateX(-500px)`;
homeIcon.style.marginRight = "-20px";


function firstImageAnimation() {


    images[0].style.transform = `translateY(0%)`;
    images[0].style.transition = 'all 0.7s ease';


}

function secondImageAnimation() {
    
    images[1].style.transform = `translateY(0%)`;
    images[1].style.transition = "all 0.7s ease 0.3s";

}

function thirdImageAnimation() {
    
    images[2].style.transform = `translateY(0%)`;
    images[2].style.transition = "all 0.7s ease 0.4s";

}

function fourthImageAnimation() {
    
    images[3].style.transform = `translateX(0%)`;
    images[3].style.transition = "all 0.7s ease 0.5s"

}

function messageBoxAnimation() {
    
    messageBox.style.transform = "scale(1)";
    messageBox.style.transition = "all 0.7s ease 1.2s";
    messageBox.style.filter = "blur(0px)";

}

function buttonAnimation() {
    
    $(homeLink).on({
       
        "mouseover": function () {
            
            $(homeIcon).css({

                transform: "translateX(0px)",
                transition: "all 0.9s ease",
                marginRight: "5px",
                fontSize: "20px"

            });

        },

        "mouseout": function () {
            
            $(homeIcon).css({

                transform: "translateX(-500px)",
                transition: "all 0.9s ease",
                marginRight: "-20px",

            })

        }

    });

}

window.addEventListener("load", () => {

    setTimeout(() => {

        firstImageAnimation();
        secondImageAnimation();
        thirdImageAnimation();
        fourthImageAnimation();
        messageBoxAnimation();
        buttonAnimation();

    });

});